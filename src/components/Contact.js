import { Phone, Mail, User, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-linear-to-br from-gray-50 to-white px-6 py-20 flex justify-center">
      <div className="bg-white w-full max-w-6xl shadow-2xl rounded-3xl border border-orange-200/40 p-10 flex flex-col md:flex-row gap-12">

        {/* LEFT SIDE — Contact Details */}
        <div className="md:w-1/2 space-y-8">

          <h1 className="text-4xl font-extrabold text-gray-900">
            Get in <span className="text-orange-600">Touch</span>
          </h1>

          <p className="text-gray-600">
            Have a question, feedback, or collaboration idea?
            <br /> We're just one message away.
          </p>

          {/* PHONE */}
          <div className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50 hover:shadow-md transition cursor-pointer">
            <Phone className="w-9 h-9 text-gray-900 group-hover:text-orange-500 transition" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Phone</h2>
              <p className="text-gray-600">+91-9000000000</p>
            </div>
          </div>

          {/* EMAIL */}
          <div className="group flex items-center gap-4 p-5 rounded-2xl border border-gray-200 bg-gray-50 hover:shadow-md transition cursor-pointer">
            <Mail className="w-9 h-9 text-gray-900 group-hover:text-orange-500 transition" />
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Email</h2>
              <p className="text-gray-600">bitenow@gmail.com</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE — Contact Form */}
        <div className="md:w-1/2 bg-white p-8 rounded-2xl border border-gray-100 shadow-inner">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-5">

            {/* Name */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-700">Your Name</label>
              <div className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-orange-500 transition">
                <User className="text-gray-900" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-700">Email</label>
              <div className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-orange-500 transition">
                <Mail className="text-gray-900" />
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full bg-transparent outline-none"
                  required
                />
              </div>
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1">
              <label className="font-medium text-gray-700">Message</label>
              <div className="flex items-start gap-3 border rounded-xl px-4 py-3 bg-gray-50 focus-within:bg-white focus-within:border-orange-500 transition">
                <MessageSquare className="text-gray-900 mt-0.5" />
                <textarea
                  rows="4"
                  placeholder="Write your message here..."
                  className="w-full bg-transparent outline-none resize-none"
                  required
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <Link to="/messageSent">
            <button
              className="w-full flex items-center justify-center gap-2 bg-orange-600 text-white py-3 mt-3 rounded-xl text-lg font-semibold shadow-lg hover:bg-orange-700 transition cursor-pointer"
            >
              Send Message <Send className="w-5 h-5" />
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

