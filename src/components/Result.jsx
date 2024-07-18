import React from "react";

function Result({ result }) {
  return (
    <div className="mt-8 p-4 bg-gray-100 rounded-md">
      <h2 className="text-xl font-semibold mb-2">Result</h2>
      {result.error ? (
        <p className="text-red-500">{result.error}</p>
      ) : (
        <pre className="whitespace-pre-wrap break-words">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </div>
  );
}

export default Result;
