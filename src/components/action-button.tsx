import React, { FC } from "react";

interface ActionButtonProps {
  onClick?: () => void;
  className?: string;
}

export const ActionButton: FC<ActionButtonProps> = ({ onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform ${className}`}
      style={{
        boxShadow: "0 8px 20px rgba(239, 68, 68, 0.4)",
      }}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 5V19M5 12H19"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};