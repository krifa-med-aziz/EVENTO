# Evento

A modern event discovery web application built with Next.js 15, TypeScript, Prisma, and Tailwind CSS.

## Features

- Browse and search events by city
- View event details, including organizer, location, and description
- Pagination for event lists
- Dynamic routes for events and cities
- SEO metadata for pages
- Styled with Tailwind CSS
- Framer Motion animations
- SQLite database via Prisma ORM

## Tech Stack

- **Next.js 15** (App Directory)
- **TypeScript**
- **Prisma** (ORM, SQLite)
- **React 19**
- **Tailwind CSS**
- **Framer Motion**
- **Radix UI Icons**
- **Zod** (validation)

## Getting Started

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Set up the database**

   - Edit `.env` to set your `DATABASE_URL` (default is SQLite)
   - Run Prisma migrations and seed:
     ```bash
     npx prisma migrate dev
     npm run seed
     ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Project Structure

```
├── prisma/
│   ├── schema.prisma      # Prisma data model
│   └── seed.ts            # Seed script for events
├── src/
│   ├── app/               # Next.js app directory (routes, pages)
│   ├── components/        # Reusable React components
│   ├── lib/               # Prisma client setup
│   ├── util/              # Utility functions (event queries)
│   └── ...
├── public/                # Static assets
├── package.json           # Project config
├── next.config.ts         # Next.js config
└── README.md              # Project documentation
```

## Environment Variables

- `DATABASE_URL` - Connection string for your database (default: SQLite)

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run seed` - Seed the database
- `npm run lint` - Run ESLint

## License

MIT

---

Made with 💙 by Mohamed Aziz Krifa
