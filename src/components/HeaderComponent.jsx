import React from "react";

const HeaderComponent = () => {
  return (
    <div className="bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 h-24 flex justify-center items-center">
      <ul className="flex justify-between w-[50%] font-bold">
        <li className="p-1 rounded-md hover:bg-gray-700/50 hover:text-white transition duration-500 px-2">Menú1</li>
        <li className="p-1 rounded-md hover:bg-gray-700/50 hover:text-white transition duration-500 px-2">Menú2</li>
        <li className="p-1 rounded-md hover:bg-gray-700/50 hover:text-white transition duration-500 px-2">Menú3</li>
        <li className="p-1 rounded-md hover:bg-gray-700/50 hover:text-white transition duration-500 px-2">Menú4</li>
        <li className="p-1 rounded-md hover:bg-gray-700/50 hover:text-white transition duration-500 px-2">Menú5</li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
