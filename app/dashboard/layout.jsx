import Navbar from "../ui/dashboard/navbar/Navbar";
import Sidebar from "../ui/dashboard/sidebar/Sidebar";
import { ThemeProvider } from "../ui/theme/ThemeProvider";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col sm:flex-row bg-neutral-200 dark:bg-[#000]">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 p-4 bg-neutral-200 dark:bg-[#000]">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Layout;


