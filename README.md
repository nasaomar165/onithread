# OniThreads: Social Media Content Generator

OniThreads is a cool app built with Next.js that uses AI to whip up awesome content for all your social media needs. Whether you're looking to create engaging Twitter threads, catchy Instagram captions, professional LinkedIn posts, or fun Facebook updates, this project has got you covered with cutting-edge tech and a super easy-to-use interface.

## Features

- AI-driven content creation for Twitter, Instagram, LinkedIn and Facebook 
- User authentication and account management powered by Clerk
- Points-based system for generating content
- History tracking and content regeneration
- Responsive design suitable for both desktop and mobile devices
- Preview feature for generated content
- Integration with Google's Generative AI (Gemini)

## Tech Stack

- [Next.js](https://nextjs.org/) - A React framework for developing the frontend and API routes
- [TypeScript](https://www.typescriptlang.org/) - A typed superset of JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Clerk](https://clerk.com/) - For authentication and user management
- [Google Generative AI](https://ai.google.dev/) - AI model used for content generation
- [Drizzle ORM](https://orm.drizzle.team/) - A TypeScript ORM for database management
- [Neon Database](https://neon.tech/) - A serverless Postgres database
- [Stripe](https://stripe.com/) - For handling payment processing and subscriptions
- [Lucide React](https://lucide.dev/) - An icon library

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/nasaomar165/onithread.git
   cd onithread
   ```

2. Install the necessary dependencies:

   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env.local` file in the root directory and include the following variables:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_GEMINI_API_KEY=your_gemini_api_key
   DATABASE_URL=your_neon_database_url
   STRIPE_SECRET_KEY=your_stripe_secret_key
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Visit [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Deployment

The simplest way to deploy your Next.js application is by using the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme), created by the developers of Next.js.

For more information, refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment).

## Contributing

We welcome contributions! Feel free to submit a Pull Request.
