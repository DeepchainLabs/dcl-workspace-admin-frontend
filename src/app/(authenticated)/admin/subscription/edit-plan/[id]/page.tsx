"use client";

import { useParams, useRouter } from "next/navigation";
import DropDown from "@/components/Common/DropDown";
import ToggleSwitch from "@/components/Common/ToggleSwitch";
import React, { useState, useEffect } from "react";
import {
  plans,
  categoryOptions,
  modules,
  features,
} from "@/contents/Admin/Subscription/SubscriptionContents";

export default function EditPlanPage() {
  const { id } = useParams();
  const router = useRouter();

  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  const [planName, setPlanName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [freeForOneMonth, setFreeForOneMonth] = useState(false);
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [activeFeatures, setActiveFeatures] = useState<string[]>([]);

  useEffect(() => {
    const allPlans = [...plans.organization, ...plans.personal];
    const plan = allPlans.find((p) => p.id === id);

    if (plan) {
      setSelectedPlan(plan);
      setPlanName(plan.name);
      setCategory(plan.category);
      setDescription(plan.description);
      setPrice(plan.price);
      setFreeForOneMonth(plan.freeForOneMonth);
      setSelectedModules(plan.modules.map((module: any) => module.moduleName));
      setActiveFeatures(
        plan.features.map((feature: any) => feature.featureName)
      );
    } else {
      router.push("/admin/subscription");
    }
  }, [id, router]);

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
        <label key={index} className="flex gap-2 items-center">
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

  const filteredFeatures = features.filter((feature: any) =>
    selectedModules.includes(feature.moduleName)
  );

  const handleCancel = () => {
    router.push("/admin/subscription");
  };

  const handleSave = () => {
    console.log("Updated Plan Data:", {
      id,
      planName,
      category,
      description,
      price,
      freeForOneMonth,
      selectedModules,
      activeFeatures,
    });

    router.push("/admin/subscription");
  };

  if (!selectedPlan) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p>Loading plan data...</p>
      </div>
    );
  }

  return (
    <main>
      <div className="border-b border-[#E5E9EB] min-h-[76px]">
        <div className="custom-layout py-4 pb-0">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-[20px] sm:text-[24px] font-[700] text-[#292D32]">
              Edit Plan - {planName}
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
              value={planName}
              onChange={(e) => setPlanName(e.target.value)}
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
                  checked={freeForOneMonth}
                  onChange={(e) => setFreeForOneMonth(e.target.checked)}
                  className="form-checkbox appearance-none h-[16.5px] w-[16.5px] border border-[#0000008A] rounded-[4.52px] bg-white checked:bg-[#2563EB] checked:border-transparent focus:outline-none focus:ring-transparent focus:ring-offset-0 focus:ring-0"
                />
                Mark Free for 1 Month
              </div>
            </div>
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="Price"
              className="w-full border border-[#E5E9EB] bg-white rounded-[8px] p-2 text-[14px]"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="text-[#292D32] font-[600] text-[18px]">Modules</h1>
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
                  {filteredFeatures.map(
                    (feature: any, index: React.Key | null | undefined) => (
                      <tr key={index} className="border-b">
                        <td className="p-3 md:p-4 border-b">
                          {feature.moduleName}
                        </td>
                        <td className="p-3 md:p-4 border-b">
                          <div className="flex items-center justify-center text-center">
                            <ToggleSwitch
                              isChecked={activeFeatures.includes(
                                feature.featureName
                              )}
                              onChange={() =>
                                toggleFeature(feature.featureName)
                              }
                            />
                          </div>
                        </td>
                        <td className="p-3 md:p-4 border-b">
                          {feature.featureName}
                        </td>
                        <td className="p-3 md:p-4 border-b">
                          {renderProperties(feature.properties)}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-end gap-2 sm:gap-4 mt-6">
          <button
            onClick={handleCancel}
            className="w-full sm:w-auto px-4 py-2 bg-white text-[#2377FC] border border-[#2377FC] rounded-[8px] font-[500]"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="w-full sm:w-auto px-4 py-2 bg-[#2377FC] text-white rounded-[8px] font-[500]"
          >
            Save
          </button>
        </div>
      </div>
    </main>
  );
}
