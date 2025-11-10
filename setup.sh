#!/bin/bash

# OpenHeart Reviews - Complete Setup Script
# This script creates all necessary files for the Next.js project

echo "🚀 Starting OpenHeart Reviews Setup..."
echo ""

# Create directories
echo "📁 Creating directories..."
mkdir -p app
mkdir -p components
mkdir -p lib/supabase
mkdir -p types

echo "✅ Directories created!"
echo ""

# Create .gitignore
echo "📝 Creating .gitignore..."
cat > .gitignore << 'EOF'
node_modules
.next
.env.local
.env*.local
.DS_Store
*.log
.vercel
EOF

echo "✅ .gitignore created!"
echo ""

# Create next.config.js
echo "📝 Creating next.config.js..."
cat > next.config.js << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
EOF

echo "✅ next.config.js created!"
echo ""

# Create tsconfig.json
echo "📝 Creating tsconfig.json..."
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{"name": "next"}],
    "paths": {"@/*": ["./*"]}
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

echo "✅ tsconfig.json created!"
echo ""

echo ""
echo "🎉 Setup script completed!"
echo ""
echo "📌 NEXT STEPS:"
echo "1. Run: chmod +x setup.sh"
echo "2. Run: ./setup.sh"
echo "3. Copy remaining code from FULL_IMPLEMENTATION_CODE.md"
echo "4. Install dependencies: npm install"
echo "5. Push to GitHub: git add . && git commit -m 'Add project files' && git push"
echo ""
echo "✅ Vercel will auto-deploy after push!"
