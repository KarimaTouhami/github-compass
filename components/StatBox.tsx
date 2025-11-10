interface StatBoxProps {
  label: string;
  value: number;
}

/**
 * A small component for displaying a stat
 */
export const StatBox = ({ label, value }: StatBoxProps) => (
  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center">
    <p className="text-4xl font-bold text-white mb-2">{value.toLocaleString()}</p>
    <p className="text-sm text-white/60 uppercase tracking-wide font-medium">{label}</p>
  </div>
);
