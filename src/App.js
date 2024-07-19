import React, { useState } from "react";
import EmailForm from "./components/EmailForm";
import Result from "./components/Result";
import Loader from "./components/Loader";

const App = () => {
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-light-blue-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <h1 className="text-2xl font-bold mb-5 text-center">
            Email Draft Creator
          </h1>
          {isLoading ? (
            <Loader />
          ) : result ? (
            <Result result={result} onReset={handleReset} />
          ) : (
            <EmailForm setResult={setResult} setIsLoading={setIsLoading} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
