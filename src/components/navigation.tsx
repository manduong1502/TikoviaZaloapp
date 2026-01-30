'use client';

import { useVirtualKeyboardVisible } from "../hooks";
import React, { FC, useMemo } from "react";
import { useLocation, useNavigate } from "react-router";
import { MenuItem } from "../types/menu";
import { Icon } from "zmp-ui";
import { CartIcon } from "./cart-icon";

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
      {/* Nút tròn đỏ - Đã chỉnh lại vị trí để lọt giữa hốc */}
      <div className="absolute left-1/2 -translate-x-1/2 -top-2 z-10">
        <button
          onClick={handleAddClick}
          className="w-14 h-14 bg-red-500 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-transform"
          style={{
            boxShadow: "0 8px 20px rgba(239, 68, 68, 0.4)",
          }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5V19M5 12H19"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Background SVG - Đã nới RỘNG và làm SÂU đường cong */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        height="90"
        viewBox="0 0 375 90"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Lớp nền trắng */}
        <path
          d="M0 20 
             H125 
             C145 20 150 20 155 30 
             C165 45 168 65 187.5 50 
             C207 65 210 45 220 30 
             C225 20 230 20 250 20 
             H375 
             V90 
             H0 
             Z"
          fill="white"
        />
        {/* Đường viền mỏng phía trên để tạo khối (tùy chọn) */}
        <path
          d="M0 20 H125 C145 20 150 20 155 30 C165 45 168 65 187.5 65 C207 65 210 45 220 30 C225 20 230 20 250 20 H375"
          stroke="#F3F4F6"
          strokeWidth="1"
        />
      </svg>

      {/* Navigation items content */}
      <div 
        className="relative flex items-end justify-around px-2 pb-4 bg-transparent" 
        style={{ height: "85px" }}
      >
        {/* 2 tabs bên trái */}
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

        {/* Khoảng trống cho nút giữa - Đã nới rộng để không chạm vào đường cong */}
        <div className="flex-1" style={{ minWidth: "100px" }} />

        {/* 2 tabs bên phải */}
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