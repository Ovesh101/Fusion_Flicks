export default function Spinner() {
    return (
      <div className="flex items-center justify-center fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-golden-brown border-solid"></div>
      </div>
    );
  }
  