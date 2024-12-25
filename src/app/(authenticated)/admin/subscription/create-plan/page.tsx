"use client";

import DropDown from "@/components/Common/DropDown";
import ToggleSwitch from "@/components/Common/ToggleSwitch";
import React, { useState } from "react";

const categoryOptions = [
  { id: "1", name: "Organization" },
  { id: "2", name: "Personal" },
];
const modules = [
  "Manage Organization",
  "Task Manager",
  "Analytics & Report",
  "Calendar",
  "Email",
  "Cloud Storage",
  "Notes",
  "HRMS",
  "CRMS",
  "Communication Hub",
  "Survey Tool",
];

const features = [
  {
    moduleName: "Manage Organization",
    featureName: "Employee",
    properties: "Max Employee",
  },
  {
    moduleName: "Manage Organization",
    featureName: "Team",
    properties: "Max Team",
  },
  {
    moduleName: "Task Manager",
    featureName: "Time Tracker",
    properties: "",
  },
  {
    moduleName: "Task Manager",
    featureName: "Sprint Board",
    properties: "",
  },
  {
    moduleName: "Task Manager",
    featureName: "Projects",
    properties: "Max Projects",
  },
  {
    moduleName: "Analytics & Report",
    featureName: "Reports & Analytics",
    properties: [
      "General Report",
      "User Analytics",
      "Weekly Report",
      "Project Wise Report",
    ],
  },
  { moduleName: "Email", featureName: "Email", properties: "Max Email" },
  {
    moduleName: "Cloud Storage",
    featureName: "Cloud Storage",
    properties: "Max Storage",
  },
  { moduleName: "Calendar", featureName: "Calendar", properties: "" },
  {
    moduleName: "Calendar",
    featureName: "Event Management",
    properties: "",
  },
  { moduleName: "Notes", featureName: "Notes", properties: "" },
  {
    moduleName: "Notes",
    featureName: "AI Powered Intelligence",
    properties: "",
  },
  { moduleName: "HRMS", featureName: "Hirings", properties: "Maximum Posts" },
  { moduleName: "HRMS", featureName: "Payroll", properties: "" },
  {
    moduleName: "HRMS",
    featureName: "Employee Performance",
    properties: "",
  },
  { moduleName: "HRMS", featureName: "Leaves", properties: "" },
  { moduleName: "CRMS", featureName: "Lead Management", properties: "" },
  { moduleName: "CRMS", featureName: "Deal Management", properties: "" },
  {
    moduleName: "Communication Hub",
    featureName: "Channels",
    properties: "Maximum Channels",
  },
  {
    moduleName: "Communication Hub",
    featureName: "Calling",
    properties: "Maximum hours/day",
  },
  {
    moduleName: "Communication Hub",
    featureName: "Screen Sharing",
    properties: "",
  },
  {
    moduleName: "Survey Tool",
    featureName: "Surveys",
    properties: "Maximum surveys/day",
  },
  {
    moduleName: "Survey Tool",
    featureName: "Responses",
    properties: "Maximum responses/day",
  },
  {
    moduleName: "Survey Tool",
    featureName: "Assessment & Evaluation",
    properties: "Maximum assessments/day",
  },
];

