import React from "react";

interface CircleProps {
  numOfCircle: number;
}

const CircleNested: React.FC<CircleProps> = ({ numOfCircle }) => {
  const size = numOfCircle * 100;

  return (
    <div
      style={{
        position: "relative",
        height: `${size}px`,
        width: `${size}px`,
        borderRadius: "50%",
        border: "1px solid black",
        margin: "auto",
        overflow: "hidden",
      }}
    >
      {numOfCircle > 1 && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <CircleNested numOfCircle={numOfCircle - 1} />
        </div>
      )}
    </div>
  );
};

export default CircleNested;
