import { CheckCircle, ArrowRight, Home, ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const SuccessPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-b from-green-50 to-white px-4">
      
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white dark:bg-gray-900 shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center border border-gray-200 dark:border-gray-800"
      >

        {/* Animated Checkmark */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 12,
            delay: 0.15,
          }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="w-20 h-20 text-green-600 dark:text-green-500 drop-shadow-lg" />
        </motion.div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
          Order Confirmed!
        </h1>

        {/* Subtitle */}
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-lg">
          Thanks for choosing <span className="font-semibold text-green-600 dark:text-green-400">BiteNow</span>.
          Your order is on the way 🚚💨
        </p>

        {/* Order Details Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 bg-green-50 dark:bg-gray-800 p-6 rounded-2xl border border-green-200 dark:border-gray-700 text-left"
        >
          <p className="text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Estimated Delivery:</span> 25–35 minutes
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Order ID:</span> #{Math.floor(Math.random() * 900000 + 100000)}
          </p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            <span className="font-semibold">Payment:</span> Successful 💳
          </p>
        </motion.div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          {/* Back to Home */}
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 dark:hover:bg-green-600 transition-all shadow-lg hover:shadow-xl active:scale-95"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>

          {/* Continue Shopping */}
          <Link
            to="/offers"
            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all shadow-md hover:shadow-xl active:scale-95"
          >
            <ShoppingBag className="w-5 h-5" />
            Continue Shopping
          </Link>
        </div>

        {/* Arrow Animation */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 text-gray-500 dark:text-gray-400 flex justify-center"
        >
          <ArrowRight className="w-6 h-6 animate-pulse" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SuccessPage;
