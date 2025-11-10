'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import DisclaimerModal from '@/components/DisclaimerModal';

export default function ReviewsPage() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const [disclaimerAccepted, setDisclaimerAccepted] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Check if user has already accepted disclaimer in this session
    const accepted = sessionStorage.getItem('disclaimerAccepted');
    if (!accepted) {
      setShowDisclaimer(true);
    } else {
      setDisclaimerAccepted(true);
      // Fetch reviews here
    }
  }, []);

  const handleDisclaimerClose = () => {
    setShowDisclaimer(false);
    setDisclaimerAccepted(true);
    sessionStorage.setItem('disclaimerAccepted', 'true');
    // Fetch reviews after disclaimer is accepted
  };

  // Mock reviews data - replace with actual API call
  const mockReviews = [
    {
      id: '1',
      title: 'Great Product!',
      content: 'This product exceeded my expectations. Highly recommended for anyone looking for quality.',
      rating: 5,
      product_name: 'Laptop Stand',
      created_at: new Date().toISOString(),
      profiles: { full_name: 'John Doe' }
    },
    {
      id: '2',
      title: 'Good but could be better',
      content: 'Decent quality but there are a few issues with the build quality. Still usable though.',
      rating: 3,
      product_name: 'Wireless Mouse',
      created_at: new Date().toISOString(),
      profiles: { full_name: 'Jane Smith' }
    }
  ];

  return (
    <>
      <DisclaimerModal isOpen={showDisclaimer} onClose={handleDisclaimerClose} />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Reviews</h1>
          <Link
            href="/login"
            className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition"
          >
            Login to Write Review
          </Link>
        </div>

        {disclaimerAccepted ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockReviews.map((review) => (
              <div
                key={review.id}
                className="border rounded-lg p-6 hover:shadow-lg transition"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={i < review.rating ? 'text-yellow-400' : 'text-gray-300'}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-2">{review.title}</h3>
                {review.product_name && (
                  <p className="text-sm text-gray-500 mb-2">Product: {review.product_name}</p>
                )}
                <p className="text-gray-600 mb-4">{review.content}</p>
                <div className="text-sm text-gray-500">
                  By {review.profiles?.full_name || 'Anonymous'}
                </div>
                <Link
                  href={`/reviews/${review.id}`}
                  className="text-primary-600 hover:underline mt-2 inline-block"
                >
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">Please accept the disclaimer to view reviews.</p>
          </div>
        )}
      </div>
    </>
  );
}
