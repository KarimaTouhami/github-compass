interface ErrorMessageProps {
  message: string;
}

/**
 * Displays an error message
 */
export const ErrorMessage = ({ message }: ErrorMessageProps) => (
  <div className="p-12 text-center bg-white/5 backdrop-blur-xl rounded-3xl border border-red-500/20 shadow-2xl">
    <span className="text-7xl" role="img" aria-label="Warning">⚠️</span>
    <h3 className="text-3xl font-semibold text-white mt-6">An Error Occurred</h3>
    <p className="text-white/70 mt-3 text-lg">{message}</p>
    <p className="text-white/50 text-base mt-2">Please check the username and try again.</p>
  </div>
);
