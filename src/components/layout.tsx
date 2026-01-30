import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";  // ← đổi sang import này (hoặc từ zmp-ui nếu nó export)
import { Box } from "zmp-ui";
import { Navigation } from "./navigation";
import HomePage from "../pages/index/index";
import CategoryPage from "../pages/category";
import CartPage from "../pages/cart/index";
import NotificationPage from "../pages/notification";
import ProfilePage from "../pages/profile";
import SearchPage from "../pages/search/index";
import SearchResultPage from "../pages/search/result";
import CheckoutResultPage from "../pages/result";
import { getSystemInfo } from "zmp-sdk";
import { ScrollRestoration } from "./scroll-restoration";
import { useHandlePayment } from "../hooks";

// Phần set safe area giữ nguyên
if (import.meta.env.DEV) {
  document.body.style.setProperty("--zaui-safe-area-inset-top", "24px");
} else if (getSystemInfo().platform === "android") {
  const statusBarHeight = window.ZaloJavaScriptInterface?.getStatusBarHeight() ?? 0;
  const androidSafeTop = Math.round(statusBarHeight / window.devicePixelRatio);
  document.body.style.setProperty("--zaui-safe-area-inset-top", `${androidSafeTop}px`);
}

const Layout: FC = () => {
  useHandlePayment();

  return (
    <Box flex flexDirection="column" className="h-screen">
      <ScrollRestoration />
      <Box className="flex-1 flex flex-col overflow-hidden">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/search/result" element={<SearchResultPage />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="/notification" element={<NotificationPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/result" element={<CheckoutResultPage />} />
        </Routes>
      </Box>
      <Navigation />
    </Box>
  );
};

export default Layout;