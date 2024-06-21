"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

export const AlertButton = ({ }: ButtonProps) => {
  const pressMe = () => {
    alert("You pressed me!");
  };
  return (
    <button className="bg-blue-800 hover:bg-blue-600 text-white p-3 rounded-2xl shadow-lg" onClick={pressMe}>
      Create Video Live Stream
    </button>
  );
};