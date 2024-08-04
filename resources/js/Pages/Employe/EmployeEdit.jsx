import React, { useEffect } from "react";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IoMdDoneAll } from "react-icons/io";
import { FaUserEdit } from "react-icons/fa";

const EmployeEdit = ({ auth, employe, user }) => {
    const { data, setData, put, errors } = useForm({
        email: user.email || "",
        password: "",
        password_confirmation: "",
        nama_pegawai: employe.nama_pegawai || "",
        alamat: employe.alamat || "",
        jenis_kelamin: employe.jenis_kelamin || "",
        jabatan: employe.jabatan || "", // Added jabatan
        status: employe.status || "",
    });

    useEffect(() => {
        setData({
            email: user.email || "",
            nama_pegawai: employe.nama_pegawai || "",
            alamat: employe.alamat || "",
            jenis_kelamin: employe.jenis_kelamin || "",
            jabatan: employe.jabatan || "", // Added jabatan
            status: employe.status || "",
        });
    }, [user, employe]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/employes/${employe.id}`, {
            onSuccess: () => {
                Swal.fire(
                    "Success",
                    "Employee updated successfully!",
                    "success"
                );
            },
            onError: () => {
                Swal.fire("Error", "Failed to update employee.", "error");
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Employee" />
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaUserEdit /> Edit Employee
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
                                htmlFor="nama_pegawai"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Employee Name
                            </label>
                            <input
                                type="text"
                                id="nama_pegawai"
                                name="nama_pegawai"
                                value={data.nama_pegawai}
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

                        <div>
                            <label
                                htmlFor="jabatan"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Position
                            </label>
                            <select
                                id="jabatan"
                                name="jabatan"
                                value={data.jabatan}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            >
                                <option value="Engginer">Engginer</option>
                                <option value="SPV">SPV</option>
                                <option value="Admin">Admin</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="status"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Status
                            </label>
                            <select
                                id="status"
                                name="status"
                                value={data.status}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default EmployeEdit;
