import ActionDropdown from "@/Components/Elements/ActionDropdown";
import { Link, router, usePage } from "@inertiajs/react";
import { FaEye, FaEdit, FaTrash, FaPlay, FaCheck     } from "react-icons/fa";
import Swal from "sweetalert2";

const formatRupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
        maximumFractionDigits: 2,
    }).format(number);
};

const getProductColumns = (products) => {
    const hasSupplierName = products.some(
        (product) => product.supplier && product.supplier.supplier_name
    );

    return [
        {
            Header: "Product Name",
            accessor: "product_name",
        },
        {
            Header: "Brand",
            accessor: "brand",
        },
        {
            Header: "Price",
            accessor: "price",
            Cell: ({ value }) => formatRupiah(value),
        },
        {
            Header: "Stock",
            accessor: "stock",
        },
        {
            Header: "Unit",
            accessor: "unit",
        },
        ...(hasSupplierName
            ? [
                  {
                      Header: "Supplier Name",
                      accessor: "supplier.supplier_name",
                      Cell: ({ row }) => {
                          const supplierId = row.original.supplier.id;
                          return (
                              <Link
                                  href={`/suppliers/${supplierId}`}
                                  className=" hover:text-violet-700 underline"
                              >
                                  {row.original.supplier.supplier_name}
                              </Link>
                          );
                      },
                  },
              ]
            : []),

        {
            Header: "Actions",
            Cell: ({ row }) => (
                <ActionDropdown
                    row={row}
                    actions={[
                        {
                            label: "Edit",
                            icon: FaEdit,
                            handler: (item) => {
                                router.get(`/products/${item.id}/edit`);
                            },
                        },
                        {
                            label: "Delete",
                            icon: FaTrash,
                            handler: (item) => {
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: "You won't be able to revert this!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, delete it!",
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        router.delete(`/products/${item.id}`, {
                                            onSuccess: () => {
                                                Swal.fire(
                                                    "Deleted!",
                                                    "Your product has been deleted.",
                                                    "success"
                                                );
                                            },
                                            onError: () => {
                                                Swal.fire(
                                                    "Failed!",
                                                    "There was a problem deleting your product.",
                                                    "error"
                                                );
                                            },
                                        });
                                    }
                                });
                            },
                        },
                    ]}
                />
            ),
        },
    ];
};

const getSupplierColumns = () => [
    {
        Header: "Supplier Name",
        accessor: "supplier_name",
    },
    {
        Header: "Address",
        accessor: "address",
    },
    {
        Header: "Phone Number",
        accessor: "phone_number",
    },
    {
        Header: "Actions",
        Cell: ({ row }) => (
            <ActionDropdown
                row={row}
                actions={[
                    {
                        label: "Show Details",
                        icon: FaEye,
                        handler: (item) => {
                            router.get(`/suppliers/${item.id}`);
                        },
                    },
                    {
                        label: "Edit",
                        icon: FaEdit,
                        handler: (item) => {
                            router.get(`/suppliers/${item.id}/edit`);
                        },
                    },
                    {
                        label: "Delete",
                        icon: FaTrash,
                        handler: (item) => {
                            Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    router.delete(`/suppliers/${item.id}`, {
                                        onSuccess: () => {
                                            Swal.fire(
                                                "Deleted!",
                                                "Your supplier has been deleted.",
                                                "success"
                                            );
                                        },
                                        onError: () => {
                                            Swal.fire(
                                                "Failed!",
                                                "There was a problem deleting your supplier.",
                                                "error"
                                            );
                                        },
                                    });
                                }
                            });
                        },
                    },
                ]}
            />
        ),
    },
];

const getVehicleColumns = () => [
    {
        Header: "Number Plate",
        accessor: "no_pol",
    },
    {
        Header: "Engine Number",
        accessor: "no_mesin",
    },
    {
        Header: "Brand",
        accessor: "merek",
    },
    {
        Header: "Color",
        accessor: "warna",
    },
    {
        Header: "Actions",
        Cell: ({ row }) => (
            <ActionDropdown
                row={row}
                actions={[
                    {
                        label: "Edit",
                        icon: FaEdit,
                        handler: (item) => {
                            router.get(`/vehicles/${item.no_pol}/edit`);
                        },
                    },
                    {
                        label: "Delete",
                        icon: FaTrash,
                        handler: (item) => {
                            Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    router.delete(`/vehicles/${item.no_pol}`, {
                                        onSuccess: () => {
                                            Swal.fire(
                                                "Deleted!",
                                                "Your vehicle has been deleted.",
                                                "success"
                                            );
                                        },
                                        onError: () => {
                                            Swal.fire(
                                                "Failed!",
                                                "There was a problem deleting your vehicle.",
                                                "error"
                                            );
                                        },
                                    });
                                }
                            });
                        },
                    },
                ]}
            />
        ),
    },
];

