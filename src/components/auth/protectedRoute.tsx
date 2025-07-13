import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthStore } from '@/stores/authStore';

interface ProtectedRouteProps {
  children: ReactNode;
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { isAuthenticated, checkAuth } = useAuthStore();

  if (!isAuthenticated || !checkAuth()) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
}