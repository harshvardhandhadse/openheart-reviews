# 🫀 OpenHeart Reviews

## A Privacy-First Review Platform

**Better than MouthShut** - Enhanced features with complete user privacy protection.

---

## 🌟 Key Features

### Privacy Features (Our Unique Advantage)
- ✅ **Anonymous Posting** - Write reviews without revealing your identity
- ✅ **Email Privacy** - Your email is NEVER shown publicly
- ✅ **Display Names** - Choose how you want to be known
- ✅ **GDPR Compliant** - Full data deletion on request
- ✅ **No Tracking** - Zero third-party analytics or cookies
- ✅ **Data Encryption** - All sensitive data is encrypted

### Core Features (Inspired by MouthShut)
- ⭐ **Star Ratings** - 1-5 star rating system
- 📂 **15+ Categories** - Electronics, Fashion, Restaurants, Healthcare, and more
- 🔍 **Advanced Search** - Find exactly what you need
- ✔️ **Verified Purchases** - Mark genuine buyers
- 👥 **User Profiles** - Track your review history
- 🔥 **Trending Reviews** - See what's popular
- 💬 **Comments & Votes** - Engage with the community
- 👨‍💼 **Admin Moderation** - Keep content quality high

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- Supabase account
- Vercel account (for deployment)

### Installation

```bash
# Clone the repository
git clone https://github.com/harshvardhandhadse/openheart-reviews.git
cd openheart-reviews

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Supabase credentials

# Run development server
npm run dev
```

Visit `http://localhost:3000`

---

## 📖 Documentation

### Setup Guides
- **[SETUP.md](./SETUP.md)** - Complete setup instructions with database schema
- **[COMPLETE_WEBSITE_CODE.md](./COMPLETE_WEBSITE_CODE.md)** - Privacy-enhanced database schema and features
- **[IMPLEMENTATION.md](./IMPLEMENTATION.md)** - Code implementation guide

### Database Setup

1. Create a Supabase project at https://supabase.com
2. Copy the SQL schema from `COMPLETE_WEBSITE_CODE.md`
3. Run it in Supabase SQL Editor
4. Configure your `.env.local` file

---

## 🎨 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **Deployment:** Vercel

---

## 📊 Database Schema

### Tables
- `profiles` - User profiles with privacy settings
- `categories` - 15 product/service categories
- `products` - Products and services to review
- `reviews` - User reviews with anonymous option
- `review_votes` - Helpful/unhelpful votes
- `review_comments` - Comments on reviews

### Privacy Features
- Optional anonymous posting
- Email privacy toggle
- Display name system
- Data encryption

---

## 🔒 Privacy & Security

We take privacy seriously:

1. **No personal data required** - Review anonymously
2. **Email never shared** - Your email stays private
3. **Choose your identity** - Pick your own display name
4. **Data ownership** - Request deletion anytime
5. **Encrypted storage** - Sensitive data is encrypted
6. **No tracking** - Zero external analytics

---

## 👥 User Roles

### User
- Write and manage own reviews
- Post anonymously
- Vote on reviews
- Comment on reviews
- Customize privacy settings

### Admin/Moderator
- Manage all content
- Moderate reviews
- Manage users
- View analytics
- Add products/categories

---

## 🌐 Live Demo

🔗 **Coming Soon:** https://openheart-reviews-ip33.vercel.app

---

## 📝 How to Use

### For Reviewers
1. Sign up (optional - can review anonymously)
2. Browse categories
3. Find a product/service
4. Write your review
5. Choose to post as yourself or anonymously

### For Readers
1. Browse or search for products
2. Read unbiased reviews
3. Vote helpful/unhelpful
4. Make informed decisions

---

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

---

## 📧 Support

For issues or questions:
- Open an issue on GitHub
- Contact: [Your Email]

---

## 📜 License

MIT License - see LICENSE file

---

## 🙏 Acknowledgments

- Inspired by MouthShut.com
- Built with privacy-first principles
- Powered by Supabase and Next.js

---

## 🗺️ Roadmap

- [x] Database schema design
- [x] Privacy-focused architecture
- [x] Category system
- [ ] Complete UI implementation
- [ ] Authentication system
- [ ] Review posting
- [ ] Search functionality
- [ ] Admin dashboard
- [ ] Mobile app
- [ ] API for third parties

---

**Made with ❤️ for honest reviews**
