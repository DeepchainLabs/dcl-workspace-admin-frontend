"use client";
import { handleIncrement } from "@/app/test/actions";
import { modifyPayload } from "@/utils/zod.utils";
import React, { useActionState, useState } from "react";

export default function TestPage() {
  const [extraData, setExtraData] = useState("DEF");
  const [state, action, pending] = useActionState(handleIncrement, {});

  // const modifiedAction = (payload: FormData) => {
  //   payload.set("extra", extraData);
  //   payload.set("somethingElse", "Some data from outside of the form");
  //   action(payload);
  // };

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <select value={extraData} onChange={(e) => setExtraData(e.target.value)}>
        <option value="ABC">ABC</option>
        <option value="DEF">DEF</option>
        <option value="GHI">GHI</option>
      </select>
      {/* <form action={modifiedAction}> */}
      <form
        action={modifyPayload(action, {
          extra: extraData,
          somethingElse: "Some data from outside of the form",
        })}
      >
        <input
          defaultValue={state?.data?.counter || 0}
          name="counter"
          type="text"
          readOnly
        />
        <button type="submit">
          {pending ? "Incrementing..." : "Increment"}
        </button>
      </form>
    </div>
  );
}
