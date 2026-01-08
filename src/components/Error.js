import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-orange-50 to-orange-100 px-6 py-16">
      
      <div className="bg-white shadow-2xl rounded-2xl p-10 max-w-lg w-full border border-orange-200/60 text-center animate-fadeIn">

        {/* Icon */}
        <div className="text-orange-600 mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-20 h-20 mx-auto"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m0 3.75h.007M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        {/* Error Heading */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Oops !!!</h1>

        <p className="text-lg text-gray-700 mb-2">Something went wrong</p>

        <p className="text-gray-600 font-medium mb-6">
          {err?.status} — {err?.statusText}
        </p>

        {/* CTA Button */}
        <Link
          to="/"
          className="inline-block bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-orange-700 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
