
import { Link } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore';

const DashboardScreen = () => {
   const user = useAuthStore((state) => state.user);
  const role = useAuthStore((state) => state.role);
  return (
    <div>
      <h1>DashboardSCreen</h1>
      <p>Welcome to the dashboard!</p>
      <h2>Welcome, {user?.name}!</h2>
      <p>Your role: {role}</p>
      <p>Here you can manage your account and settings.</p>
      <p>Use the navigation menu to explore different sections.</p> 
      <p>For help, visit the support section.</p>
      <p>Enjoy your experience!</p>
      <p>Stay tuned for updates and new features.</p>
      <p>Feel free to reach out with any feedback.</p>  
      <p>Thank you for using our application!</p>
      <p>Have a great day!</p>
      {/* 🔗 Website Create Link */}
      <Link to="/websitecreate">Go to Website Create</Link>
      <p></p>
      <Link to="/setting">Go tosetting page</Link>

    </div>
  )
}

export default DashboardScreen