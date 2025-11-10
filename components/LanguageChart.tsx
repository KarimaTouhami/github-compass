interface LanguageChartProps {
  languages: [string, number][];
  total: number;
}

/**
 * Displays a simple bar chart for languages
 */
export const LanguageChart = ({ languages, total }: LanguageChartProps) => {
  if (languages.length === 0) return null;

  return (
    <div className="bg-white/5 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl">
      <h3 className="text-3xl font-semibold text-white mb-3">
        Top Language Breakdown
      </h3>
      <p className="text-base text-white/60 mb-8">Based on {total} original repositories.</p>
      <div className="space-y-6">
        {languages.map(([language, count]) => {
          const percentage = total > 0 ? (count / total) * 100 : 0;
          return (
            <div key={language}>
              <div className="flex justify-between text-base text-white mb-3">
                <span className="font-medium">{language}</span>
                <span className="text-white/60">{count} repo(s) ({percentage.toFixed(0)}%)</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-white h-3 rounded-full transition-all duration-700 ease-out" 
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
