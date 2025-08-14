import React, { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import UserCard from "../component/ui/UserCard";

const AllUser = () => {
  const token = localStorage.getItem("token");
  const [Users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/user/", {
        headers: {
          authorization: token,
        },
      });

      setUsers(response.data.users);
    } catch (error) {
      toast.success("Something went wrong ");
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <UserCard Data={Users} role={"Name"} />
    </div>
  );
};

export default AllUser;
