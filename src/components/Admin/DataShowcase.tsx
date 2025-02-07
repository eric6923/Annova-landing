import React, { useEffect, useState } from 'react';
import { Users, Phone, Wrench, Loader2, Sparkles, Calendar } from 'lucide-react';

interface Submission {
  id: string;
  name: string;
  phone_number: string;
  service_type: string;
  created_at: string;
}

function App() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        if (!token) {
          setError('No token found in local storage');
          setLoading(false);
          return;
        }

        const response = await fetch('https://anovas-backend.vercel.app/api/submissions', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();
        setSubmissions(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }).format(date);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <Loader2 size={48} className="text-violet-500 animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center p-4">
        <div className="bg-violet-950/30 p-8 rounded-lg max-w-md w-full animate-fade-in border border-violet-500/20">
          <div className="flex items-center justify-center text-red-400 mb-4">
            <Sparkles size={32} />
          </div>
          <p className="text-center text-red-400 font-medium">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-violet-950/50 via-black to-black">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-violet-400 to-white">
            Data Showcase
          </h1>
          <p className="text-violet-300/80 text-lg">
            Client Submissions Overview
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {submissions.map((submission, index) => (
            <div
              key={submission.id}
              className="group relative bg-violet-950/10 rounded-3xl p-6 animate-fade-in border border-violet-500/20 hover:border-violet-500/40 transition-all duration-300"

              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Number Badge */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg shadow-violet-500/20">
                {index + 1}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-violet-500/10 rounded-lg group-hover:bg-violet-500/20 transition-colors duration-300">
                  <Users className="w-6 h-6 text-violet-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-white">{submission.name}</h3>
                  <p className="text-violet-400/80">Client Details</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4 p-3 rounded-lg bg-violet-950/30 hover:bg-violet-950/40 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-violet-400" />
                  <p className="text-gray-200">{submission.phone_number}</p>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg bg-violet-950/30 hover:bg-violet-950/40 transition-colors duration-300">
                  <Wrench className="w-5 h-5 text-violet-400" />
                  <p className="text-gray-200">{submission.service_type}</p>
                </div>

                <div className="flex items-center space-x-4 p-3 rounded-lg bg-violet-950/30 hover:bg-violet-950/40 transition-colors duration-300">
                  <Calendar className="w-5 h-5 text-violet-400" />
                  <p className="text-gray-200">{formatDate(submission.created_at)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;