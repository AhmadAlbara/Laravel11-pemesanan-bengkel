
import {
    FaChartBar,
    FaUsersCog,

} from "react-icons/fa";
import { MdSyncProblem } from "react-icons/md";
import { FaMotorcycle } from "react-icons/fa6";
import { FaPeopleCarryBox } from "react-icons/fa6";
import { BsBox } from "react-icons/bs";
export const links = [
    {
        href: "/dashboard",
        icon: FaChartBar,
        text: "Dashboard",
    },
    {
        href: "/problems",
        icon: MdSyncProblem ,
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

