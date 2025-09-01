import React, { useState } from 'react';
import RoyalLoginForm from "@/components/RoyalLoginForm";
import AdminDashboard from "@/components/AdminDashboard";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <AdminDashboard />;
  }

  return <RoyalLoginForm onLoginSuccess={handleLoginSuccess} />;
};

export default Index;
