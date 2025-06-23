
import './App.css'

import { Routes, Route } from 'react-router-dom';
import LoginScreen from './authentication/login/LoginScreen';
import RegisterScreen from './authentication/register/RegisterScreen';
import DashboardScreen from './screens/dashboard/DashboardScreen';
import AboutScreen from './screens/about/AboutScreen';
import SettingScreen from './screens/setting/SettingScreen';
import WebsiteCreate from './screens/websitecreate/WebsiteCreate';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/dashboard" element={<DashboardScreen />} />
      <Route path="/about" element={<AboutScreen />} />
      <Route path="/setting" element={<SettingScreen />} />
      <Route path="/websitecreate" element={<WebsiteCreate />} />
    </Routes>
  );
};

export default App;
