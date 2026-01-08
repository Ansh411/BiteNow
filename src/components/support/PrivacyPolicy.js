const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-lg border">

        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Privacy Policy
        </h1>

        <p className="text-gray-600 mb-6">
          At BiteNow, your privacy is our priority. This policy explains how we
          collect, store, use, and protect your personal information.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">1. Information We Collect</h2>
        <p className="text-gray-600 mt-3">
          We may collect your name, email, phone number, order history, location data, 
          and payment details when required.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">2. How We Use Your Data</h2>
        <p className="text-gray-600 mt-3">
          To improve user experience, deliver orders, process payments, send updates,
          and personalize recommendations.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">3. Third-Party Sharing</h2>
        <p className="text-gray-600 mt-3">
          We do not sell your data. Certain information may be shared with delivery 
          partners or payment providers as required.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">4. Your Rights</h2>
        <p className="text-gray-600 mt-3">
          You may request deletion, correction, or access to your personal data anytime.
        </p>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
