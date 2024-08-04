import React from "react";
import { Head } from "@inertiajs/react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

ChartJS.register(ArcElement, Title, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const Dashboard = ({ auth, customerProblems, employeeProblemsCount }) => {
    const user = auth.user;
    const displayName = user.customer
        ? user.customer.nama_customer
        : user.employe?.nama_pegawai || "User";

    // Handle Pie Chart Data for Customer
    const problemStatuses = customerProblems ? customerProblems.reduce((acc, problem) => {
        acc[problem.status] = (acc[problem.status] || 0) + 1;
        return acc;
    }, {}) : {};

    const pieData = {
        labels: Object.keys(problemStatuses),
        datasets: [
            {
                data: Object.values(problemStatuses),
                backgroundColor: ["#ffcc00", "#ff6384", "#4bc0c0"],
            },
        ],
    };

    // Handle Bar Chart Data for Employee
    const problemsTakenData = {
        labels: ["Taken Problems"],
        datasets: [
            {
                label: "Problems",
                data: [employeeProblemsCount],
                backgroundColor: ["#4bc0c0"],
            },
        ],
    };

    // Calendar for the current month
    const currentMonthCalendar = [
        [0, 0, 0, 1, 2, 3, 4],
        [5, 6, 7, 8, 9, 10, 11],
        [12, 13, 14, 15, 16, 17, 18],
        [19, 20, 21, 22, 23, 24, 25],
        [26, 27, 28, 29, 30, 31, 0],
    ];

    return (
        <AuthenticatedLayout user={user}>
            <Head title="Dashboard" />
            <div className="p-8 bg-gray-100 min-h-screen">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h1 className="text-2xl font-bold mb-4">
                        Welcome Back, {displayName}
                    </h1>
                    {user.customer && (
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
                            <div className="bg-white p-2 shadow-lg rounded-lg">
                                <h2 className="text-xl font-semibold mb-4">
                                    My Problems
                                </h2>
                                {Object.keys(problemStatuses).length > 0 ? (
                                    <Pie
                                        data={pieData}
                                        options={{
                                            responsive: true,
                                            plugins: {
                                                legend: {
                                                    position: "top",
                                                },
                                            },
                                        }}
                                    />
                                ) : (
                                    <p>No problem data available</p>
                                )}
                            </div>
                            <div className="bg-white p-6 shadow-lg rounded-lg">
                                <h2 className="text-xl font-semibold mb-4">
                                    Calendar
                                </h2>
                                <table className="w-full text-center">
                                    <thead>
                                        <tr>
                                            <th>Sun</th>
                                            <th>Mon</th>
                                            <th>Tue</th>
                                            <th>Wed</th>
                                            <th>Thu</th>
                                            <th>Fri</th>
                                            <th>Sat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentMonthCalendar.map(
                                            (week, index) => (
                                                <tr key={index}>
                                                    {week.map(
                                                        (day, dayIndex) => (
                                                            <td
                                                                key={dayIndex}
                                                                className={
                                                                    day === 0
                                                                        ? "text-gray-400"
                                                                        : ""
                                                                }
                                                            >
                                                                {day === 0
                                                                    ? ""
                                                                    : day}
                                                            </td>
                                                        )
                                                    )}
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    {user.employe && (
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-white p-6 shadow-lg rounded-lg">
                                <h2 className="text-xl font-semibold mb-2">
                                    Your Assigned Problems
                                </h2>
                                {employeeProblemsCount > 0 ? (
                                    <Bar
                                        data={problemsTakenData}
                                        options={{
                                            responsive: true,
                                            plugins: {
                                                legend: {
                                                    position: "top",
                                                },
                                                tooltip: {
                                                    callbacks: {
                                                        label: function (
                                                            context
                                                        ) {
                                                            return `${context.dataset.label}: ${context.raw}`;
                                                        },
                                                    },
                                                },
                                            },
                                        }}
                                    />
                                ) : (
                                    <p>No assigned problems</p>
                                )}
                            </div>
                            <div className="bg-white p-6 shadow-lg rounded-lg">
                                <h2 className="text-xl font-semibold mb-4">
                                    Calendar
                                </h2>
                                <table className="w-full text-center">
                                    <thead>
                                        <tr>
                                            <th>Sun</th>
                                            <th>Mon</th>
                                            <th>Tue</th>
                                            <th>Wed</th>
                                            <th>Thu</th>
                                            <th>Fri</th>
                                            <th>Sat</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {currentMonthCalendar.map(
                                            (week, index) => (
                                                <tr key={index}>
                                                    {week.map(
                                                        (day, dayIndex) => (
                                                            <td
                                                                key={dayIndex}
                                                                className={
                                                                    day === 0
                                                                        ? "text-gray-400"
                                                                        : ""
                                                                }
                                                            >
                                                                {day === 0
                                                                    ? ""
                                                                    : day}
                                                            </td>
                                                        )
                                                    )}
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </AuthenticatedLayout>
    );
};

export default Dashboard;
