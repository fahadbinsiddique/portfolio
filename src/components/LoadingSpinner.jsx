// components/LoadingSpinner.jsx
export default function LoadingSpinner({ text = "Loading..." }) {
    return (
      <div className="flex flex-col items-center justify-center h-64 gap-4">
        <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="text-gray-400">{text}</p>
      </div>
    );
  }