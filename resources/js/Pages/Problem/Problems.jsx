import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import DataTable from "../../Components/Elements/DataTable";
import { FaTasks } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { getProblemColumns } from "@/Components/Elements/Columns";

const Problems = ({ problems, auth }) => {
    const problemColumns = getProblemColumns(problems);


    const isCustomer = auth.user.customer;

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Problems" />
            <div className="bg-white p-8 rounded-md overflow-hidden">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <span className="mb-10 font-semibold text-2xl flex items-center gap-2">
                        <FaTasks />
                        Problems
                    </span>
                    {isCustomer && (
                        <Link
                            href={route("problems.create")}
                            className="flex px-4 py-2 items-center gap-2 mb-5 bg-violet-500 hover:bg-violet-700 rounded-md text-white"
                        >
                            <IoMdAdd />
                            <span>Add Problem</span>
                        </Link>
                    )}
                </div>
                <DataTable columns={problemColumns} data={problems || []} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Problems;
