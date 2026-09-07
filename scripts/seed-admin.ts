import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dns from "dns";
import fs from "fs";
import path from "path";
import User from "../src/models/User";

// Load .env.local manually
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const envPath = path.resolve(".env.local");
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIndex = trimmed.indexOf("=");
    if (eqIndex === -1) continue;
    const key = trimmed.slice(0, eqIndex).trim();
    let value = trimmed.slice(eqIndex + 1).trim();
    // Strip surrounding quotes, e.g. MONGODB_URI="mongodb+srv://..."
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    // Don't override variables already set in the environment
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("Please define the MONGODB_URI environment variable");
  process.exit(1);
}

async function seed() {
  try {
    await mongoose.connect(MONGODB_URI!);
    console.log("Connected to MongoDB");

    const existingUser = await User.findOne({ email: "admin@hopebridge.com" });

    if (existingUser) {
      // Promote an existing seeded admin so they keep access to user management
      if (existingUser.role !== "superadmin") {
        existingUser.role = "superadmin";
        await existingUser.save();
        console.log("Promoted existing user to super admin:", existingUser.email);
      } else {
        console.log("Super admin user already exists:", existingUser.email);
      }
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash("admin123", 12);

    const admin = await User.create({
      email: "admin@hopebridgeconsulting.org",
      name: "Admin",
      password: hashedPassword,
      role: "superadmin",
    });

    console.log("Super admin user created successfully!");
    console.log("Email: admin@hopebridgeconsulting.org");
    console.log("Password: admin123");
    console.log("⚠️  Change this password after first login!");
    console.log(
      "💡 This account can create additional admin accounts (email + password) from Admin → Users."
    );

    process.exit(0);
  } catch (error) {
    console.error("Failed to seed admin user:", error);
    process.exit(1);
  }
}

seed();
