import React, { useCallback } from "react";
import { FC } from "react";
import { useRecoilState } from "recoil";
import { keywordState } from "../../state";
import { Box, Input } from "zmp-ui";
import { debounce } from "lodash";
import { useTranslation } from "react-i18next";
import IconSearch from "../../../public/img/icon-search.png";

export const Inquiry: FC = () => {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const { t } = useTranslation();

  const handleChange = useCallback(
    debounce((keyword: string) => {
      setKeyword(keyword);
    }, 500),
    [],
  );

  return (
    <Box className="bg-white transition-all ease-out flex-none px-[16px] mb-[8px] z-10">
      <Input
        ref={(el) => {
          if (!el?.input?.value) {
            el?.focus();
          }
        }}
        defaultValue={keyword}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={t("Tìm nhanh đồ uống, món mới ...")}
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
      />
    </Box>
  );
};
