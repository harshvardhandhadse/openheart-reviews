# OpenHeart Reviews - Complete Setup Guide

## Project Overview
OpenHeart Reviews is a review website built with Next.js, Supabase, and deployed on Vercel. It features role-based authentication (User/Admin) and a complete review management system.

## Prerequisites
- Node.js 18+ installed
- A Supabase account
- A Vercel account
- Git installed

## Step 1: Clone and Setup Local Environment

```bash
git clone https://github.com/harshvardhandhadse/openheart-reviews.git
cd openheart-reviews
npm install
```

## Step 2: Setup Supabase Project

1. Go to https://supabase.com and create a new project named "openheartreview"
2. Wait for the project to be provisioned
3. Go to Project Settings > API
4. Copy your `Project URL` and `anon public` key

## Step 3: Create Database Schema

Go to Supabase SQL Editor and run this script:

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create user_roles enum
CREATE TYPE user_role AS ENUM ('user', 'admin');

-- Create profiles table (extends auth.users)
CREATE TABLE public.profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  role user_role DEFAULT 'user',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE public.reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  product_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'published' CHECK (status IN ('draft', 'published', 'archived'))
);

-- Create function to handle user creation
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (new.id, new.email, new.raw_user_meta_data->>'full_name');
  RETURN new;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for new user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Row Level Security (RLS) Policies

-- Enable RLS
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.reviews ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

CREATE POLICY "Admins can update any profile"
  ON public.profiles FOR UPDATE
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Reviews policies
CREATE POLICY "Anyone can view published reviews"
  ON public.reviews FOR SELECT
  USING (status = 'published' OR user_id = auth.uid());

CREATE POLICY "Users can create their own reviews"
  ON public.reviews FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews"
  ON public.reviews FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own reviews"
  ON public.reviews FOR DELETE
  USING (auth.uid() = user_id);

CREATE POLICY "Admins can do everything with reviews"
  ON public.reviews FOR ALL
  USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE id = auth.uid() AND role = 'admin'
    )
  );
```

## Step 4: Configure Environment Variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Step 5: Create Admin User

1. Sign up a user through your application
2. Go to Supabase > SQL Editor
3. Run this to make a user an admin:

```sql
UPDATE public.profiles
SET role = 'admin'
WHERE email = 'your-admin-email@example.com';
```

## Step 6: Test Locally

```bash
npm run dev
```

Visit http://localhost:3000

## Step 7: Deploy to Vercel

1. Push your code to GitHub
2. Go to https://vercel.com
3. Click "Import Project"
4. Select your GitHub repository
5. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
6. Click "Deploy"

## Project Structure

```
openheart-reviews/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── signup/
│   │       └── page.tsx
│   ├── dashboard/
│   │   ├── page.tsx          # User dashboard
│   │   └── admin/
│   │       └── page.tsx      # Admin dashboard
│   ├── reviews/
│   │   ├── page.tsx          # List reviews
│   │   ├── [id]/
│   │   │   └── page.tsx      # View single review
│   │   └── new/
│   │       └── page.tsx      # Create review
│   ├── layout.tsx
│   └── page.tsx              # Home page
├── components/
│   ├── Auth/
│   │   ├── LoginForm.tsx
│   │   └── SignUpForm.tsx
│   ├── Review/
│   │   ├── ReviewCard.tsx
│   │   ├── ReviewForm.tsx
│   │   └── ReviewList.tsx
│   └── UI/
│       ├── Nav.tsx
│       └── Footer.tsx
├── lib/
│   ├── supabase/
│   │   ├── client.ts
│   │   └── server.ts
│   └── utils.ts
├── types/
│   └── database.ts
├── .env.local
├── package.json
├── next.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## Key Features

### Authentication
- User signup/login with email
- Role-based access (User/Admin)
- Protected routes
- Session management

### Reviews Management
- Create, read, update, delete reviews
- Star ratings (1-5)
- Product association
- Status management (draft/published/archived)

### Admin Features
- View all users
- Manage user roles
- Moderate reviews
- View analytics

### User Features  
- Create and manage own reviews
- View published reviews
- Edit profile

## Supabase Edge Functions (Optional)

To set up edge functions:

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link your project
supabase link --project-ref your-project-ref

# Create a function
supabase functions new send-review-notification

# Deploy function
supabase functions deploy send-review-notification
```

## Database Backup

Regularly backup your database:

```bash
supabase db dump -f backup.sql
```

## Security Best Practices

1. Never commit `.env.local` to Git
2. Use Row Level Security policies
3. Validate all inputs on the server side
4. Keep dependencies updated
5. Use HTTPS in production
6. Implement rate limiting

## Troubleshooting

### Issue: Can't connect to Supabase
- Check your environment variables
- Verify Supabase project is active
- Check network connectivity

### Issue: RLS policies not working
- Ensure RLS is enabled on tables
- Check policy logic
- Verify user is authenticated

### Issue: User role not updating
- Check SQL query syntax
- Verify user exists in profiles table
- Clear browser cache

## Support

For issues, please open a GitHub issue in the repository.

## License

MIT License
