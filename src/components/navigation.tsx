'use client';

import { useVirtualKeyboardVisible } from "../hooks";
import React, { FC, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { MenuItem } from "../types/menu";
import { Icon } from "zmp-ui";
import { CartIcon } from "./cart-icon";
import { ActionButton } from "./action-button";

const tabs: Record<string, MenuItem> = {
  "/": {
    label: "Trang chủ",
    icon: <Icon icon="zi-home" />,
  },
  "/notification": {
    label: "Thông báo",
    icon: <Icon icon="zi-notif" />,
  },
  "/cart": {
    label: "Giỏ hàng",
    icon: <CartIcon />,
    activeIcon: <CartIcon active />,
  },
  "/profile": {
    label: "Cá nhân",
    icon: <Icon icon="zi-user" />,
  },
};

export type TabKeys = keyof typeof tabs;

export const NO_BOTTOM_NAVIGATION_PAGES = ["/search", "/category", "/result"];

export const Navigation: FC = () => {
  const keyboardVisible = useVirtualKeyboardVisible();
  const navigate = useNavigate();
  const location = useLocation();

  const noBottomNav = useMemo(() => {
    return NO_BOTTOM_NAVIGATION_PAGES.includes(location.pathname);
  }, [location]);

  if (noBottomNav || keyboardVisible) {
    return <></>;
  }

  const tabEntries = Object.entries(tabs);
  const leftTabs = tabEntries.slice(0, 2);
  const rightTabs = tabEntries.slice(2, 4);

  const handleAddClick = () => {
    console.log("Add button clicked");
  };

  return (
    <div id="footer" className="fixed bottom-0 left-0 right-0 z-50">
      <div className="absolute left-1/2 -translate-x-1/2 -top-1 z-10">
        <ActionButton onClick={handleAddClick} />
      </div>

      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        height="90"
        viewBox="0 0 375 90"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 20 
       H125 
       C145 20 150 25 155 35 
       C165 50 170 65 187.5 60 
       C205 65 210 50 220 35 
       C225 25 230 20 250 20 
       H375 
       V90 
       H0 
       Z"
          fill="white"
        />
        <path
          d="M0 20 H125 C145 20 150 25 155 35 C165 50 170 60 187.5 60 C205 60 210 50 220 35 C225 25 230 20 250 20 H375"
          stroke="#b4b2b2"
          strokeWidth="1"
        />
      </svg>

      <div
        className="relative flex items-end justify-around px-2 pb-2 bg-transparent"
        style={{ height: "85px" }}
      >
        {leftTabs.map(([path, item]) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex flex-col items-center justify-center flex-1 py-1"
            >
              <div className={`text-2xl ${isActive ? "text-red-500" : "text-gray-400"}`}>
                {isActive && item.activeIcon ? item.activeIcon : item.icon}
              </div>
              <span className={`text-[10px] mt-1 ${isActive ? "text-red-500 font-medium" : "text-gray-400"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
        <div className="flex-1" style={{ minWidth: "100px" }} />
        {rightTabs.map(([path, item]) => {
          const isActive = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className="flex flex-col items-center justify-center flex-1 py-1"
            >
              <div className={`text-2xl ${isActive ? "text-red-500" : "text-gray-400"}`}>
                {isActive && item.activeIcon ? item.activeIcon : item.icon}
              </div>
              <span className={`text-[10px] mt-1 ${isActive ? "text-red-500 font-medium" : "text-gray-400"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};