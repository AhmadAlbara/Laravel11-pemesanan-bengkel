import React, { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IoMdDoneAll } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";

const CustomerEdit = ({ auth, customer, user }) => {
    const { data, setData, put, errors } = useForm({
        email: user.email || "",
        password: "",
        password_confirmation: "",
        nama_customer: customer.nama_customer || "",
        alamat: customer.alamat || "",
        jenis_kelamin: customer.jenis_kelamin || "",
        status: customer.status || "",
    });

    useEffect(() => {
        setData({
            email: user.email || "",
            nama_customer: customer.nama_customer || "",
            alamat: customer.alamat || "",
            jenis_kelamin: customer.jenis_kelamin || "",
            status: customer.status || "",
        });
    }, [user, customer]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/customers/${customer.id}`, {
            onSuccess: () => {
                Swal.fire(
                    "Success",
                    "Customer updated successfully!",
                    "success"
                );
            },
            onError: () => {
                Swal.fire("Error", "Failed to update customer.", "error");
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Customer" />
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaUserEdit /> Edit Customer
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
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700"
                            >
                                New Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={data.password}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Confirm New Password
                            </label>
                            <input
                                type="password"
                                id="password_confirmation"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="nama_customer"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Customer Name
                            </label>
                            <input
                                type="text"
                                id="nama_customer"
                                name="nama_customer"
                                value={data.nama_customer}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="alamat"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Address
                            </label>
                            <input
                                type="text"
                                id="alamat"
                                name="alamat"
                                value={data.alamat}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="jenis_kelamin"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Gender
                            </label>
                            <select
                                id="jenis_kelamin"
                                name="jenis_kelamin"
                                value={data.jenis_kelamin}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            >
                                <option value="L">Male</option>
                                <option value="P">Female</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default CustomerEdit;
