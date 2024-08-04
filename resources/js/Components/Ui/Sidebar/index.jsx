import React from "react";
import { usePage } from "@inertiajs/react";
import LinkItem from "./LinkItem";
import { FaChartBar, FaUsersCog } from "react-icons/fa";
import { MdSyncProblem } from "react-icons/md";
import { FaMotorcycle } from "react-icons/fa6";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { BsBox } from "react-icons/bs";
const Sidebar = ({ isSidebarOpen }) => {
    const { auth } = usePage().props;

    // Function to filter links based on user role
    const getLinksForRole = (role) => {
        switch (role) {
            case "employe":
                return [
                    {
                        href: "/dashboard",
                        icon: FaChartBar,
                        text: "Dashboard",
                    },
                    {
                        href: "/problems",
                        icon: MdSyncProblem,
                        text: "Vehicle Problems",
                    },
                    {
                        href: "/products",
                        icon: BsBox,
                        text: "Product's",
                    },
                    {
                        href: "/suppliers",
                        icon: FaPeopleCarryBox,
                        text: "Supplier's",
                    },
                    {
                        href: "/vehicles",
                        icon: FaMotorcycle,
                        text: "All Vehicle",
                    },
                    {
                        href: "/customers",
                        icon: FaUsersCog,
                        text: "Customer's",
                    },
                    {
                        href: "/employes",
                        icon: FaUsersCog,
                        text: "Employe's",
                    },
                ];
            case "customer":
                return [
                    {
                        href: "/dashboard",
                        icon: FaChartBar,
                        text: "Dashboard",
                    },
                    {
                        href: "/problems",
                        icon: MdSyncProblem,
                        text: "Vehicle Problems",
                    },
                    {
                        href: "/vehicles",
                        icon: FaMotorcycle,
                        text: "All Vehicle",
                    },
                    // Additional links for employees can be added here
                ];
            default:
                return [
                    {
                        href: "/dashboard",
                        icon: FaChartBar,
                        text: "Dashboard",
                    },
                    {
                        href: "/problems",
                        icon: MdSyncProblem,
                        text: "Vehicle Problems",
                    },
                    {
                        href: "/products",
                        icon: BsBox,
                        text: "Product's",
                    },
                    {
                        href: "/suppliers",
                        icon: FaPeopleCarryBox,
                        text: "Supplier's",
                    },
                    {
                        href: "/vehicles",
                        icon: FaMotorcycle,
                        text: "All Vehicle",
                    },
                    {
                        href: "/customers",
                        icon: FaUsersCog,
                        text: "Customer's",
                    },
                    {
                        href: "/employes",
                        icon: FaUsersCog,
                        text: "Employe's",
                    },
                ];
        }
    };

    const userRole = auth.user.customer
        ? "customer"
        : auth.user.employe
        ? "employe"
        : "guest";
    const linksForRole = getLinksForRole(userRole);

    return (
        <aside
            className={`fixed top-0 left-0 z-10 w-64 h-screen pt-20 bg-white border-r border-gray-200 sm:translate-x-0 transition-transform ${
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="h-full px-3 pb-4 overflow-y-auto">
                <ul className="space-y-2 font-medium">
                    {linksForRole.map((link, index) => (
                        <LinkItem key={index} {...link} />
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
