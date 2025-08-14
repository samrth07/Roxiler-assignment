import React from "react";
import { FaStar } from "react-icons/fa6"; // Correct import

export default function StoreCard({
  Data,
  role,
  value,
  getData,
  viewDetails,
  giveRating,
  HandleViewDetails,
  HandleSubmitRating,
}) {
  return (
    <div className="grid grid-cols-3 mt-28 max-w-5xl ml-44">
      {Data && Data.length > 0 ? (
        Data.map((item, index) => {
          const avgRating =
            item.allRating && item.allRating.length > 0
              ? (
                  item.allRating.reduce((sum, r) => sum + (r.Rating || 0), 0) /
                  item.allRating.length
                ).toFixed(1)
              : "N/A";

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 ease-out max-w-md gap-4 m-4 flex flex-col items-center"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                {item.name}
                {avgRating !== "N/A" && (
                  <span className="flex items-center text-yellow-500 text-lg font-medium">
                    <FaStar className="mr-1" />
                    {avgRating}
                  </span>
                )}
              </h2>

              <div className="mb-4">
                <p className="text-gray-600">
                  {item.Address.streat}, {item.Address.city}
                </p>
                <p className="text-gray-600">
                  {item.Address.State} - {item.Address.pincode}
                </p>
                <p className="text-gray-600">{item.country}</p>
              </div>

              <div className="mb-4">
                <p className="text-gray-500">
                  <span className="font-semibold">Email:</span> {item.email}
                </p>
                <p className="text-gray-500">
                  <span className="font-semibold">{role}:</span>{" "}
                  {item.owner.name}
                </p>
              </div>

              {value ? (
                <button
                  onClick={() => {
                    getData(item.id);
                  }}
                  className="border p-1.5 rounded-2xl text-amber-100 bg-blue-600"
                >
                  {value}
                </button>
              ) : null}

              {(viewDetails || giveRating) && (
                <div className="flex gap-2">
                  {viewDetails && (
                    <button
                      className="border rounded-2xl bg-blue-600 p-1.5 text-amber-50 hover:bg-blue-800"
                      onClick={() => {
                        HandleViewDetails(item.id);
                      }}
                    >
                      {viewDetails}
                    </button>
                  )}
                  {giveRating && (
                    <button
                      className="border rounded-2xl bg-blue-600 p-1.5 text-amber-50 hover:bg-blue-800"
                      onClick={() => {
                        HandleSubmitRating(item);
                      }}
                    >
                      {giveRating}
                    </button>
                  )}
                </div>
              )}
            </div>
          );
        })
      ) : (
        <>No data</>
      )}
    </div>
  );
}
