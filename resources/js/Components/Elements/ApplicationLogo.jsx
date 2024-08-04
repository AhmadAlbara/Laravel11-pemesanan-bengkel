import { Link } from "@inertiajs/react";
import {MdSpaceDashboard} from "react-icons/md"
export default function ApplicationLogo(props) {
    return (
        <Link {...props} className="flex ms-2 md:me-24 text-violet-500">
            <MdSpaceDashboard className="h-8 me-1 text-2xl " />
            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap">
                Garage
            </span>
        </Link>
    );
}
