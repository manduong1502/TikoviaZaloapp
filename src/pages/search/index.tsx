import React, { FC } from "react";
import { Header, Page } from "zmp-ui";
import { Inquiry } from "./inquiry";
import { SearchResult } from "./result";
import { useTranslation } from "react-i18next";

const SearchPage: FC = () => {
  const { t } = useTranslation();
  return (
    <Page className="flex flex-col">
      <Header title={t("Tìm kiếm")} />
      <Inquiry />
      <SearchResult />
    </Page>
  );
};

export default SearchPage;
