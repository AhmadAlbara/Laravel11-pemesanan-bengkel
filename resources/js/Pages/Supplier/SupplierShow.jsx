import { getProductColumns } from "@/Components/Elements/Columns";
import DataTable from "@/Components/Elements/DataTable";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import { BsBox } from "react-icons/bs";
import { FaPeopleCarryBox } from "react-icons/fa6";


const SupplierShow = ({ auth, supplier }) => {
        const productColumns = getProductColumns(supplier.products);
    console.log(supplier.products);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Suppliers | Details" />

            <div className="bg-white p-8 rounded-md shadow-lg">
                <div className="mb-5">
                    <Link
                        href={route("suppliers.index")}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        &laquo; Back
                    </Link>
                </div>

                <div className="mb-10">
                    <h1 className="text-2xl font-semibold flex items-center gap-2 mb-4 text-center ">
                        <FaPeopleCarryBox />
                        {supplier.id}
                    </h1>
                    <div className="text-gray-700">
                        <p className="mb-2">
                            <strong>Name:</strong> {supplier.supplier_name}
                        </p>
                        <p className="mb-2">
                            <strong>Address:</strong> {supplier.address}
                        </p>
                        <p className="mb-2">
                            <strong>Phone Number:</strong>{" "}
                            {supplier.phone_number}
                        </p>
                    </div>
                </div>

                <div className="mt-6">
                    <span className="mb-10 font-semibold text-2xl flex items-center gap-2 ">
                        <BsBox />
                        Product's
                    </span>

                    <DataTable
                        columns={productColumns}
                        data={supplier.products}
                    />
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default SupplierShow;
