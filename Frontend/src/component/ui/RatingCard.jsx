const RatingCard = ({ rating, editRating, Edit }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4  min-w-2xl max-h-4">
      {rating && rating.length > 0 ? (
        rating.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-4 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 ease-out flex flex-col justify-between"
          >
            <div>
              <h2 className="text-lg font-semibold text-gray-800 mb-1 truncate">
                {item.store.name}
              </h2>

              <p className="text-sm text-yellow-500 font-medium mb-1">
                ⭐ {item.Rating}
              </p>

              <p className="text-gray-600 text-sm line-clamp-3">{item.desc}</p>
            </div>

            {Edit ? (
              <button
                className="mt-4 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-blue-600 active:scale-95 transition-all"
                onClick={() => editRating(rating, item.id)}
              >
                {Edit}
              </button>
            ) : (
              <></>
            )}
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500">No data</div>
      )}
    </div>
  );
};

export default RatingCard;
