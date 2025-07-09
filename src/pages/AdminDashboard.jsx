import React from 'react'
import AdminForm from '../components/AdminForm';
import AdminProducts from '../components/AdminProducts';



export default function AdminDashboard() {
  return (
    <div className="py-12 lg:px-16 bg-gray-50 px-8">
      <div className="flex items-center justify-center mb-12">
        <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
        <h1 className="text-2xl  text-red-500  px-8">Admin Dashboard</h1>
        <div className="flex-1 h-0.5 bg-red-300 max-w-xs"></div>
      </div>

      
      <AdminProducts/>
    </div>
  );
}
