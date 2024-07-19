import React from "react";

function Result({ result, onReset }) {
  const handleGmailRedirect = () => {
    window.open("https://mail.google.com/mail/u/0/#drafts", "_blank");
  };

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Draft Created</h2>
      {result.error ? (
        <p className="text-red-500">{result.error}</p>
      ) : (
        <div>
          <h3 className="text-xl font-semibold mb-2">Email Content:</h3>
          <div className="bg-gray-100 p-4 rounded-md mb-4">
            <pre className="whitespace-pre-wrap break-words text-sm">
              {result.emailContent}
            </pre>
          </div>
          <div className="flex space-x-4">
            <button
              onClick={handleGmailRedirect}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              View in Gmail
            </button>
            <button
              onClick={onReset}
              className="bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Create Another Draft
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Result;
