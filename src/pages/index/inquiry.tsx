import React from "react";
import { FC } from "react";
import { Box, Input, useNavigate } from "zmp-ui";
import IconSearch from "../../../public/img/icon-search.png";
import { useTranslation } from "react-i18next";

export const Inquiry: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    // top 30px để chỉnh lệch so với deploy (quan trọng)
    <Box 
      className="absolute top-[30px] left-0 right-0 z-10 px-4 transform translate-y-[220%]"
    >
      <Input
        placeholder={t("Tìm nhanh đồ uống, món mới ...")}
        onFocus={() => navigate("/search")}
        prefix={
          <img
            src={IconSearch}
            alt="Search"
            style={{
              width: "30px",    
              height: "30px",
              borderRadius: "50%",  
              objectFit: "cover",
            }}
          />
        }
        style={{
          height: '48px',
        }}
      />
    </Box>
  );
};