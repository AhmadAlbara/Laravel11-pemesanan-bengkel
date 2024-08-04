import React, { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import { BsPeople } from "react-icons/bs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IoMdDoneAll } from "react-icons/io";

const SupplierEdit = ({ supplier, auth }) => {
    // Initialize form data with existing supplier data
    const { data, setData, put, errors } = useForm({
        supplier_name: supplier.supplier_name || "",
        address: supplier.address || "",
        phone_number: supplier.phone_number || "",
    });

    // Handle changes in input fields
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/suppliers/${supplier.id}`, {
            onSuccess: () => {
                Swal.fire(
                    "Success",
                    "Supplier updated successfully!",
                    "success"
                );
            },
            onError: () => {
                Swal.fire("Error", "Failed to update supplier.", "error");
            },
        });
    };

    // Set form data when supplier prop changes (useful for re-rendering)
    useEffect(() => {
        setData({
            supplier_name: supplier.supplier_name,
            address: supplier.address,
            phone_number: supplier.phone_number,
        });
    }, [supplier]);

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Supplier" />
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <BsPeople /> Edit Supplier
                    </h1>
                    <button
                        onClick={handleSubmit}
                        className="flex px-4 py-2 items-center gap-2 bg-violet-500 hover:bg-violet-700 rounded-md text-white"
                    >
                        <IoMdDoneAll />
                        Save Changes
                    </button>
                </div>
                {Object.keys(errors).length > 0 && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        <ul>
                            {Object.keys(errors).map((key) => (
                                <li key={key}>{errors[key]}</li>
                            ))}
                        </ul>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label
                                htmlFor="supplier_name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Supplier Name
                            </label>
                            <input
                                type="text"
                                id="supplier_name"
                                name="supplier_name"
                                value={data.supplier_name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="address"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                value={data.address}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="phone_number"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <input
                                type="text"
                                id="phone_number"
                                name="phone_number"
                                value={data.phone_number}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default SupplierEdit;
