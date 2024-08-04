import Footer from "@/Components/Ui/Footer";
import Navbar from "@/Components/Ui/Navbar";
import Sidebar from "@/Components/Ui/Sidebar";


export default function AuthenticatedLayout({ user, children }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="">
            <Navbar user={user} toggleSidebar={toggleSidebar} />
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <main className="text-primary-light bg-primary-dark p-4 sm:ml-64 mt-14 min-h-screen">
                {children}
                <Footer />
            </main>
        </div>
    );
}
