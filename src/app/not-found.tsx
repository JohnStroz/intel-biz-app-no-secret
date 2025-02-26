import { Metadata } from 'next';
import * as React from 'react';
import { RiAlarmWarningFill } from 'react-icons/ri';
import type { IconBaseProps } from 'react-icons';

export const metadata: Metadata = {
  title: 'Not Found',
};

export default function NotFound() {
  // Cast the icon to a React component type that TypeScript will accept
  const Icon = RiAlarmWarningFill as React.ComponentType<IconBaseProps>;

  return (
    <main>
      <section className='bg-white'>
        <div className='layout flex min-h-screen flex-col items-center justify-center text-center text-black'>
          <Icon
            size={60}
            className='drop-shadow-glow animate-flicker text-red-500'
          />
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
          <a href='/'>Back to home</a>
        </div>
      </section>
    </main>
  );
}
