import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../services/authService';
import { useAuthStore } from '../../store/authStore';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
 const login = useAuthStore((state) => state.login);
 const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  // 🚫 Redirect logged-in users away from login screen
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);


const handleSubmit = async () => {
  try {
    const res = await loginUser({ email, password });
    login(res.user, res.role, res.token); // 👈 Save to Zustand
    navigate('/dashboard');
  } catch (err: any) {
    alert(err?.response?.data?.error || 'Login failed');
  }
};

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Login</h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button onClick={handleSubmit} style={styles.button}>
          Login
        </button>

        <p style={styles.text}>
          Not a member?{' '}
          <span
            onClick={() => navigate('/register')}
            style={styles.link}
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f0f2f5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  },
  card: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '24px',
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: '24px',
    color: '#333',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '16px',
    fontSize: '16px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    outline: 'none',
  },
  button: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '16px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  text: {
    marginTop: '16px',
    textAlign: 'center',
    fontSize: '14px',
    color: '#555',
  },
  link: {
    color: '#007bff',
    textDecoration: 'underline',
    cursor: 'pointer',
  },
};

export default LoginScreen;
