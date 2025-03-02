import React from "react";
import { Link } from "react-router-dom";
import { AiFillCheckCircle } from "react-icons/ai";

const SuccessPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-yellowBg/50 space-y-8 text-center">
      <AiFillCheckCircle className="text-green-500 text-8xl mb-4" />
      <h1 className="text-4xl font-bold mb-4">Form Submitted Successfully!</h1>
      <p className="text-lg mb-6">
        Thank you for reaching out to us. We will get back to you shortly.
      </p>
      <Link to="/" className="p-4 bg-black text-white rounded-lg">
        Go Back to Home
      </Link>
    </div>
  );
};

export default SuccessPage;
