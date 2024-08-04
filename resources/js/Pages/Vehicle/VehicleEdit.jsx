import React from "react";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import { BsFillCarFrontFill } from "react-icons/bs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IoMdDoneAll } from "react-icons/io";
import { FaMotorcycle } from "react-icons/fa6";

const VehicleEdit = ({ auth, vehicle }) => {
    const { data, setData, put, errors } = useForm({
        no_pol: vehicle.no_pol,
        no_mesin: vehicle.no_mesin,
        merek: vehicle.merek,
        warna: vehicle.warna,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        put(`/vehicles/${vehicle.no_pol}`, {
            onSuccess: () => {
                Swal.fire(
                    "Success",
                    "Vehicle updated successfully!",
                    "success"
                );
            },
            onError: () => {
                Swal.fire("Error", "Failed to update vehicle.", "error");
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Edit Vehicle" />
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <FaMotorcycle /> Edit Vehicle
                    </h1>
                    <button
                        onClick={handleSubmit}
                        className="flex px-4 py-2 items-center gap-2 bg-violet-500 hover:bg-violet-700 rounded-md text-white"
                    >
                        <IoMdDoneAll />
                        Update Vehicle
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
                                htmlFor="no_pol"
                                className="block text-sm font-medium text-gray-700"
                            >
                                No Pol
                            </label>
                            <input
                                type="text"
                                id="no_pol"
                                name="no_pol"
                                value={data.no_pol}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="no_mesin"
                                className="block text-sm font-medium text-gray-700"
                            >
                                No Mesin
                            </label>
                            <input
                                type="text"
                                id="no_mesin"
                                name="no_mesin"
                                value={data.no_mesin}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="merek"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Merek
                            </label>
                            <select
                                id="merek"
                                name="merek"
                                value={data.merek}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            >
                                <option value="">Select Merek</option>
                                <option value="Honda">Honda</option>
                                <option value="Yamaha">Yamaha</option>
                                <option value="Suzuki">Suzuki</option>
                                <option value="Kawasaki">Kawasaki</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div>
                            <label
                                htmlFor="warna"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Warna
                            </label>
                            <select
                                id="warna"
                                name="warna"
                                value={data.warna}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            >
                                <option value="">Select Warna</option>
                                <option value="White">White</option>
                                <option value="Black">Black</option>
                                <option value="Green">Green</option>
                                <option value="Blue">Blue</option>
                                <option value="Red">Red</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default VehicleEdit;
