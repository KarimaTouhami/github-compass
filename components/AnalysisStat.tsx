interface AnalysisStatProps {
  label: string;
  value: string | number;
  helpText: string;
}

/**
 * A card for a single analysis statistic
 */
export const AnalysisStat = ({ label, value, helpText }: AnalysisStatProps) => (
  <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
    <p className="text-sm text-white/60 uppercase tracking-wide mb-3 font-medium">{label}</p>
    <p className="text-3xl font-bold text-white mb-3">{value}</p>
    <p className="text-sm text-white/50 leading-relaxed">{helpText}</p>
  </div>
);
