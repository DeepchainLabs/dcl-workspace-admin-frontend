"use client";
export const hasPermission = (requiredPermission: string): boolean => {
  // if (typeof window === "undefined") {
  //   return false;
  // }

  const capabilitiesString = localStorage.getItem("capabilities");

  if (!capabilitiesString) return false;

  try {
    const capabilities: string[] = JSON.parse(capabilitiesString);
    return capabilities.includes(requiredPermission);
  } catch (error) {
    console.error("Error parsing capabilities from local storage:", error);
    return false;
  }
};
