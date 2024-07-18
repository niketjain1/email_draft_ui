import React, { useState } from "react";
import axios from "axios";

function EmailForm({ setResult }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    domainName: "",
    toBeGeneratedByAI: false,
    uniqueFeature: "",
    companyName: "",
    jobRole: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/create-draft`,
        formData
      );
      setResult(response.data);
    } catch (error) {
      console.error("Error creating draft:", error);
      setResult({ error: "Failed to create draft" });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="First Name"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Last Name"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="domainName"
        value={formData.domainName}
        onChange={handleChange}
        placeholder="Domain Name"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="toBeGeneratedByAI"
          checked={formData.toBeGeneratedByAI}
          onChange={handleChange}
          className="form-checkbox h-5 w-5 text-blue-600"
        />
        <span>Generate Unique Feature by AI</span>
      </label>
      {!formData.toBeGeneratedByAI && (
        <input
          type="text"
          name="uniqueFeature"
          value={formData.uniqueFeature}
          onChange={handleChange}
          placeholder="Unique Feature"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      )}
      <input
        type="text"
        name="companyName"
        value={formData.companyName}
        onChange={handleChange}
        placeholder="Company Name"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        name="jobRole"
        value={formData.jobRole}
        onChange={handleChange}
        placeholder="Job Role"
        required
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        Create Draft
      </button>
    </form>
  );
}

export default EmailForm;
