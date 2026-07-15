import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] bg-white border border-neutral-200 rounded-xl p-8 shadow-2xl text-center">
        <h2 className="text-xl font-black mb-1">Deploy New Node</h2>
        <p className="text-xs text-neutral-500 uppercase tracking-widest mb-6">Operator Registration</p>

        <form onSubmit={(e) => { e.preventDefault(); navigate('/login'); }} className="space-y-4 text-left">
          <div>
            <label className="block text-xs uppercase font-bold text-neutral-500 mb-1">Full Name</label>
            <input type="text" className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-red-600" required />
          </div>
          <div>
            <label className="block text-xs uppercase font-bold text-neutral-500 mb-1">Clearance Email</label>
            <input type="email" className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-red-600" required />
          </div>
          <div>
            <label className="block text-xs uppercase font-bold text-neutral-500 mb-1">Secure Keyphrase</label>
            <input type="password" className="w-full bg-neutral-50 border border-neutral-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-red-600" required />
          </div>
          <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2.5 rounded-lg text-sm mt-2 transition-colors">
            REGISTER OPERATOR
          </button>
        </form>

        <p className="text-xs text-neutral-500 mt-6">
          Already authorized? <span onClick={() => navigate('/login')} className="text-red-500 hover:underline cursor-pointer font-semibold">Sign In</span>
        </p>
      </div>
    </div>
  );
}