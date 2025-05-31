import "./Navigation.scss";
import TitleNav from "../TitleNav/TitleNav";
import { createTheme, ThemeProvider } from "flowbite-react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
  Breadcrumb,
  BreadcrumbItem,
} from "flowbite-react";
import { useState } from "react";
import {
  HiOutlineTruck,
  HiOutlineChartSquareBar,
  HiOutlineClipboard,
  HiDesktopComputer,
  HiLogout,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { TiCoffee } from "react-icons/ti";

function Navigation() {
  // Change style for tab, desktop sidebar
  const customTheme = createTheme({
    sidebar: {
      root: {
        base: "h-full",
        collapsed: {
          on: "w-16",
          off: "w-64",
        },
        inner:
          "h-full overflow-y-auto overflow-x-hidden rounded-none px-3 py-4 dark:bg-[#D2B48C]",
      },
    },
  });
  // mobile theme
  const customThemeMobile = createTheme({
    breadcrumb: {
      root: {
        base: "",
        list: "flex items-center",
      },
      item: {
        base: "group flex items-center",
        chevron: "mx-1 h-4 w-4 text-[#4b2e2b] group-first:hidden md:mx-2",
        href: {
          off: "flex items-center text-[10px]  font-medium text-gray-500 dark:text-[#4b2e2b]",
          on: "flex items-center text-[10px]  font-medium text-gray-700 hover:text-gray-900 dark:text-[#4b2e2b] dark:hover:text-white",
        },
        icon: "mr-2 h-4 w-4",
      },
    },
  });

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="w-full logo-container logo">
        <button
          className="block md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        ></button>
        <TitleNav />
      </div>
      <ThemeProvider theme={customTheme}>
        <Sidebar className="h-screen hidden md:block max-w-xl  sidebar">
          <h1 className="sidebar__title">WELCOME MANAGER</h1>
          <SidebarItems>
            <SidebarItemGroup>
              <SidebarItem
                className="sidebar__item sidebar__item--hide"
                href="/pos"
                icon={HiDesktopComputer}
              >
                POS
              </SidebarItem>
              <SidebarItem
                className="sidebar__item"
                href="/products"
                icon={TiCoffee}
              >
                Products
              </SidebarItem>
              <SidebarItem
                className="sidebar__item"
                href="/ingredients"
                icon={HiOutlineClipboard}
              >
                Ingredients
              </SidebarItem>
              <SidebarItem
                className="sidebar__item"
                href="/summarytable"
                icon={HiOutlineChartSquareBar}
              >
                Summary Table
              </SidebarItem>
              <SidebarItem
                className="sidebar__item"
                href="/supplier"
                icon={HiOutlineTruck}
              >
                Order Supplies
              </SidebarItem>
              <SidebarItem
                className="sidebar__item"
                href="/theusuals"
                icon={HiOutlineUserGroup}
              >
                The Usuals
              </SidebarItem>
              <SidebarItem
                className="sidebar__item"
                href="/logout"
                icon={HiLogout}
              >
                Logout
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>
      </ThemeProvider>

      {/* mobile nav */}
      <ThemeProvider theme={customThemeMobile}>
        <Breadcrumb
          aria-label="Default breadcrumb example"
          className="bg-[#D2B48C] h-[20px] pl-2 "
        >
          <BreadcrumbItem href="/products">Products</BreadcrumbItem>
          <BreadcrumbItem href="/ingredients">Ingredients</BreadcrumbItem>
          <BreadcrumbItem href="/summarytable">Summary</BreadcrumbItem>
          <BreadcrumbItem href="/supplier">Order</BreadcrumbItem>
          <BreadcrumbItem href="/">Logout</BreadcrumbItem>
        </Breadcrumb>
      </ThemeProvider>
    </>
  );
}

export default Navigation;
