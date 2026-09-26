export const SplashScreen = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-50 animate-out bg-white delay-[2000ms] duration-500 ease-in fill-mode-forwards fade-out">
      {/* colorful background for the glass to blur */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 size-80 rounded-full bg-emerald-400/50 blur-3xl" />
        <div className="absolute -right-24 -bottom-24 size-96 rounded-full bg-sky-400/40 blur-3xl" />
        <div className="absolute top-1/3 left-1/2 size-64 -translate-x-1/2 rounded-full bg-lime-300/40 blur-3xl" />
      </div>

      {/* glass panel */}
      <div className="absolute inset-0 flex animate-in items-center justify-center duration-500 ease-out fill-mode-both zoom-in-95 fade-in">
        <div className="relative flex size-24 items-center justify-center">
          <div className="absolute inset-0 animate-spin rounded-full border-2 border-green-500/25 border-t-green-500 motion-reduce:animate-none" />
          <img src="/favicon.svg" alt="logo" width={64} height={64} />
        </div>
      </div>
    </div>
  );
};
