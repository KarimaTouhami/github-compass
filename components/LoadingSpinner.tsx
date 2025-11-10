/**
 * Displays a loading spinner
 */
export const LoadingSpinner = () => (
  <div className="flex flex-col items-center justify-center p-20 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl">
    <div className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
    <p className="mt-8 text-white/80 text-xl font-light">Analyzing profile...</p>
  </div>
);
