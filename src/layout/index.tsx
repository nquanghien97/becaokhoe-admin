import { Button } from "antd"
import { logout } from "../services/auth"
import { MenuSidebar } from "../config/MenuSidebar"
import { Outlet } from "react-router-dom"
import SidebarItem from "../components/SidebarItem"

function Layout() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 h-[60px] bg-[#84571B] z-[100]">
        <div className="relative top-0 h-full">
          <div className="flex items-center justify-end h-full gap-4 px-4">
            {/* <div className="px-2 py-1 rounded-md text-white">{user.name}</div> */}
            <Button className="px-4 py-4" onClick={() => logout()}>Đăng xuất</Button>
          </div>
        </div>
      </div>
      <div className="h-[calc(h-screen-180px)] w-[180px] z-[100]">
        <div className="bg-white w-[180px] opacity-85 fixed top-[60px] bottom-0 left-0 bg-no-repeat py-2">
          {MenuSidebar.map((menu) => (
            <div className="flex items-center justify-center p-2" key={menu.path}>
              <SidebarItem menu={menu} />
            </div>
          ))}
        </div>
        <div className="w-[calc(100vw-197px)] mt-[60px] ml-[180px] h-[calc(h-screen-180px)]">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout