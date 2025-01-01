import React, { Suspense } from "react";
import Items from "./Items";
import GridSleleton from "./GridSleleton";
import { extractError } from "@/utils/errors.utils";
import ErrorAllert from "@/components/Common/ErrorAllert";
import { getEmployess } from "@/resources/settings/employee.service";

export default async function GridView({ status }: { status: string }) {
  const employees = await getEmployess({}).catch((error) => {
    return extractError(error);
  });
  if (typeof employees === "string") return <ErrorAllert message={employees} />;
  return (
    <div>
      <Suspense fallback={<GridSleleton />}>
        <Items employees={employees} />
      </Suspense>
    </div>
  );
}
