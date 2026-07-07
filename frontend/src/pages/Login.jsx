import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate authentication and route straight to your dashboard layout
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-[400px] bg-[#121212] border border-[#1f1f1f] rounded-xl p-8 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative top accent line matching your layout style */}
        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-red-600 to-amber-500"></div>

        {/* Branding header area */}
        <div className="text-center mb-8">
          <div className="w-14 h-14 bg-gradient-to-br from-red-600 to-red-700 rounded-2xl mx-auto mb-4 flex items-center justify-center font-black text-xl shadow-md tracking-tighter transform rotate-3">
            IR
          </div>
          <h1 className="text-2xl font-black tracking-tight text-white mb-1">repAIr ichiban</h1>
          <p className="text-xs text-neutral-500 uppercase tracking-widest font-semibold">Operations Console</p>
        </div>

        {/* Input fields form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs uppercase tracking-widest font-bold text-neutral-400 mb-1.5">User Identity / Email</label>
            <input 
              type="text" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="operator@ichiban.io"
              className="w-full bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg p-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
              required 
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs uppercase tracking-widest font-bold text-neutral-400">Security Phrase</label>
              <a href="#" className="text-xs text-neutral-500 hover:text-red-500 transition-colors">Forgot Key?</a>
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••••••"
              className="w-full bg-[#1a1a1a] border border-[#2d2d2d] rounded-lg p-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-red-600 transition-colors"
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-bold py-3 px-4 rounded-lg text-sm tracking-wider transition-all shadow-lg shadow-red-900/20 mt-2"
          >
            AUTHORIZE ACCESS
          </button>
        </form>

        <div className="mt-8 text-center border-t border-[#1f1f1f] pt-4">
          <p className="text-xs text-neutral-500">
            New node deployment? <a href="#" className="text-red-500 hover:underline font-semibold">Request Access</a>
          </p>
        </div>
      </div>
    </div>
  );
}