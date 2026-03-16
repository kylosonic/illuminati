import React, { useState, useEffect } from 'react';
import Gateway from './components/Gateway';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persistent session
    const auth = localStorage.getItem('illuminati_auth');
    if (auth === 'true') {
      setIsAuthorized(true);
    }
    setLoading(false);
  }, []);

  const handleAuthorize = () => {
    setIsAuthorized(true);
    localStorage.setItem('illuminati_auth', 'true');
  };

  const handleLogout = () => {
    setIsAuthorized(false);
    localStorage.removeItem('illuminati_auth');
  };

  if (loading) return null;

  return (
    <div className="App">
      {!isAuthorized ? (
        <Gateway onAuthorize={handleAuthorize} />
      ) : (
        <Dashboard onLogout={handleLogout} />
      )}
    </div>
  );
}

export default App;
