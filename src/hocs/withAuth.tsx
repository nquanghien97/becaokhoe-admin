import React, { useEffect, ComponentType } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotification } from '../hooks/useNotification';

function withAuth<P extends object>(
  WrappedComponent: ComponentType<P>,
  requireAuth: boolean = true
): ComponentType<P> {
  const WithAuth: React.FC<P> = (props) => {
    const navigate = useNavigate();
    const notification = useNotification();

    useEffect(() => {
      const checkAuth = () => {
        const token = localStorage.getItem('token') as string;
        const isAuthenticated = !!token;
        console.log(isAuthenticated)

        if (requireAuth && !isAuthenticated) {
            // Hiển thị thông báo và cập nhật trạng thái
            notification.warning('Bạn không có quyền truy cập vào trang này!');
          navigate('/login');
        }
      };

      checkAuth();
    }, [navigate, notification]);

    return <WrappedComponent {...props} />;
  };

  WithAuth.displayName = `WithAuth(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return WithAuth;
}

export default withAuth;