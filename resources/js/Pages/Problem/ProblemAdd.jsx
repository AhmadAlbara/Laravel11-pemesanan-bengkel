import React, { useEffect, useState } from "react";
import { Head, Link, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IoMdDoneAll } from "react-icons/io";
import { FaExclamationCircle } from "react-icons/fa";

const ProblemAdd = ({ auth, vehicles }) => {
    const { data, setData, post, errors } = useForm({
        nama_keluhan: "",
        ongkos: 0,
        status: "Pending",
        no_pol: "",
        customers_id: auth.user.customer.id
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/problems", {
            onSuccess: () => {
                Swal.fire("Success", "Problem added successfully!", "success");
            },
            onError: () => {
                Swal.fire("Error", "Failed to add problem.", "error");
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add New Problem" />
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaExclamationCircle /> Add New Problem
                    </h1>
                    <button
                        onClick={handleSubmit}
                        className="flex px-4 py-2 items-center gap-2 bg-violet-500 hover:bg-violet-700 rounded-md text-white"
                    >
                        <IoMdDoneAll />
                        Save Problem
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
                                className="underline text-sm hover:text-base text-violet-500"
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

export default ProblemAdd;
