'use client'; // Error components must be Client Components

import * as React from 'react';
// Let's use a simpler approach with SVG directly
import TextButton from '@/components/buttons/TextButton';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <div className='text-red-500'>
            {/* Replace the icon with a simple SVG warning icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="60" 
              height="60" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              className='drop-shadow-glow animate-flicker'
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
            </svg>
          </div>
          <h1 className='mt-8 text-4xl md:text-6xl'>
            Oops, something went wrong!
          </h1>
          <TextButton variant='basic' onClick={reset} className='mt-4'>
            Try again
          </TextButton>
        </div>
      </section>
    </main>
  );
}
