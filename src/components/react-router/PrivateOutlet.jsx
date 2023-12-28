import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { useAlert } from '../../hooks';
import { useEffect } from 'react';

function PrivateOutlet() {
  const { currentUser } = useAuth();
  const showAlert = useAlert();

  useEffect(() => {
    if (!currentUser) {
      showAlert('error', 'login-needed');
    }
  }, [currentUser, showAlert]);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
}

export default PrivateOutlet;

