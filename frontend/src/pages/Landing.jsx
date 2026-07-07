import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between p-6 font-sans">
      {/* Navbar segment */}
      <header className="flex justify-between items-center max-w-6xl w-full mx-auto py-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center font-bold text-sm">IR</div>
          <span className="font-bold tracking-wider text-lg">repAIr ichiban</span>
        </div>
        <button 
          onClick={() => navigate('/login')}
          className="border border-neutral-700 hover:border-white px-4 py-1.5 rounded text-sm transition-colors"
        >
          Sign In
        </button>
      </header>

      {/* Main Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-4">
        <div className="text-xs font-semibold tracking-widest text-red-500 uppercase bg-red-950/50 px-3 py-1 rounded-full border border-red-900/40 mb-4">
          Next-Gen Asset Optimization
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
          Streamline Your System <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">
            Repairs & Metrics
          </span>
        </h1>
        <p className="text-neutral-400 text-sm md:text-base max-w-xl mb-8 leading-relaxed">
          Monitor active deployments, track live machine metrics, and handle system health optimization seamlessly from a unified operations dashboard.
        </p>
        <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
          <button 
            onClick={() => navigate('/login')}
            className="bg-red-600 hover:bg-red-700 font-semibold px-8 py-3 rounded text-sm transition-all shadow-lg shadow-red-900/20"
          >
            Launch Console
          </button>
          <button className="bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 font-semibold px-8 py-3 rounded text-sm transition-all">
            Documentation
          </button>
        </div>
      </main>

      {/* Footer bar */}
      <footer className="text-center text-xs text-neutral-600 py-4 max-w-6xl w-full mx-auto border-t border-neutral-900">
        &copy; {new Date().getFullYear()} repAIr ichiban Operations Network. All rights reserved.
      </footer>
    </div>
  );
}