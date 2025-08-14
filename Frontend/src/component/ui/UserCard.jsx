import React from "react";

export default function UserCard({ Data, role }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16 px-4 sm:px-6 lg:px-0">
      {Data && Data.length > 0 ? (
        Data.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300 ease-out flex flex-col justify-between"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              {item.name}
            </h2>

            {item.Address && (
              <div className="mb-4 text-center">
                <p className="text-gray-700">
                  {item.Address.streat}, {item.Address.city}
                </p>
                <p className="text-gray-700">
                  {item.Address.state} - {item.Address.pincode}
                </p>
                <p className="text-gray-700">{item.Address.country}</p>
              </div>
            )}

            <div className="mb-4 text-center">
              <p className="text-gray-600">
                <span className="font-semibold">Email:</span> {item.email}
              </p>
              <p className="text-gray-600">
                <span className="font-semibold">{role}:</span> {item.name}
              </p>
            </div>

            <div className="flex justify-center mt-auto">
              <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-all">
                {item.role}
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-gray-500 col-span-full text-center py-10 text-lg">
          No data available
        </div>
      )}
    </div>
  );
}
