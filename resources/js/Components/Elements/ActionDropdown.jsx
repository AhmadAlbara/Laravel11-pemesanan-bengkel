import React, { useState, useEffect, useRef } from "react";
import { FaEllipsisV } from "react-icons/fa";

const ActionDropdown = ({ row, actions }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    return (
        <div className="relative inline-block text-left" ref={dropdownRef}>
            <div>
                <button
                    type="button"
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
                    onClick={toggleDropdown}
                >
                    <FaEllipsisV />
                </button>
            </div>
            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {actions.map((action) => (
                            <button
                                key={action.label}
                                className="flex items-center px-4 py-2 text-sm text-gray-700 w-full text-left hover:bg-gray-100"
                                role="menuitem"
                                onClick={() => {
                                    action.handler(row.original);
                                    setIsOpen(false);
                                }}
                            >
                                <action.icon className="mr-2" /> {action.label}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActionDropdown;
