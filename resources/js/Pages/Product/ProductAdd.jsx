import React from "react";
import { Head, useForm } from "@inertiajs/react";
import Swal from "sweetalert2";
import { BsBox } from "react-icons/bs";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { IoMdDoneAll } from "react-icons/io";

const ProductAdd = ({ suppliers, auth }) => {
    const { data, setData, post, errors } = useForm({
        product_name: "",
        brand: "",
        price: "",
        stock: 1, // Nilai default untuk stok
        unit: "",
        suppliers_id: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(name, value);
    };

    const formatRupiah = (number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0, 
        }).format(number);
    };

    const parseRupiah = (value) => {
        // Menghapus simbol mata uang dan format lainnya
        return parseFloat(value.replace(/[^\d]/g, ""));
    };

    const handlePriceChange = (e) => {
        let { value } = e.target;

        // Menghapus karakter non-numerik selain titik dan koma
        value = value.replace(/[^\d,]/g, "");

        // Parsing dan mengatur nilai
        const numericValue = parseRupiah(value);
        setData("price", numericValue);
        e.target.value = formatRupiah(numericValue);
    };

    const handleStockChange = (e) => {
        let { value } = e.target;
        value = parseInt(value, 10);

        // Jika nilai kurang dari 1, set nilai menjadi 1
        if (value < 1) {
            value = 1;
        }

        setData("stock", value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/products", {
            onSuccess: () => {
                Swal.fire(
                    "Success",
                    "Product created successfully!",
                    "success"
                );
            },
            onError: () => {
                Swal.fire("Error", "Failed to create product.", "error");
            },
        });
    };

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Add New Product" />
            <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <BsBox /> Add New Product
                    </h1>
                    <button
                        onClick={handleSubmit}
                        className="flex px-4 py-2 items-center gap-2 bg-violet-500 hover:bg-violet-700 rounded-md text-white"
                    >
                        <IoMdDoneAll />
                        Save Product
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
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label
                                htmlFor="product_name"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Product Name
                            </label>
                            <input
                                type="text"
                                id="product_name"
                                name="product_name"
                                value={data.product_name}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="brand"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Brand
                            </label>
                            <input
                                type="text"
                                id="brand"
                                name="brand"
                                value={data.brand}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="price"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Price
                            </label>
                            <input
                                type="text"
                                id="price"
                                name="price"
                                value={formatRupiah(data.price || 0)}
                                onChange={handlePriceChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="stock"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Stock
                            </label>
                            <input
                                type="number"
                                id="stock"
                                name="stock"
                                value={data.stock}
                                onChange={handleStockChange}
                                min={1}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="unit"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Unit
                            </label>
                            <input
                                type="text"
                                id="unit"
                                name="unit"
                                value={data.unit}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="suppliers_id"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Supplier
                            </label>
                            <select
                                id="suppliers_id"
                                name="suppliers_id"
                                value={data.suppliers_id}
                                onChange={handleChange}
                                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-violet-500 focus:border-violet-500 sm:text-sm"
                                required
                            >
                                <option value="">Select a supplier</option>
                                {suppliers.map((supplier) => (
                                    <option
                                        key={supplier.id}
                                        value={supplier.id}
                                    >
                                        {supplier.supplier_name}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </AuthenticatedLayout>
    );
};

export default ProductAdd;
