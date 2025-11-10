'use client';

import { useState, useEffect } from 'react';

interface DisclaimerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DisclaimerModal({ isOpen, onClose }: DisclaimerModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 p-8">
        <div className="mb-6">
          <h2 className="text-3xl font-bold text-red-600 mb-4">⚠️ Content Disclaimer</h2>
          <div className="space-y-4 text-gray-700">
            <p className="text-lg font-semibold">
              Please read carefully before continuing:
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                The reviews displayed on this platform may contain <strong>strong language</strong> and <strong>explicit content</strong>.
              </li>
              <li>
                Some reviews may use <strong>profanity</strong>, <strong>offensive terms</strong>, or <strong>controversial opinions</strong>.
              </li>
              <li>
                Reviews represent individual experiences and opinions, not the views of OpenHeart Reviews.
              </li>
              <li>
                We provide this platform for honest feedback, but cannot control the language used by reviewers.
              </li>
              <li>
                By continuing, you acknowledge that you may encounter content that could be considered offensive or inappropriate.
              </li>
            </ul>
            <p className="text-sm italic text-gray-600 mt-4">
              <strong>Legal Notice:</strong> OpenHeart Reviews is not liable for the content of user-generated reviews. 
              This disclaimer is provided to avoid potential disputes and legal concerns regarding review content.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <button
            onClick={onClose}
            className="flex-1 bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition"
          >
            I Understand, Continue
          </button>
        </div>
      </div>
    </div>
  );
}
