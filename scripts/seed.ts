import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "path";
import dns from "dns";

// Force Google DNS to resolve MongoDB SRV records
dns.setServers(["8.8.8.8", "8.8.4.4"]);

dotenv.config({ path: path.resolve(__dirname, "../.env.local") });

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error("❌ MONGODB_URI is not defined in .env.local");
  process.exit(1);
}

// Schemas (inline to avoid module resolution issues)
const TeamMemberSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    bio: { type: String, required: true, trim: true },
    image: { type: String, default: "" },
    initials: { type: String, default: "" },
    order: { type: Number, default: 0 },
  },
  { timestamps: true }
);

TeamMemberSchema.pre("save", function (next) {
  if (!this.initials && this.name) {
    this.initials = this.name
      .split(" ")
      .map((n: string) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  }
  next();
});

const ResourceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: ["Mental Health", "Relationships", "Workplace", "Consultancy"],
    },
    content: { type: String, default: "" },
    image: { type: String, default: "" },
    author: { type: String, default: "Hope Bridge Team" },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const EpisodeSchema = new mongoose.Schema(
  {
    number: { type: Number, required: true, unique: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true, trim: true },
    category: {
      type: String,
      required: true,
      enum: [
        "Mental Health",
        "Relationships",
        "Family",
        "Workplace",
        "Leadership & Organizations",
        "Community Development",
        "Personal Growth",
      ],
    },
    date: { type: String, required: true },
    audioUrl: { type: String, default: "" },
    image: { type: String, default: "" },
    published: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const TeamMember = mongoose.models.TeamMember || mongoose.model("TeamMember", TeamMemberSchema);
const Resource = mongoose.models.Resource || mongoose.model("Resource", ResourceSchema);
const Episode = mongoose.models.Episode || mongoose.model("Episode", EpisodeSchema);

// Seed data
const teamMembers = [
  {
    name: "Anna Christopher Mbeyela",
    role: "Overall Leadership, Administration and Strategic Coordinator",
    bio: "Providing visionary leadership and strategic coordination to drive Hope Bridge's mission of delivering professional counseling and consultancy services.",
    image: "/team/anna-christopher-mbeyela.jpg",
    order: 1,
  },
  {
    name: "Dr. Felix Peter Mkini",
    role: "Deputy Coordinator",
    bio: "Supporting strategic coordination and operational leadership to ensure the effective delivery of counseling and consultancy services.",
    image: "/team/dr-felix-peter-mkini.jpg",
    order: 2,
  },
  {
    name: "Levina Athanas",
    role: "Head of Consultancy, Research and Knowledge Management",
    bio: "Leading consultancy, research initiatives, and knowledge management to drive evidence-based solutions and organizational impact.",
    image: "/team/levina-athanas.jpg",
    order: 3,
  },
];

const resources = [
  {
    title: "Understanding Anxiety: Signs, Causes, and Coping",
    description: "A comprehensive guide to understanding anxiety disorders, their root causes, and evidence-based coping strategies.",
    category: "Mental Health",
    content: "Anxiety is one of the most common mental health challenges...",
    author: "Dr. Felix Peter Mkini",
  },
  {
    title: "The Impact of Stress on Your Health",
    description: "How chronic stress affects your physical and mental wellbeing, and what you can do about it.",
    category: "Mental Health",
    content: "Stress is a natural response to challenges...",
    author: "Hope Bridge Team",
  },
  {
    title: "Communication Tips for Couples",
    description: "Practical communication strategies to strengthen your relationship and deepen connection.",
    category: "Relationships",
    content: "Effective communication is the foundation of healthy relationships...",
    author: "Hope Bridge Team",
  },
  {
    title: "Navigating Family Conflict",
    description: "How to address and resolve family disagreements while maintaining healthy relationships.",
    category: "Relationships",
    content: "Family conflict is normal but can be managed...",
    author: "Hope Bridge Team",
  },
  {
    title: "Recognizing Burnout Before It's Too Late",
    description: "Learn to identify the early warning signs of burnout and take proactive steps.",
    category: "Workplace",
    content: "Burnout affects millions of professionals worldwide...",
    author: "Levina Athanas",
  },
  {
    title: "Work-Life Balance Strategies",
    description: "Practical tips for maintaining a healthy balance between professional and personal life.",
    category: "Workplace",
    content: "Achieving work-life balance requires intentional effort...",
    author: "Hope Bridge Team",
  },
  {
    title: "Introduction to Organizational Development",
    description: "Understanding the principles and practices of organizational development for lasting impact.",
    category: "Consultancy",
    content: "Organizational development is a systematic approach...",
    author: "Levina Athanas",
  },
  {
    title: "Project Management Best Practices",
    description: "Essential project management methodologies for successful organizational initiatives.",
    category: "Consultancy",
    content: "Effective project management ensures successful outcomes...",
    author: "Levina Athanas",
  },
];

const episodes = [
  {
    number: 1,
    title: "Understanding Workplace Burnout",
    description: "Feeling overwhelmed at work? We explore the signs of burnout and practical strategies for recovery and prevention.",
    category: "Workplace",
    date: "Aug 2026",
  },
  {
    number: 2,
    title: "Building Stronger Family Bonds",
    description: "How families can navigate challenges, improve communication, and create lasting connections.",
    category: "Family",
    date: "Jul 2026",
  },
  {
    number: 3,
    title: "The Power of Seeking Help",
    description: "Breaking the stigma around counseling and mental health support.",
    category: "Mental Health",
    date: "Jun 2026",
  },
  {
    number: 4,
    title: "Leadership in Challenging Times",
    description: "How leaders can maintain resilience and support their teams during difficult periods.",
    category: "Leadership & Organizations",
    date: "May 2026",
  },
];

async function seed() {
  console.log("🌱 Starting database seed...\n");

  try {
    await mongoose.connect(MONGODB_URI!);
    console.log("✅ Connected to MongoDB\n");

    // Clear existing data
    await TeamMember.deleteMany({});
    await Resource.deleteMany({});
    await Episode.deleteMany({});
    console.log("🗑️  Cleared existing data");

    // Seed team members
    const team = await TeamMember.insertMany(teamMembers);
    console.log(`👥 Seeded ${team.length} team members`);

    // Seed resources
    const resourcesCreated = await Resource.insertMany(resources);
    console.log(`📚 Seeded ${resourcesCreated.length} resources`);

    // Seed episodes
    const episodesCreated = await Episode.insertMany(episodes);
    console.log(`🎙️  Seeded ${episodesCreated.length} episodes`);

    console.log("\n✅ Database seeded successfully!");
    console.log("\n📊 Summary:");
    console.log(`   Team Members: ${team.length}`);
    console.log(`   Resources:    ${resourcesCreated.length}`);
    console.log(`   Episodes:     ${episodesCreated.length}`);

    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding database:", error);
    process.exit(1);
  }
}

seed();
