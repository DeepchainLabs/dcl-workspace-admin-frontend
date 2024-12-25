import React from "react";

export default function FormError({ error }: { error: string }) {
  return (
    <div className="text-red-500 text-[13px] font-[600] mt-1">{error}</div>
  );
}
