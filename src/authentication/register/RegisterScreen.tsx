import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/authService';
import { useAuthStore } from '../../store/authStore';

const RegisterScreen = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    adminCode: '',
  });

  const navigate = useNavigate();

  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // don’t forget to prevent the form from reloading the page

    try {
      await registerUser(formData);
      alert('Registration successful!');
      navigate('/');
    } catch (err: any) {
      alert(err?.response?.data?.error || 'Register failed');
    }
  };
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={styles.input}
          />
          <input
            type="text"
            name="adminCode"
            placeholder="Admin Code"
            value={formData.adminCode}
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>

        <p style={styles.text}>
          Already registered?{' '}
          <span onClick={() => navigate('/')} style={styles.link}>
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
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
    color: '#007bff',
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

export default RegisterScreen;
