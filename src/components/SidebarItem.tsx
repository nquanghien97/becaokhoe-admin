import { Button } from "antd";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MenuSidebarType } from "../config/MenuSidebar";
import ArrowUp from "../assets/icons/ArrowUp";

interface SidebarItemProps {
  menu: MenuSidebarType
}

function SidebarItem(props: SidebarItemProps) {
  const location = useLocation();

  const [showChildren, setShowChildren] = useState(false);

  const { menu } = props;
  const activePath = location.pathname === menu.path ? 'primary' : 'default'
  return (
    <div className="w-[140px] ">
      <Link to={menu.path}>
        <Button
          color={activePath}
          className="!text-white py-6 text-sm drop-shadow-[1px_2px_rgba(0,0,0,0.4)] w-full bg-[#84571B] hover:!bg-[#c58229] duration-300 mb-2"
          onClick={() => setShowChildren(pre => !pre)}
        >
          {menu.title}
          {menu.children && (
            <div>
              {showChildren ? <ArrowUp className="rotate-180 duration-300" width={20} height={20} /> : <ArrowUp width={20} height={20} className="duration-300" />}
            </div>
          )}
        </Button>
      </Link>
      {
        showChildren && (
          <div className="flex flex-col pl-2 w-full">
            {menu.children && (
              menu.children.map((childMenu) => (
                <SidebarItem key={childMenu.path} menu={childMenu} />
              ))
            )}
          </div>)
      }
    </div>
  )
}

export default SidebarItem;