import "./Navigation.scss";
import TitleNav from "../TitleNav/TitleNav";
import { createTheme, ThemeProvider } from "flowbite-react";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import { useState } from "react";
import {
  HiViewList,
  HiOutlineTruck,
  HiOutlineChartSquareBar,
  HiOutlineClipboard,
  HiDesktopComputer,
} from "react-icons/hi";
import { TiCoffee } from "react-icons/ti";

function Navigation() {
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

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="w-full logo-container logo">
        <button
          className="block md:hidden"
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          <HiViewList />
        </button>
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
                icon={HiOutlineTruck}
              >
                The Usuals
              </SidebarItem>
              <SidebarItem
                className="sidebar__item"
                href="/logout"
                icon={HiOutlineTruck}
              >
                Logout
              </SidebarItem>
            </SidebarItemGroup>
          </SidebarItems>
        </Sidebar>

        {/* mobile hamburger menu */}
        {isSidebarOpen && (
          <Sidebar className="h-screen block md:hidden max-w-2/4">
            <h1 className="sidebar__title">WELCOME MANAGER</h1>
            <SidebarItems>
              <SidebarItemGroup>
                <SidebarItem className="sidebar__item" href="#" icon={TiCoffee}>
                  Products
                </SidebarItem>
                <SidebarItem
                  className="sidebar__item"
                  href="#"
                  icon={HiOutlineClipboard}
                >
                  Ingredients
                </SidebarItem>
                <SidebarItem
                  className="sidebar__item"
                  href="#"
                  icon={HiOutlineChartSquareBar}
                >
                  Summary
                </SidebarItem>
                <SidebarItem
                  className="sidebar__item"
                  href="#"
                  icon={HiOutlineTruck}
                >
                  Order Supplies
                </SidebarItem>
              </SidebarItemGroup>
            </SidebarItems>
          </Sidebar>
        )}
      </ThemeProvider>
    </>
  );
}

export default Navigation;
