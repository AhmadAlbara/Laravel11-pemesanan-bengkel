import React from "react";
import { FaSearch } from "react-icons/fa";

const GlobalFilter = ({ filter, setFilter }) => {
    return (
        <div className="relative w-full max-w-xs ">
            <input
                value={filter || ""}
                onChange={(e) => setFilter(e.target.value)}
                placeholder="Type to search..."
                className="focus:border-violet-500 w-full pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-0 text-sm "
            />
            <FaSearch className="absolute left-3 top-2/4 transform -translate-y-2/4 text-gray-500" />
        </div>
    );
};

export default GlobalFilter;
