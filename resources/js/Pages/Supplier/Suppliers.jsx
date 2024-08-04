import { getSupplierColumns } from '@/Components/Elements/Columns';
import DataTable from '@/Components/Elements/DataTable';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link } from '@inertiajs/react';
import React from 'react'

import { FaPeopleCarryBox } from "react-icons/fa6";
import { IoMdAdd } from 'react-icons/io';


const Suppliers = ({ auth, supplier }) => {
     const supplierColumns = getSupplierColumns(supplier);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Suppliers" />
            <div className="bg-white p-8 rounded-md overflow-hidden">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <span className="mb-10 font-semibold text-2xl flex items-center gap-2 ">
                        <FaPeopleCarryBox />
                        Supplier's
                    </span>
                    <Link
                        href={route("suppliers.create")}
                        className="flex px-4 py-2 items-center gap-2 mb-5 bg-violet-500 hover:bg-violet-700 rounded-md text-white"
                    >
                        <IoMdAdd />
                        <span>Add Supplier</span>
                    </Link>
                </div>
                <DataTable columns={supplierColumns} data={supplier} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Suppliers