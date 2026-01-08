const Shimmer = () => {
  return (
    <div className="shimmer-container flex flex-wrap justify-center w-full pb-10">
      {Array(18).fill("").map((_, index) => (
        <div className="shimmer-card w-60 h-64 bg-white rounded-2xl p-3 m-5 shadow-lg relative overflow-hidden" key={index}>
          <div className="shimmer-img w-full h-40 bg-gray-300 rounded-xl shimmer"></div>
          <div className="shimmer-line short h-4 w-3/4 bg-gray-300 rounded-md mt-4 shimmer"></div>
          <div className="shimmer-line h-4 w-full bg-gray-300 rounded-md mt-3 shimmer"></div>
          <div className="shimmer-line h-4 w-full bg-gray-300 rounded-md mt-3 shimmer"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
