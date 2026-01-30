import { FinalPrice } from "../../components/display/final-price";
import { ProductPicker } from "../../components/product/picker";
import { ProductSearchResultSkeleton } from "../../components/skeletons";
import React, { FC, Suspense } from "react";
import { useRecoilValue } from "recoil";
import { resultState } from "../../state";
import { Box, Text } from "zmp-ui";

const SearchResultContent: FC = () => {
  const result = useRecoilValue(resultState);
  return (
    <Box flex flexDirection="column" className="bg-background flex-1 min-h-0">
      <Text.Title className="px-4 py-3 pt-0" size="small">
        Kết quả ({result.length})
      </Text.Title>
      {result.length > 0 ? (
        <Box className="p-4 pt-0 grid grid-cols-2 gap-4 flex-1 overflow-y-auto">
          {result.map((product) => (
            <ProductPicker key={product.id} product={product}>
              {({ open }) => (
                <div onClick={open} className="flex flex-col space-y-2 p-2 shadow-lg rounded-[10px] bg-white">
                  <img
                    className="w-full aspect-square h-[155px] object-cover rounded-lg"
                    src={product.image}
                  />
                  <Box className="space-y-1">
                    <Text className="line-clamp-2 text-[14px] leading-tight font-medium">
                      {product.name}
                    </Text>
                    <Text size="xSmall" className="text-gray font-bold">
                      <FinalPrice>{product}</FinalPrice>
                    </Text>
                  </Box>
                </div>
              )}
            </ProductPicker>
          ))}
        </Box>
      ) : (
        <Box className="flex-1 flex justify-center items-center pb-24">
          <Text size="xSmall" className="text-gray">
            Không tìm thấy kết quả. Vui lòng thử lại
          </Text>
        </Box>
      )}
    </Box>
  );
};

const SearchResultFallback: FC = () => {
  const result = [...new Array(5)];
  return (
    <Box flex flexDirection="column" className="bg-background flex-1 min-h-0">
      <Text.Title className="p-4 pt-0" size="small">
        Đang tìm kiếm...
      </Text.Title>
      <Box className="p-4 pt-0 space-y-4 flex-1 overflow-y-auto">
        {result.map((_, i) => (
          <ProductSearchResultSkeleton key={i} />
        ))}
      </Box>
    </Box>
  );
};

export const SearchResult: FC = () => {
  return (
    <Suspense fallback={<SearchResultFallback />}>
      <SearchResultContent />
    </Suspense>
  );
};

export default SearchResult;