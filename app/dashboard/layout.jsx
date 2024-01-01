import Navbar from "../ui/dashboard/navbar/Navbar"
import Sidebar from "../ui/dashboard/sidebar/Sidebar"
import { ThemeProvider } from "../ui/theme/ThemeProvider"




const Layout = ({children}) => {
  return (
    <div className="flex flex-row bg-neutral-200 dark:bg-[#000] sm:gap-1 md:gap-2">
        <div>
            <Sidebar/>
        </div>
        <div className="p-4 w-full bg-neutral-200 dark:bg-[#000]">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar/>
            {children}
          </ThemeProvider>
        </div>
    </div>
  )
}

export default Layout





