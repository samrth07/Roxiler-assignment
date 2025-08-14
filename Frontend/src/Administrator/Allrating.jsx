import React, { useEffect, useState } from "react";
import RatingCard from "../component/ui/RatingCard";
import axios from "axios";

const Allrating = () => {
  const token = localStorage.getItem("token");

  const [rating, setRating] = useState([]);

  const getAllrating = async () => {
    const response = await axios.get(
      "http://localhost:3000/api/v1/rating/admin",
      {
        headers: {
          authorization: token,
        },
      }
    );

    setRating(response.data.rating);
  };

  useEffect(() => {
    getAllrating();
  }, []);
  return (
    <div>
      <RatingCard rating={rating} />
    </div>
  );
};

export default Allrating;
