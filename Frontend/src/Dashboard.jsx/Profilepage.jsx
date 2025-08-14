import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/Authcontext";
import ProfileCard from "../component/ui/ProfileCard";

const Profilepage = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-600 animate-pulse">
        Loading profile...
      </div>
    );
  }

  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50 p-6  w-full">
      <ProfileCard user={user} />
    </div>
  );
};

export default Profilepage;
