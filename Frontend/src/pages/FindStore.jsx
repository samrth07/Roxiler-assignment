import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import StoreCard from "../component/ui/StoreCards";
import { EditRatingForm } from "../user/RatingSubmit";
import axios from "axios";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const FindStore = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [stores, setStores] = useState([]);
  const [filteredStores, setFilteredStores] = useState([]);
  const [filters, setFilters] = useState({
    city: "",
    state: "",
    minRating: "",
  });
  const [tempFilters, setTempFilters] = useState({
    city: "",
    state: "",
    minRating: "",
  });

  const [showRatingForm, setShowRatingForm] = useState(false);
  const [selectedStore, setSelectedStore] = useState(null);

  if (!token) {
    navigate("/signin");
  }

  const getAllStore = async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/v1/store", {
        headers: { authorization: token },
      });
      setStores(response.data.stores);
      setFilteredStores(response.data.stores);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

const getAverageRating = (store) => {
  if (!store.allRating || store.allRating.length === 0) return 0;
  const sum = store.allRating.reduce((acc, r) => acc + Number(r.Rating), 0);
  return parseFloat((sum / store.allRating.length).toFixed(1)); 
};


  useEffect(() => {
    let data = [...stores];

    if (filters.city) {
      data = data.filter(
        (store) =>
          store.Address.city.toLowerCase() === filters.city.toLowerCase()
      );
    }

    if (filters.state) {
      data = data.filter(
        (store) =>
          store.Address.State.toLowerCase() === filters.state.toLowerCase()
      );
    }

    if (filters.minRating) {
      data = data.filter(
        (store) => getAverageRating(store) >= parseFloat(filters.minRating)
      );
    }

    setFilteredStores(data);
  }, [filters, stores]);

  const handleGiveRating = (store) => {
    setSelectedStore(store);
    setShowRatingForm(true);
  };

  const handleSaveRating = async (formData, storeId) => {
    try {
      await axios.post(
        `http://localhost:3000/api/v1/rating/${storeId}`,
        formData,
        { headers: { authorization: token } }
      );
      toast.success("Rating submitted successfully!");
      setShowRatingForm(false);
      setSelectedStore(null);
      getAllStore();
    } catch (error) {
      toast.error("Failed to submit rating");
    }
  };

  const handleCancelRating = () => {
    setShowRatingForm(false);
    setSelectedStore(null);
  };

  useEffect(() => {
    getAllStore();
  }, []);

  return (
    <div>
      <Navbar />

      {!showRatingForm ? (
        <>
          <div className="max-w-5xl mx-auto flex flex-col gap-4 bg-white p-4 rounded-lg shadow-md mt-32">
            <div className="text-2xl font-bold">Filter Store</div>
            <div className="flex flex-wrap gap-4 bg-white p-4 rounded-lg shadow-md">
              <input
                type="text"
                placeholder="Filter by City"
                value={tempFilters.city}
                onChange={(e) =>
                  setTempFilters({ ...tempFilters, city: e.target.value })
                }
                className="border p-2 rounded w-40"
              />
              <input
                type="text"
                placeholder="Filter by State"
                value={tempFilters.state}
                onChange={(e) =>
                  setTempFilters({ ...tempFilters, state: e.target.value })
                }
                className="border p-2 rounded w-40"
              />
              <select
                value={tempFilters.minRating}
                onChange={(e) =>
                  setTempFilters({ ...tempFilters, minRating: e.target.value })
                }
                className="border p-2 rounded w-40"
              >
                <option value="">Min Rating</option>
                <option value="1">
                  1 <FaStar />
                </option>
                <option value="2">
                  2 <FaStar />
                </option>
                <option value="3">
                  3 <FaStar />
                </option>
                <option value="4">
                  4 <FaStar />
                </option>
                <option value="5">
                  5 <FaStar />
                </option>
              </select>
            </div>

            <div className="flex gap-4">
              <button
                onClick={() => setFilters(tempFilters)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
              >
                Apply Filter
              </button>

              <button
                onClick={() => {
                  setTempFilters({ city: "", state: "", minRating: "" });
                  setFilters({ city: "", state: "", minRating: "" });
                }}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Reset Filter
              </button>
            </div>
          </div>

          <StoreCard
            Data={filteredStores}
            role={"Owner"}
            viewDetails={"View Details"}
            giveRating={"Give Rating"}
            HandleSubmitRating={handleGiveRating}
          />
        </>
      ) : (
        <div className="flex justify-center mt-8">
          <EditRatingForm
            data={selectedStore}
            onSave={handleSaveRating}
            onCancel={handleCancelRating}
          />
        </div>
      )}
    </div>
  );
};

export default FindStore;