const getCustomerColumns = () => [
    {
        Header: "Customer Name",
        accessor: "nama_customer",
    },
    {
        Header: "email",
        accessor: "user.email",
    },
    {
        Header: "Address",
        accessor: "alamat",
    },

    {
        Header: "Gender",
        accessor: "jenis_kelamin",
        Cell: ({ value }) => (value === "L" ? "Male" : "Female"), // Optional formatting
    },
    {
        Header: "Status",
        accessor: "status",
        Cell: ({ value }) => (
            <span
                className={
                    value === "Active"
                        ? "bg-green-500  py-2 px-5 rounded-lg text-white font-semibold"
                        : "bg-red-500 py-2 px-4 rounded-lg text-white font-semibold"
                }
            >
                {value}
            </span>
        ),
    },
    {
        Header: "Actions",
        Cell: ({ row }) => (
            <ActionDropdown
                row={row}
                actions={[
                    {
                        label: "Edit",
                        icon: FaEdit,
                        handler: (item) => {
                            router.get(`/customers/${item.id}/edit`);
                        },
                    },
                    {
                        label: "Delete",
                        icon: FaTrash,
                        handler: (item) => {
                            Swal.fire({
                                title: "Are you sure?",
                                text: "You won't be able to revert this!",
                                icon: "warning",
                                showCancelButton: true,
                                confirmButtonColor: "#3085d6",
                                cancelButtonColor: "#d33",
                                confirmButtonText: "Yes, delete it!",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    router.delete(`/customers/${item.id}`, {
                                        onSuccess: () => {
                                            Swal.fire(
                                                "Deleted!",
                                                "The customer has been deleted.",
                                                "success"
                                            );
                                        },
                                        onError: () => {
                                            Swal.fire(
                                                "Failed!",
                                                "There was a problem deleting the customer.",
                                                "error"
                                            );
                                        },
                                    });
                                }
                            });
                        },
                    },
                ]}
            />
        ),
    },
];
const getEmployeColumns = () => {
    return [
        {
            Header: "Employee Name",
            accessor: "nama_pegawai",
        },
        {
            Header: "Email",
            accessor: "user.email",
        },
        {
            Header: "Address",
            accessor: "alamat",
        },
        {
            Header: "Gender",
            accessor: "jenis_kelamin",
            Cell: ({ value }) => (value === "L" ? "Male" : "Female"),
        },
        {
            Header: "Position",
            accessor: "jabatan",
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: ({ value }) => (
                <span
                    className={
                        value === "Active"
                            ? "bg-green-500  py-2 px-5 rounded-lg text-white font-semibold"
                            : "bg-red-500 py-2 px-4 rounded-lg text-white font-semibold"
                    }
                >
                    {value}
                </span>
            ),
        },
        {
            Header: "Actions",
            Cell: ({ row }) => (
                <ActionDropdown
                    row={row}
                    actions={[
                        {
                            label: "Edit",
                            icon: FaEdit,
                            handler: (item) => {
                                router.get(`/employes/${item.id}/edit`);
                            },
                        },
                        {
                            label: "Delete",
                            icon: FaTrash,
                            handler: (item) => {
                                Swal.fire({
                                    title: "Are you sure?",
                                    text: "You won't be able to revert this!",
                                    icon: "warning",
                                    showCancelButton: true,
                                    confirmButtonColor: "#3085d6",
                                    cancelButtonColor: "#d33",
                                    confirmButtonText: "Yes, delete it!",
                                }).then((result) => {
                                    if (result.isConfirmed) {
                                        router.delete(`/employes/${item.id}`, {
                                            onSuccess: () => {
                                                Swal.fire(
                                                    "Deleted!",
                                                    "The employee has been deleted.",
                                                    "success"
                                                );
                                            },
                                            onError: () => {
                                                Swal.fire(
                                                    "Failed!",
                                                    "There was a problem deleting the employee.",
                                                    "error"
                                                );
                                            },
                                        });
                                    }
                                });
                            },
                        },
                    ]}
                />
            ),
        },
    ];
};

