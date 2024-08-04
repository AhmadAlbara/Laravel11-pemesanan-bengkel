import { getVehicleColumns } from "@/Components/Elements/Columns";
import DataTable from "@/Components/Elements/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import { FaMotorcycle } from "react-icons/fa6";

import { IoMdAdd } from "react-icons/io";

const Vehicles = ({ auth, vehicles }) => {
    const COLLUMS = getVehicleColumns(vehicles);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Vehicles" />
            <div className="bg-white p-8 rounded-md overflow-hidden">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <span className="mb-10 font-semibold text-2xl flex items-center gap-2 ">
                        <FaMotorcycle />
                        All Vehicle
                    </span>
                    <Link
                        href={route("vehicles.create")}
                        className="flex px-4 py-2 mb-5 items-center gap-2 bg-violet-500 hover:bg-violet-700 rounded-md text-white"
                    >
                        <IoMdAdd />
                        <span>Add Vehicle</span>
                    </Link>
                </div>
                <DataTable columns={COLLUMS} data={vehicles} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Vehicles;
