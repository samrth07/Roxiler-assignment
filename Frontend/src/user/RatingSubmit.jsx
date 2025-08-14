import React, { useEffect, useState } from "react";
import RatingCard from "../component/ui/RatingCard";
import axios from "axios";
import toast from "react-hot-toast";

const RatingSubmit = () => {
  const token = localStorage.getItem("token");
  const [rating, setRating] = useState([]);
  const [ratingId, setRatingId] = useState(null);
  const [loading, setloading] = useState(true);
  const [editData, setEditData] = useState(null);

  const editRating = (data, id) => {
    setEditData(data);
    setRatingId(id);
  };

  const getRating = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/rating", {
        headers: {
          authorization: token,
        },
      });
      setRating(response.data.rating);
      setloading(false);
    } catch (error) {
      toast.success("Something went wrong");
    }
  };

  const handleUpdate = async (updateData) => {
    try {
      const response = await axios.patch(
        `http://localhost:3000/api/v1/rating/${ratingId}`,
        updateData,
        {
          headers: {
            authorization: token,
          },
        }
      );
      if (response) {
        toast.success("Rating Update Successfully");
        setEditData(null);
      }
    } catch (error) {
      toast.success("Something went wrong");
    }
  };

  useEffect(() => {
    getRating();
  }, []);

  if (loading) return <div>Loading....</div>;
  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-br from-blue-50 to-green-50   w-full p-5">
      {editData ? (
        <EditRatingForm
          data={rating}
          onSave={handleUpdate}
          onCancel={() => setEditData(null)}
        />
      ) : (
        <RatingCard rating={rating} editRating={editRating} Edit={"Edit"} />
      )}
    </div>
  );
};

export default RatingSubmit;

// EditRatingForm.jsx

export const EditRatingForm = ({ data, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: data.id,
    Rating: data.Rating,
    desc: data.desc,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    onSave(formData, data.id);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-xl p-6 w-full max-w-md"
    >
      <h2 className="text-xl font-bold mb-4">Edit Rating</h2>

      <label className="block mb-2 font-medium">Rating</label>
      <input
        type="number"
        name="Rating"
        placeholder="Enter Rating between 1 to 5"
        value={formData.Rating}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-4"
        min="1"
        max="5"
      />

      <label className="block mb-2 font-medium">Description</label>
      <textarea
        name="desc"
        value={formData.desc}
        onChange={handleChange}
        className="w-full border p-2 rounded mb-4"
        rows="4"
      />

      <div className="flex justify-end gap-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Save
        </button>
      </div>
    </form>
  );
};
