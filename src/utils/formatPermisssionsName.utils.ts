const formatPermission = (permission: string): string => {
  return permission
    .toLowerCase() // Convert to lowercase
    .split("_") // Split by underscore
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join words with a space
};

export { formatPermission };
