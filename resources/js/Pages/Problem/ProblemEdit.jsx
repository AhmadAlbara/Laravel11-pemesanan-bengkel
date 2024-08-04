import React, { useEffect } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IoMdDoneAll } from "react-icons/io";
import { FaExclamationCircle } from "react-icons/fa";

const ProblemEdit = ({ auth, vehicles, problem }) => {
    const { data, setData, put, errors } = useForm({
        nama_keluhan: problem.nama_keluhan || "",
        ongkos: problem.ongkos || 0,
        status: problem.status || "Pending",
        no_pol: problem.no_pol || "",
        customers_id: auth.user.customer.id || problem.customers_id,
        // Assuming you have the problem ID
        id: problem.id || "",
    });

    useEffect(() => {
        // Initialize data with existing problem data
        setData({
            nama_keluhan: problem.nama_keluhan,
            ongkos: problem.ongkos,
            status: problem.status,
            no_pol: problem.no_pol,
            customers_id: auth.user.customer.id,
          
        });
    }, [problem]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/problems/${problem.id}`, {
            onSuccess: () => {
                Swal.fire(
                    "Success",
                    "Problem updated successfully!",
                    "success"
                );
            },
            onError: () => {
                Swal.fire("Error", "Failed to update problem.", "error");
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Problem" />
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaExclamationCircle /> Edit Problem
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
                                htmlFor="nama_keluhan"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Your Problem
                            </label>
                            <textarea
                                type="text"
                                id="nama_keluhan"
                                name="nama_keluhan"
                                value={data.nama_keluhan}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="no_pol"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Vehicle Number
                            </label>
                            <select
                                id="no_pol"
                                name="no_pol"
                                value={data.no_pol}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            >
                                <option value="">Select Vehicle</option>
                                {vehicles.map((vehicle) => (
                                    <option
                                        key={vehicle.id}
                                        value={vehicle.no_pol}
                                    >
                                        {vehicle.no_pol}
                                    </option>
                                ))}
                            </select>
                            <Link
                                href={route("vehicles.create")}
                                className="underline text-sm hover:text-base text-purple-500"
                            >
                                Don't see your vehicle here? Add now
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default ProblemEdit;
