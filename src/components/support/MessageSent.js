import { CheckCircle, Home } from "lucide-react";
import { Link } from "react-router-dom";

const MessageSent = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-white flex items-center justify-center px-6">
      <div className="relative -mt-36 bg-white shadow-2xl rounded-3xl border border-gray-200 p-10 max-w-md w-full text-center">

        {/* Success Icon */}
        <div className="flex justify-center mb-5">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center shadow-md">
            <CheckCircle size={50} />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-gray-900">
          Message <span className="text-green-600">Sent!</span>
        </h1>

        <p className="text-gray-600 mt-3 leading-relaxed">
          Thank you for reaching out.  
          We’ve received your message and will get back to you soon.
        </p>

        {/* Home Button */}
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-orange-700 shadow-md transition cursor-pointer"
        >
          <Home className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default MessageSent;
