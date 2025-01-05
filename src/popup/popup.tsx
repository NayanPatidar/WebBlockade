import React, { useEffect, useState } from "react";
import "./popup.css";
import { XCircle } from "lucide-react";

const Popup = () => {
  const [isEnabled, setIsEnabled] = useState(true);
  const [blockedSites, setBlockedSites] = useState([]);
  const [newSite, setNewSite] = useState("");

  useEffect(() => {
    chrome.storage.local.get("blockedUrls", ({ blockedUrls }) => {
      setBlockedSites(blockedUrls || []);
    });
    chrome.management.getSelf((self) => {
      setIsEnabled(self.enabled);
    });
  }, []);

  const addBlockedSite = () => {
    if (!newSite.trim() || blockedSites.includes(newSite.trim())) {
      alert("Invalid or duplicate URL");
      return;
    }
    const updatedSites = [...blockedSites, newSite.trim()];
    setBlockedSites(updatedSites);
    chrome.storage.local.set({ blockedUrls: updatedSites });
    setNewSite("");
  };

  const removeBlockedSite = (index) => {
    const updatedSites = blockedSites.filter((_, i) => i !== index);
    setBlockedSites(updatedSites);
    chrome.storage.local.set({ blockedUrls: updatedSites });
  };

  const handleToggleExtension = () => {
    chrome.management.getSelf((self) => {
      chrome.management.setEnabled(self.id, !isEnabled, () => {
        setIsEnabled(!isEnabled);
      });
    });
  };

  return (
    <div className="w-[400px] h-[400px] bg-white p-6 flex flex-col shadow-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Website Blocker</h1>

      <div className="flex items-center justify-between mb-6">
        <span className="text-lg text-gray-700">Enable Blocker</span>
        <button
          aria-label={isEnabled ? "Disable Blocker" : "Enable Blocker"}
          className={`w-14 h-8 rounded-full p-1 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
            isEnabled ? "bg-green-500" : "bg-gray-300"
          }`}
          onClick={handleToggleExtension}
        >
          <div
            className={`w-6 h-6 rounded-full bg-white shadow-md transform transition-transform duration-300 ${
              isEnabled ? "translate-x-6" : ""
            }`}
          ></div>
        </button>
      </div>

      <div className="flex mb-4">
        <input
          type="text"
          value={newSite}
          onChange={(e) => setNewSite(e.target.value)}
          placeholder="Add website to block"
          className="flex-grow p-2 border rounded-md mr-2"
        />
        <button
          onClick={addBlockedSite}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Add
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2 text-gray-800">
        Blocked Websites
      </h2>

      <div className="flex-grow border border-gray-200 rounded-md p-2 overflow-y-auto">
        {blockedSites.length === 0 ? (
          <p className="text-gray-500 text-center">No websites blocked yet</p>
        ) : (
          <ul className="space-y-2">
            {blockedSites.map((site, index) => (
              <li
                key={index}
                className="flex items-center justify-between py-2 px-3 bg-gray-50 rounded-md"
              >
                <span className="text-gray-700">{site}</span>
                <button
                  onClick={() => removeBlockedSite(index)}
                  className="text-red-500 hover:text-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full"
                >
                  <XCircle size={20} />
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Popup;
