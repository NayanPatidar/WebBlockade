import { XCircle } from "lucide-react";
import React from "react";

const BlockedPage = () => {
  return (
    <div className="min-h-screen w-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center">
        <XCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">
          This Website is Blocked
        </h1>
        <p className="text-gray-400 text-lg">
          The website you are trying to access is blocked.
        </p>
      </div>
    </div>
  );
};

export default BlockedPage;
