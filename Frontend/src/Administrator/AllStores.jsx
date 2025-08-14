import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import StoreCard from "../component/ui/StoreCards";
import axios from "axios";
import toast from "react-hot-toast";

const AllStores = () => {
  const token = localStorage.getItem("token");
  const [stores, setStores] = useState([]);

  const getAllStore = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/store", {
        headers: {
          authorization: token,
        },
      });

      setStores(response.data.stores);
    } catch (error) {
      toast.success("Something went wrong ");
    }
  };

  useEffect(() => {
    getAllStore();
  }, []);

  return (
    <div>
      <StoreCard Data={stores} role={"Owner"} />
    </div>
  );
};

export default AllStores;