const getProblemColumns = () => {
    const { auth } = usePage().props;

    return [
        {
            Header: "Problem Name",
            accessor: "nama_keluhan",
        },
        {
            Header: "Cost",
            accessor: "ongkos",
            Cell: ({ value }) => `Rp ${value?.toLocaleString() || "N/A"}`, 
        },
        {
            Header: "Status",
            accessor: "status",
            Cell: ({ value }) => {
                let colorClass = "";
                switch (value) {
                    case "Pending":
                        colorClass = "bg-yellow-500";
                        break;
                    case "On Progress":
                        colorClass = "bg-violet-500";
                        break;
                    case "Completed":
                        colorClass = "bg-green-500";
                        break;
                    default:
                        colorClass = "bg-gray-500";
                }
                return (
                    <span
                        className={`${colorClass} py-2 px-5 rounded-lg text-white font-semibold`}
                    >
                        {value}
                    </span>
                );
            },
        },
        {
            Header: "Vehicle",
            accessor: "no_pol",
        },
        {
            Header: "Actions",
            Cell: ({ row }) => {
                const problem = row.original;

               
                const isEmployee = auth.user.employe;

              
                const jobTaken = problem.status === "On Proccess";

                return (
                    <ActionDropdown
                        row={row}
                        actions={[
                            ...(isEmployee
                                ? [
                                      {
                                          label: "Take Job",
                                          icon: FaPlay,
                                          handler: (item) => {
                                              Swal.fire({
                                                  title: "Are you sure?",
                                                  text: "You want to take this job!",
                                                  icon: "warning",
                                                  showCancelButton: true,
                                                  confirmButtonColor: "#3085d6",
                                                  cancelButtonColor: "#d33",
                                                  confirmButtonText:
                                                      "Yes, take it!",
                                              }).then((result) => {
                                                  if (result.isConfirmed) {
                                                      router.post(
                                                          `/problems/${item.id}/take-job`,
                                                          {
                                                              onSuccess: () => {
                                                                  Swal.fire(
                                                                      "Taken!",
                                                                      "The job has been taken.",
                                                                      "success"
                                                                  );
                                                              },
                                                              onError: () => {
                                                                  Swal.fire(
                                                                      "Failed!",
                                                                      "There was a problem taking the job.",
                                                                      "error"
                                                                  );
                                                              },
                                                          }
                                                      );
                                                  }
                                              });
                                          },
                                      },
                                      ...(jobTaken
                                          ? [
                                                {
                                                    label: "Complete",
                                                    icon: FaCheck,
                                                    handler: (item) => {
                                                        Swal.fire({
                                                            title: "Complete Job",
                                                            text: "Update the cost before completing the job.",
                                                            input: "number",
                                                            inputLabel:
                                                                "New Cost",
                                                            inputValue:
                                                                problem.ongkos ||
                                                                0, 
                                                            inputAttributes: {
                                                                min: 0,
                                                            },
                                                            showCancelButton: true,
                                                            confirmButtonColor:
                                                                "#3085d6",
                                                            cancelButtonColor:
                                                                "#d33",
                                                            confirmButtonText:
                                                                "Complete",
                                                        }).then((result) => {
                                                            if (
                                                                result.isConfirmed
                                                            ) {
                                                                const newCost =
                                                                    result.value;
                                                                router.post(
                                                                    `/problems/${item.id}/complete/${newCost}`,
                                                                  
                                                                   
                                                                    {
                                                                        onSuccess:
                                                                            () => {
                                                                                Swal.fire(
                                                                                    "Completed!",
                                                                                    "The job has been marked as completed.",
                                                                                    "success"
                                                                                );
                                                                            },
                                                                        onError:
                                                                            () => {
                                                                                Swal.fire(
                                                                                    "Failed!",
                                                                                    "There was a problem completing the job.",
                                                                                    "error"
                                                                                );
                                                                            },
                                                                    }
                                                                );
                                                            }
                                                        });
                                                    },
                                                },
                                            ]
                                          : []),
                                  ]
                                : [
                                      {
                                          label: "Edit",
                                          icon: FaEdit,
                                          handler: (item) => {
                                              router.get(
                                                  `/problems/${item.id}/edit`
                                              );
                                          },
                                      },
                                      {
                                          label: "Delete",
                                          icon: FaTrash,
                                          handler: (item) => {
                                              Swal.fire({
                                                  title: "Are you sure?",
                                                  text: "You won't be able to revert this!",
                                                  icon: "warning",
                                                  showCancelButton: true,
                                                  confirmButtonColor: "#3085d6",
                                                  cancelButtonColor: "#d33",
                                                  confirmButtonText:
                                                      "Yes, delete it!",
                                              }).then((result) => {
                                                  if (result.isConfirmed) {
                                                      router.delete(
                                                          `/problems/${item.id}`,
                                                          {
                                                              onSuccess: () => {
                                                                  Swal.fire(
                                                                      "Deleted!",
                                                                      "The problem has been deleted.",
                                                                      "success"
                                                                  );
                                                              },
                                                              onError: () => {
                                                                  Swal.fire(
                                                                      "Failed!",
                                                                      "There was a problem deleting the problem.",
                                                                      "error"
                                                                  );
                                                              },
                                                          }
                                                      );
                                                  }
                                              });
                                          },
                                      },
                                  ]),
                        ]}
                    />
                );
            },
        },
    ];
};

export {
    getProductColumns,
    getSupplierColumns,
    getVehicleColumns,
    getCustomerColumns,
    getEmployeColumns,
    getProblemColumns,
};
