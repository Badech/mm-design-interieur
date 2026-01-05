'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <svg
            className="w-24 h-24 mx-auto text-accent"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        
        <h2 className="text-3xl font-heading font-bold text-primary mb-4">
          Oops! Something went wrong
        </h2>
        
        <p className="text-secondary-gray mb-8">
          We apologize for the inconvenience. Please try again.
        </p>
        
        <div className="flex gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-accent text-white px-6 py-3 rounded-lg hover:bg-accent/90 transition-colors font-medium"
          >
            Try Again
          </button>
          
          <a
            href="/"
            className="bg-secondary text-primary px-6 py-3 rounded-lg hover:bg-secondary/80 transition-colors font-medium"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}
