# Hope Bridge Counseling & Consultancy

A professional website for **Hope Bridge Counseling & Consultancy** — providing mental health counseling, relationship support, and organizational consultancy services in Dar es Salaam, Tanzania.

## 🌐 Live Preview

> [https://hopebridgeconsulting.vercel.app](https://hopebridgeconsulting.vercel.app)

## 📸 Features

- **Responsive Design** — Optimized for mobile, tablet, and desktop
- **Dark Mode** — Full dark mode support via Tailwind CSS
- **Modern UI** — Clean, professional design with a calming blue, green, and gold color palette
- **App Router** — Built with Next.js 16 App Router for fast, server-rendered pages
- **Type-safe** — Written entirely in TypeScript

## 🗂️ Site Structure

### Counseling Services
| Route | Description |
|-------|-------------|
| `/counseling` | Overview of all counseling services |
| `/counseling/individual` | Mental health counseling — stress, anxiety, grief, trauma |
| `/counseling/marriage` | Marriage and couples counseling |
| `/counseling/family` | Family counseling and dynamics |
| `/counseling/psychosocial` | Psychosocial support services |

### Consultancy Services
| Route | Description |
|-------|-------------|
| `/consultancy` | Overview of all consultancy services |
| `/consultancy/organizational` | Organizational development and capacity building |
| `/consultancy/project-management` | Project management and consultancy |
| `/consultancy/training` | Training and skills development |
| `/consultancy/technical` | Technical support and advisory |
| `/consultancy/research` | Research services |
| `/consultancy/institutional` | Institutional strengthening |

### Other Pages
| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, services, and call-to-action |
| `/about` | About Hope Bridge |
| `/contact` | Contact information and inquiry form |
| `/book` | Book a counseling session |
| `/hope-talks` | Hope Talks podcast |
| `/resources` | Helpful resources and guides |

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.0 or later
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/hopebridgeconsulting.git

# Navigate to the project directory
cd hopebridgeconsulting

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the site.

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| [Next.js 16](https://nextjs.org) | React framework with App Router |
| [React 19](https://react.dev) | UI library |
| [TypeScript 5](https://www.typescriptlang.org) | Type-safe JavaScript |
| [Tailwind CSS 4](https://tailwindcss.com) | Utility-first CSS framework |
| [Geist Font](https://vercel.com/font) | Modern sans-serif typography |

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with Header & Footer
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles & Tailwind imports
│   ├── about/              # About page
│   ├── book/               # Booking page
│   ├── contact/            # Contact page
│   ├── counseling/         # Counseling services
│   │   ├── individual/
│   │   ├── marriage/
│   │   ├── family/
│   │   └── psychosocial/
│   ├── consultancy/        # Consultancy services
│   │   ├── organizational/
│   │   ├── project-management/
│   │   ├── training/
│   │   ├── technical/
│   │   ├── research/
│   │   └── institutional/
│   ├── hope-talks/         # Podcast page
│   └── resources/          # Resources page
├── components/
│   ├── Header.tsx          # Site navigation header
│   └── Footer.tsx          # Site footer
└── public/                 # Static assets
```

## 🎨 Brand Colors

| Color | Hex | Usage |
|-------|-----|-------|
| Navy Blue | `#1e3a5f` | Primary — headings, nav, hero backgrounds |
| Teal Green | `#4a9e6e` | Accent — CTAs, highlights, buttons |
| Gold | `#d4a843` | Secondary — podcast section, special accents |

## 📦 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📄 License

This project is private and proprietary. Contact the owner for licensing inquiries.

---

Built with ❤️ for the Hope Bridge Counseling & Consultancy team.
