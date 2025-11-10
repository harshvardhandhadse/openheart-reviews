# Complete Supabase & Vercel Setup Guide for OpenHeart Reviews

## Overview
This guide will help you set up the complete database integration with Supabase and deploy the application to Vercel.

## ✅ Changes Made

### 1. Removed "Better than MouthShut" Text
- **File**: `app/page.tsx` (line 14)
- **Change**: Removed " Better than MouthShut." from the description
- **Result**: Text now reads "Share honest reviews anonymously."

---

## 📝 Step 1: Set Up Supabase Database

### A. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Sign in or create an account
3. Click "New Project"
4. Fill in:
   - Project Name: `openheart-reviews`
   - Database Password: (save this securely)
   - Region: Choose closest to your users
5. Click "Create new project"

### B. Run Database Schema
1. In your Supabase project, go to **SQL Editor**
2. Click "New Query"
3. Copy the entire SQL schema from `COMPLETE_WEBSITE_CODE.md` (STEP 1)
4. Paste it into the SQL Editor
5. Click "Run" or press `Ctrl+Enter`
6. Wait for success message

### C. Verify Database Setup
Check that these tables were created:
- ✅ profiles
- ✅ categories
- ✅ products
- ✅ reviews
- ✅ review_votes
- ✅ review_comments

To verify, go to **Table Editor** in Supabase dashboard.

---

## 🔑 Step 2: Get Supabase Credentials

1. In Supabase dashboard, go to **Settings** → **API**
2. Find these values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon (public) key**: `eyJhbGc...` (long string)

3. Keep these handy - you'll need them soon!

---

## 💻 Step 3: Set Up Local Environment

### A. Create .env.local File
1. In your project root, create a file named `.env.local`
2. Add these variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
```

3. Replace with your actual values from Step 2
4. Save the file

### B. Install Dependencies (if not already done)
```bash
npm install
```

### C. Test Locally
```bash
npm run dev
```

Open http://localhost:3000 and verify the app works!

---

## 🚀 Step 4: Deploy to Vercel

### A. Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub

### B. Import Repository
1. Click "Add New" → "Project"
2. Import `openheart-reviews` repository
3. Vercel will auto-detect Next.js

### C. Configure Environment Variables
1. In the "Configure Project" screen, expand **Environment Variables**
2. Add these variables:
   - Name: `NEXT_PUBLIC_SUPABASE_URL`
   - Value: (your Supabase project URL)
   
   - Name: `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - Value: (your Supabase anon key)

3. Click "Deploy"

### D. Wait for Deployment
- Vercel will build and deploy your app
- Usually takes 2-5 minutes
- You'll get a URL like `openheart-reviews.vercel.app`

---

## 🔐 Step 5: Configure Supabase Authentication

### A. Set Allowed Redirect URLs
1. In Supabase dashboard, go to **Authentication** → **URL Configuration**
2. Add these URLs:
   - `http://localhost:3000/**` (for local development)
   - `https://your-vercel-url.vercel.app/**` (your production URL)

### B. Configure Email Templates (Optional)
1. Go to **Authentication** → **Email Templates**
2. Customize the email templates for:
   - Confirmation email
   - Password reset
   - Magic link

---

## 🧪 Step 6: Test the Complete Setup

### Test Checklist:
- [ ] Homepage loads correctly
- [ ] "Better than MouthShut" text is removed
- [ ] User can sign up
- [ ] User receives confirmation email
- [ ] User can log in
- [ ] User can view reviews
- [ ] Logged-in users can create reviews
- [ ] Anonymous posting works
- [ ] Reviews display correctly

---

## 📊 Step 7: Database Integration Status

### ✅ Already Configured:
- Supabase client setup (`lib/supabase/client.ts`)
- Supabase server setup (`lib/supabase/server.ts`)
- Environment variables example (`.env.example`)
- Authentication flow structure

### 🔨 Needs Implementation:
The following features need to be connected to the database:

#### A. Reviews Page (`app/reviews/page.tsx`)
Currently shows mock data. Update to fetch from Supabase:

```typescript
import { createClient } from '@/lib/supabase/client'

const supabase = createClient()
const { data: reviews, error } = await supabase
  .from('reviews')
  .select(`
    *,
    profiles:user_id(*),
    products:product_id(*)
  `)
  .eq('status', 'published')
  .order('created_at', { ascending: false })
```

#### B. Review Creation (`app/reviews/new/page.tsx`)
Needs to save reviews to database instead of placeholder auth.

#### C. Login Page (`app/login/page.tsx`)
Needs to implement actual Supabase authentication.

---

## 🔄 Step 8: Next Steps for Full Database Integration

### Priority 1: Connect Reviews Display
Update `app/reviews/page.tsx` to fetch real data from Supabase.

### Priority 2: Implement Authentication
Update `app/login/page.tsx` with real Supabase auth.

### Priority 3: Connect Review Creation
Update `app/reviews/new/page.tsx` to save to database.

### Priority 4: Add API Routes
Create API routes for:
- `/api/reviews` - CRUD operations
- `/api/auth` - Authentication helpers
- `/api/profiles` - User profile management

---

## 📝 Environment Variables Reference

### Required for Production:
```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### Optional (for advanced features):
```env
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
NEXT_PUBLIC_SITE_URL=https://your-vercel-url.vercel.app
```

---

## 🆘 Troubleshooting

### Issue: Database connection fails
**Solution**: Check environment variables are set correctly

### Issue: Authentication not working
**Solution**: Verify redirect URLs in Supabase dashboard

### Issue: Reviews not showing
**Solution**: Check Row Level Security policies are enabled

### Issue: Deployment fails on Vercel
**Solution**: 
1. Check build logs
2. Ensure all dependencies are in package.json
3. Verify environment variables are set

---

## ✨ Summary

You have successfully:
1. ✅ Removed "Better than MouthShut" branding
2. ✅ Set up Supabase database with complete schema
3. ✅ Configured environment variables
4. ✅ Deployed to Vercel
5. ✅ Set up authentication URLs

### What's Working:
- Database structure is ready
- Authentication system is configured
- Basic pages are deployed
- Environment is set up

### What Needs Code Updates:
- Connect reviews page to database
- Implement login functionality
- Connect review creation form
- Add API routes for data operations

---

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Documentation](https://vercel.com/docs)
- [Supabase + Next.js Guide](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)

---

## 🎯 Quick Commands

### Development:
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
```

### Database:
```bash
# Connect to Supabase CLI (optional)
npx supabase login
npx supabase init
npx supabase db pull
```

---

**Last Updated**: November 11, 2025
**Status**: Database schema deployed, environment configured, ready for API integration
