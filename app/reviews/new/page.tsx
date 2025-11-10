'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function NewReviewPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    // This is a placeholder - implement actual auth check with Supabase
    const checkAuth = async () => {
      // For now, simulate checking authentication
      // Replace with: const { data: { session } } = await supabase.auth.getSession();
      const hasSession = false; // Replace with actual session check
      
      if (!hasSession) {
        // Redirect to login if not authenticated
        router.push('/login?redirect=/reviews/new');
      } else {
        setIsAuthenticated(true);
      }
      setIsLoading(false);
    };

    checkAuth();
  }, [router]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Authentication Required</h1>
          <p className="text-gray-600 mb-6">You must be logged in to write a review.</p>
          <Link
            href="/login?redirect=/reviews/new"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg inline-block"
          >
            Login to Continue
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Write a Review</h1>
      
      <form className="max-w-2xl">
        <div className="mb-6">
          <label htmlFor="title" className="block text-lg font-semibold mb-2">
            Review Title *
          </label>
          <input
            type="text"
            id="title"
            name="title"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Enter a concise title for your review"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="product_name" className="block text-lg font-semibold mb-2">
            Product/Service Name
          </label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="What are you reviewing?"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="rating" className="block text-lg font-semibold mb-2">
            Rating *
          </label>
          <select
            id="rating"
            name="rating"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          >
            <option value="">Select rating</option>
            <option value="5">★★★★★ - Excellent</option>
            <option value="4">★★★★☆ - Good</option>
            <option value="3">★★★☆☆ - Average</option>
            <option value="2">★★☆☆☆ - Poor</option>
            <option value="1">★☆☆☆☆ - Terrible</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="content" className="block text-lg font-semibold mb-2">
            Review Content *
          </label>
          <textarea
            id="content"
            name="content"
            required
            rows={8}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            placeholder="Share your detailed experience..."
          />
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <p className="text-sm text-gray-700">
            <strong>Note:</strong> Your review will be visible to all users. Please be honest but respectful in your feedback.
          </p>
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Submit Review
          </button>
          <Link
            href="/reviews"
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-8 py-3 rounded-lg font-semibold transition inline-block"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}
