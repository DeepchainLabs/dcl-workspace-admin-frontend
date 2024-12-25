import React from "react";
import CloudStorageInsightGraph from "./CloudStorageInsightGraph";

function CloudStorageInsight() {
  return (
    <div className="">
      <p className="text-[20px] font-[600]">Cloud Storage Insight</p>
      <div className="max-h-[calc(100vh-70vh)]">
        <CloudStorageInsightGraph />
      </div>
    </div>
  );
}

export default CloudStorageInsight;
