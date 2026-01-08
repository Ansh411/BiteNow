const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-lg border">

        <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 mb-6">
          These Terms govern your access and use of BiteNow services including 
          food delivery, grocery shopping, and app/website access.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">1. User Responsibilities</h2>
        <p className="text-gray-600 mt-3">
          You must provide accurate information and ensure safe use of your account.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">2. Order & Payment</h2>
        <p className="text-gray-600 mt-3">
          Orders must be paid before delivery. Cancellations may not always be eligible for refunds.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">3. Delivery Policy</h2>
        <p className="text-gray-600 mt-3">
          Delivery ETA may vary. BiteNow is not responsible for delays caused by external factors.
        </p>

        <h2 className="text-2xl font-bold text-gray-800 mt-8">4. Legal Liability</h2>
        <p className="text-gray-600 mt-3">
          We are not liable for losses related to unauthorized account usage or incorrect information entered by users.
        </p>

      </div>
    </div>
  );
};

export default TermsConditions;
