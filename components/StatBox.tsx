interface StatBoxProps {
  label: string;
  value: number;
}

/**
 * A small component for displaying a stat
 */
export const StatBox = ({ label, value }: StatBoxProps) => (
  <div className="bg-white/5 backdrop-blur-sm p-4 sm:p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center min-h-[100px] sm:min-h-[120px] flex flex-col justify-center items-center w-full">
    <p className="text-3xl sm:text-4xl font-bold text-white mb-2 break-all">{value.toLocaleString()}</p>
    <p className="text-xs sm:text-sm text-white/60 uppercase tracking-wide font-medium whitespace-nowrap">{label}</p>
  </div>
);
