import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import DataTable from "../../Components/Elements/DataTable";
import { BsPeople } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { getCustomerColumns } from "@/Components/Elements/Columns";

const Customers = ({ customers, auth }) => {
    const customerColumns = getCustomerColumns(customers);
   

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Customers" />
            <div className="bg-white p-8 rounded-md overflow-hidden">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <span className="mb-10 font-semibold text-2xl flex items-center gap-2 ">
                        <BsPeople />
                        Customers
                    </span>
                    <Link
                        href={route("customers.create")}
                        className="flex px-4 py-2 items-center gap-2 mb-5 bg-violet-500 hover:bg-violet-700 rounded-md text-white"
                    >
                        <IoMdAdd />
                        <span>Add Customer</span>
                    </Link>
                </div>
                <DataTable columns={customerColumns} data={customers} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Customers;
