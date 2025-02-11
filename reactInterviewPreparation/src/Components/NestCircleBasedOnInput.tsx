import React, { useState } from "react";
import CircleNested from "./CircleNested";

const NestCircleBasedOnInput = () => {
  const [num, setNum] = useState<string>("1");

  return (
    <div>
      <div>
        <input
          style={{
            width: "200px",
          }}
          placeholder="enter a number for nested circle"
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
      <CircleNested numOfCircle={parseInt(num)} />
    </div>
  );
};

export default NestCircleBasedOnInput;