export default function CreatePlanPage() {
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [activeFeatures, setActiveFeatures] = useState<string[]>([]);
  const [category, setCategory] = useState("Organization");

  const toggleModule = (moduleName: string) => {
    setSelectedModules((prev) =>
      prev.includes(moduleName)
        ? prev.filter((m) => m !== moduleName)
        : [...prev, moduleName]
    );
  };

  const toggleFeature = (featureName: string) => {
    setActiveFeatures((prev) =>
      prev.includes(featureName)
        ? prev.filter((f) => f !== featureName)
        : [...prev, featureName]
    );
  };

  const renderProperties = (properties: string | string[] | null) => {
    if (!properties) return "N/A";

    if (Array.isArray(properties)) {
      return properties.map((prop, index) => (
        <label key={index} className="flex gap-2 items-center ">
          <input
            type="checkbox"
            className="form-checkbox appearance-none h-[16.5px] w-[16.5px] border border-[#0000008A] rounded-[4.52px] bg-white checked:bg-[#2563EB] checked:border-transparent focus:outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-0"
          />
          {prop}
        </label>
      ));
    }

    return (
      <input
        type="text"
        placeholder={properties}
        className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
      />
    );
  };

  const filteredFeatures = features.filter((feature) =>
    selectedModules.includes(feature.moduleName)
  );

  return (
    <main>
      <div className="border-b border-[#E5E9EB] min-h-[76px]">
        <div className="custom-layout py-4 pb-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[20px] sm:text-[24px] font-[700] text-[#292D32]">
              Add Plan
            </h1>
          </div>
        </div>
      </div>
      <div className="custom-layout h-[calc(100vh-155px)] overflow-y-auto space-y-8 mt-6 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="col-span-1">
            <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
              Plan Name
            </label>
            <input
              type="text"
              placeholder="Plan Name"
              className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
            />
          </div>
          <div className="col-span-1">
            <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
              Category
            </label>
            <DropDown
              title="Category"
              options={categoryOptions}
              onChange={setCategory}
              selected={category}
              width="100%"
            />
          </div>

          <div className="col-span-1 md:col-span-2">
            <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
              Description
            </label>
            <textarea
              placeholder="Description"
              className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
              rows={4}
            ></textarea>
          </div>
          <div className="col-span-1">
            <div className="flex justify-between items-center">
              <label className="block text-[#292D32] font-[600] text-[14px] mb-2">
                Price
              </label>
              <div className="flex gap-1 items-center text-[#292D32] font-[600] text-[14px]">
                <input
                  type="checkbox"
                  className="form-checkbox appearance-none h-[16.5px] w-[16.5px] border border-[#0000008A] rounded-[4.52px] bg-white checked:bg-[#2563EB] checked:border-transparent focus:outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-0"
                />
                Mark Free for 1 Month
              </div>
            </div>
            <input
              type="text"
              placeholder="Price"
              className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-[#292D32] font-[600] text-[18px]">Modules</h1>
          <h1 className="text-[#6F6F6F] font-[500] text-[14px]">
            Please select modules from below
          </h1>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-5 gap-2 mb-4">
          {modules.map((module) => (
            <button
              key={module}
              className={`border rounded-[8px] p-2 text-center text-[14px] font-[500] ${
                selectedModules.includes(module)
                  ? "bg-[#2377FC] text-white"
                  : "bg-white text-[#6F6F6F]"
              }`}
              onClick={() => toggleModule(module)}
            >
              {module}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-[#292D32] font-[600] text-[18px]">Features</h1>
        </div>
        <div>
          {filteredFeatures.length === 0 ? (
            <p className="text-[#6F6F6F] font-[600] text-[14px] text-center flex items-center justify-center">
              Select a module to view its features.
            </p>
          ) : (
            <div className="bg-white max-h-full overflow-auto">
              <table className="w-full min-w-[360px] lg:min-w-full border-collapse">
                <thead className="bg-[#F6F6F6] text-[12px] sm:text-[14px] font-[500] text-[#6F6F6F]">
                  <tr>
                    <th className="p-3 md:p-4 border-b">Module Name</th>
                    <th className="p-3 md:p-4 border-b">Action</th>
                    <th className="p-3 md:p-4 border-b">Feature Name</th>
                    <th className="p-3 md:p-4 border-b">Properties</th>
                  </tr>
                </thead>
                <tbody className="text-[12px] sm:text-[14px] md:text-[16px] font-[500] text-[#292D32] text-center">
                  {filteredFeatures.map((feature, index) => (
                    <tr key={index} className="border-b">
                      <td className="p-3 md:p-4 border-b">
                        {feature.moduleName}
                      </td>
                      <td className="p-3 md:p-4 border-b">
                        <div className="flex items-center justify-center text-center">
                          <ToggleSwitch />
                        </div>
                      </td>

                      <td className="p-3 md:p-4 border-b">
                        {feature.featureName}
                      </td>
                      <td className="p-3 md:p-4 border-b">
                        {renderProperties(feature.properties)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 mt-6">
          <button
            // onClick={handleCancel}
            className="w-full sm:w-auto px-4 py-2 bg-white text-[#2377FC] border border-[#2377FC] rounded-[8px] font-[500]"
          >
            Cancel
          </button>
          <button
            // onClick={handleConfirm}
            className="w-full sm:w-auto px-4 py-2 bg-[#2377FC] text-white rounded-[8px] font-[500]"
          >
            Confirm
          </button>
        </div>
      </div>
    </main>
  );
}
