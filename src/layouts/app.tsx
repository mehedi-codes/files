import React from 'react';

import { SplashScreen } from '@/components/splash-screen';

import { Sidebar } from './sidebar';
export const App = () => {
  return (
    <React.Fragment>
      <SplashScreen />
      <div className="h-screen overflow-hidden bg-black/5 p-4">
        <div className="flex h-full w-full overflow-hidden rounded-xl shadow-2xl shadow-black/60">
          <Sidebar />
          <main className="flex-1 bg-white">
            <div className="flex min-h-dvh flex-col items-center justify-center gap-y-2">
              <img src="/favicon.svg" alt="logo" width={64} height={64} />
              <h2 className="font-sans font-semibold">files</h2>
            </div>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
};
