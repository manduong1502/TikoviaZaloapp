import { FinalPrice } from "../../components/display/final-price";
import React, { FC } from "react";
import { Product } from "../../types/product";
import { Box, Text } from "zmp-ui";
import { ProductPicker } from "./picker";

export const ProductItem: FC<{ product: Product }> = ({ product }) => {
  return (
    <ProductPicker product={product}>
      {({ open }) => (
        <div className="space-y-2 p-2 shadow-lg rounded-[10px] bg-white" onClick={open}>
          <Box className="w-full aspect-square relative">
            <img
              loading="lazy"
              src={product.image}
              className="absolute left-0 right-0 top-0 bottom-0 w-full h-full object-cover object-center rounded-lg bg-skeleton"
            />
          </Box>
          <Text className="line-clamp-2 text-[14px] leading-tight font-medium">{product.name}</Text>
          <Text size="xSmall" className="text-gray font-bold">
            <FinalPrice>{product}</FinalPrice>
          </Text>
        </div>
      )}
    </ProductPicker>
  );
};
