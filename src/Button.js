import React from "react";

export default function Button({ onClick, background, color, children }) {
  return (
    <button
      style={{
        background: background,
        color: color,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
