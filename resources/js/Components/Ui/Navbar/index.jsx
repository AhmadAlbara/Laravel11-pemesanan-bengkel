import React, { useState } from "react";
import ApplicationLogo from "@/Components/Elements/ApplicationLogo";
import Dropdown from "@/Components/Elements/Dropdown";

import { HiOutlineMenuAlt2 } from "react-icons/hi";
const Navbar = ({ user, toggleSidebar }) => {
    return (
        <nav className="fixed top-0  z-20 w-full border-b border-gray-200 bg-white">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between  ">
                    <div className="flex items-center justify-start rtl:justify-end ">
                        <button className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        onClick={toggleSidebar}
                        >
                            <HiOutlineMenuAlt2 className="text-2xl" />
                        </button>
                        <ApplicationLogo href="/dashboard" />
                    </div>
                    <div className="flex sm:items-center sm:ms-6">
                        <div className="ms-3 relative">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <span className="inline-flex rounded-md">
                                        <button
                                            type="button"
                                            className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 dark:text-gray-400 bg-white dark:bg-gray-800 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none transition ease-in-out duration-150"
                                        >
                                          {user?.employe ? user.employe.nama_pegawai : user.customer.nama_customer}

                                            <svg
                                                className="ms-2 -me-0.5 h-4 w-4"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 20 20"
                                                fill="currentColor"
                                            >
                                                <path
                                                    fillRule="evenodd"
                                                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                    clipRule="evenodd"
                                                />
                                            </svg>
                                        </button>
                                    </span>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    <Dropdown.Link href={route("profile.edit")}>
                                        Profile
                                    </Dropdown.Link>
                                    <Dropdown.Link
                                        href={route("logout")}
                                        method="post"
                                        as="button"
                                    >
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
