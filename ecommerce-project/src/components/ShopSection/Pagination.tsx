export default function Pagination() {
    return (
      <div className="flex justify-center items-center w-full mt-8 px-4 sm:px-6 md:px-8">
        {/* Pagination Buttons */}
        <button className="px-4 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400 rounded-md text-sm sm:text-base">
          Previous
        </button>
  
        <div className="flex space-x-2 mx-2">
          <button className="px-3 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400 rounded-md text-sm sm:text-base">
            1
          </button>
          <button className="px-3 py-2 bg-blue-500 text-white hover:bg-gray-400 rounded-md text-sm sm:text-base">
            2
          </button>
          <button className="px-3 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400 rounded-md text-sm sm:text-base">
            3
          </button>
        </div>
  
        <button className="px-4 py-2 bg-gray-300 text-gray-700 hover:bg-gray-400 rounded-md text-sm sm:text-base">
          Next
        </button>
      </div>
    );
  }
  