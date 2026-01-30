import React from "react";
import { FC } from "react";
import { Box, Text } from "zmp-ui";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoriesState, selectedCategoryIdState } from "../../state";
import { useNavigate } from "react-router";
import { useTranslation } from "react-i18next";

export const Categories: FC = () => {
  const { t } = useTranslation();
  const categories = useRecoilValue(categoriesState);
  const navigate = useNavigate();
  const setSelectedCategoryId = useSetRecoilState(selectedCategoryIdState);

  const gotoCategory = (categoryId: string) => {
    setSelectedCategoryId(categoryId);
    navigate("/category");
  };

  return (
    <Box className="bg-white grid grid-cols-4 gap-4 p-4">
      {categories.map((category, i) => (
        <div
          key={i}
          onClick={() => gotoCategory(category.id)}
          className="flex flex-col space-y-2 items-center"
        >
          <img className="rounded-[10px]" src={category.icon} />
          <Text className="text-[14px]text-black font-semibold">
            {t(category.name)}
          </Text>
        </div>
      ))}
    </Box>
  );
};
