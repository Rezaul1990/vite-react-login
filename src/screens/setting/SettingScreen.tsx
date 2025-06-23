
import { useAuthStore } from '../../store/authStore';
import { useNavigate } from 'react-router-dom';

const SettingScreen = () => {
 const logout = useAuthStore((state) => state.logout);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();            
    navigate('/');
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default SettingScreen