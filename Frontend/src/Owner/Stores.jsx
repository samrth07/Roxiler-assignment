import React, { useEffect, useState } from "react";
import StoreCard from "../component/ui/StoreCards";
import axios from "axios";
import toast from "react-hot-toast";
import RatingCard from "../component/ui/RatingCard";

const Stores = () => {
  const token = localStorage.getItem("token");
  const [store, setStores] = useState([]);
  const [rating, setRating] = useState([]);
  const [ratingCard, setRatingCard] = useState(false);
  const getAllrating = async (id) => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/rating/owner/${id}`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      setRating(response.data.rating);
      setRatingCard(true);
    } catch (error) {
      toast.success("sometinng went wrong");
    }
  };

  const getAllStore = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/store/owner`,
        {
          headers: {
            authorization: token,
          },
        }
      );
      setStores(response.data.store);
    } catch (error) {
      toast.success("Something went wrong");
    }
  };

  useEffect(() => {
    getAllStore();
  }, []);

  return (
    <div>
      {ratingCard ? (
        <RatingCard rating={rating} />
      ) : (
        <StoreCard
          Data={store}
          role={"Owner"}
          getData={getAllrating}
          value={"View details"}
          Edit={"Edit"}
        />
      )}
    </div>
  );
};

export default Stores;
