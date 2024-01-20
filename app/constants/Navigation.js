import {
  FiEdit,
  FiHome,
  FiSettings,
  FiUsers,
  FiUserPlus,
  FiLogOut,
  FiFilePlus,
  FiBell,
  FiUser,
  FiFileText,
  FiCreditCard,
  FiList
} from "react-icons/fi";
import { GoBeaker, GoGraph } from "react-icons/go";
import { LuBarChart4 } from "react-icons/lu";
import { FaUserDoctor } from "react-icons/fa6";

export const menus = [
  {
    title: "Dashboard",
    menuItems: [
      {
        title: "Dashboard",
        path: "/dashboard",
        icon: <FiHome />,
      },
    ],
  },

  {
    title: "Client Facing",
    menuItems: [
      {
        title: "New Appointments",
        path: "/dashboard/new-appointments",
        icon: <FiEdit />,
        dropdown: [
          {
            title: "Option 1",
            path: "/dashboard/new-appointments/option-1",
            icon: <FiBell />,
          },
          {
            title: "Option 2",
            path: "/dashboard/new-appointments/option-2",
            icon: <FiBell />,
          },
          {
            title: "Option 3",
            path: "/dashboard/new-appointments/option-3",
            icon: <FiBell />,
          },
        ],
      },
      {
        title: "Appointments List",
        path: "/dashboard/appointments-list",
        icon: <FiList />,
      },
      {
        title: "Patients",
        path: "/dashboard/patients",
        icon: <FiUsers />,
      },
      {
        title: "Doctors",
        path: "/dashboard/doctors",
        icon: <FaUserDoctor/>,
      },
      {
        title: "Users",
        path: "/dashboard/users",
        icon: <FiUsers />,
      },
    ],
  },

  {
    title: "Reports",
    menuItems: [
      {
        title: "Generate Report",
        path: "/dashboard/appointments-list",
        icon: <FiFilePlus/>,
      },
      {
        title: "All Reports",
        path: "/dashboard/appointments-list",
        icon: <FiFileText />,
      },
      {
        title: "Billing Records",
        path: "/dashboard/Users",
        icon: <FiCreditCard />,
      },
    ],
  },
  {
    title: "Analytics",
    menuItems: [
      {
        title: "Statistics",
        path: "/dashboard/appointments-list",
        icon: <GoGraph/>,
      },
      {
        title: "Data",
        path: "/dashboard/appointments-list",
        icon: <FiFileText />,
      },
      {
        title: "Chart",
        path: "/dashboard/appointments-list",
        icon: <LuBarChart4 />,
      },
    ],
  },
  {
    title: "Master",
    menuItems: [
      {
        title: "Add Doctors",
        path: "/dashboard/appointments-list",
        icon: <FiUserPlus />,
      },
      {
        title: "Add Users",
        path: "/dashboard/appointments-list",
        icon: <FiUserPlus />,
      },
      {
        title: "Add Tests",
        path: "/dashboard/Users",
        icon: <GoBeaker />,
      },
    ],
  },

  {
    title: "Admin",
    menuItems: [
      {
        title: "Profile",
        path: "/dashboard/appointments-list",
        icon: <FiUser />,
      },
      {
        title: "Settings",
        path: "/dashboard/appointments-list",
        icon: <FiSettings />,
      },
      {
        title: "LogOut",
        path: "/dashboard/appointments-list",
        icon: <FiLogOut />,
      },
    ],
  },
];


