import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import DataTable from "../../Components/Elements/DataTable";

import { BsBox } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { getProductColumns } from "@/Components/Elements/Columns";

const Products = ({ products, auth }) => {
           const productColumns = getProductColumns(products);
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Products" />
            <div className="bg-white p-8 rounded-md overflow-hidden">
                <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                    <span className="mb-10 font-semibold text-2xl flex items-center gap-2 ">
                        <BsBox />
                        Product's
                    </span>
                    <Link
                        href={route("products.create")}
                        className="flex px-4 py-2 items-center gap-2 mb-5 bg-violet-500 hover:bg-violet-700 rounded-md text-white"
                    >
                        <IoMdAdd />
                        <span>Add Product</span>
                    </Link>
                </div>
                <DataTable columns={productColumns} data={products} />
            </div>
        </AuthenticatedLayout>
    );
};

export default Products;
