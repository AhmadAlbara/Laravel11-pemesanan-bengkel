import GlobalFilter from "@/Components/Elements/GlobalFilter";
import React from "react";
import { useTable, usePagination, useGlobalFilter } from "react-table";

const DataTable = ({ columns, data }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, 
        canPreviousPage,
        canNextPage,
        pageOptions,
        nextPage,
        previousPage,
        setPageSize,
        state: { pageIndex, pageSize, globalFilter },
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            initialState: { pageIndex: 0 }, 
        },
        useGlobalFilter, 
        usePagination 
    );

    return (
        <div className="overflow-x-auto">
            <div className="flex gap-2 flex-col md:flex-row justify-between ">
                <select
                    value={pageSize}
                    onChange={(e) => {
                        setPageSize(Number(e.target.value));
                    }}
                    className=" border focus:border-violet-500 border-gray-300 rounded focus:outline-none focus:ring-0 max-w-xs  text-sm "
                >
                    {[10, 20, 30, 40, 50].map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                <GlobalFilter
                    filter={globalFilter}
                    setFilter={setGlobalFilter}
                />
            </div>

            <table {...getTableProps()} className="min-w-full my-5">
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th
                                    {...column.getHeaderProps()}
                                    className="px-6 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold text-violet-500 uppercase tracking-wider"
                                >
                                    {column.render("Header")}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        prepareRow(row);
                        return (
                            <tr
                                {...row.getRowProps()}
                                className="hover:bg-gray-50"
                            >
                                {row.cells.map((cell) => (
                                    <td
                                        {...cell.getCellProps()}
                                        className="px-6 py-4 border-b border-gray-200 text-sm"
                                    >
                                        {cell.render("Cell")}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* Pagination Controls */}
            <div className="pagination mt-4 flex justify-between items-center  text-sm">
                <div>
                    <button
                        onClick={() => previousPage()}
                        disabled={!canPreviousPage}
                        className="p-2 text-violet-500 font-semibold rounded disabled:opacity-50"
                    >
                        &laquo; Prev
                    </button>
                    <button
                        onClick={() => nextPage()}
                        disabled={!canNextPage}
                        className="p-2 text-violet-500 font-semibold  rounded disabled:opacity-50"
                    >
                        Next &raquo;
                    </button>
                </div>

                <span className="mx-2 text-violet-500">
                    Page{" "}
                    <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{" "}
                </span>
            </div>
        </div>
    );
};

export default DataTable;
