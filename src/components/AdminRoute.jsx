import React from 'react'
import { useAuth } from '../helpers/AuthContext'
import { Navigate } from 'react-router';


export default function AdminRoute({ children}) {
    const { isAdmin} = useAuth();

    if (!isAdmin) {
      return <Navigate to="/admin-access" replace />;
    }

    return children;
}
