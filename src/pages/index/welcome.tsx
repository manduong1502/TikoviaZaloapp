import React, { FC, useState } from "react";
import { Box, Header, Text, Icon } from "zmp-ui";
import logo from "../../static/logo.png";
import appConfig from "../../../app-config.json";
import { getConfig } from "../../utils/config";
import { useTranslation } from "react-i18next";
import ReactCountryFlag from "react-country-flag";
import { Inquiry } from "./inquiry";

export const Welcome: FC = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Cập nhật mảng ngôn ngữ với countryCode cho thư viện
  const languages = [
    { text: "Tiếng Việt", value: "vi", countryCode: "VN" },
    { text: "English", value: "en", countryCode: "US" },
  ];

  const currentLang = languages.find((l) => l.value === i18n.language) || languages[0];

  return (
    <Box className="relative">
      <Header
        style={{ backgroundColor: "#c72002", paddingBottom: 0, paddingRight: 0, paddingLeft: 0 }}
        className="app-header no-border flex-none mb-[20px]"
        showBackIcon={false}
        title={
          (
            <Box className="w-full">
              <Box flex justifyContent="space-between" className="px-[16px]">
                <Box flex className="space-x-2 mb-[40px]">
                  <img
                    className=" rounded-lg w-[235px]"
                    src={getConfig((c) => c.template.headerLogo) || logo}
                  />
                </Box>

                <Box className="pt-[30px]">
                  <Box
                    flex
                    alignItems="center"
                    className="bg-[#b21a00] rounded-full pl-4 pr-2 py-1.5 space-x-2 cursor-pointer shadow-md active:opacity-80 transition-all"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <Text size="xSmall" className="font-bold text-[10px] text-white w-[63px]">
                      {currentLang.text}
                    </Text>

                    {/* Hiển thị lá cờ SVG */}
                    <Box className="flex items-center justify-center overflow-hidden rounded-[2px]" style={{ width: 22, height: 16 }}>
                      <ReactCountryFlag
                        countryCode={currentLang.countryCode}
                        svg
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                        }}
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Inquiry />
              <Box className="h-[40px] bg-white rounded-t-[20px]">
                <Text></Text>
              </Box>

            </Box>
          ) as unknown as string
        }
      />


      {/* Menu thả xuống (Dropdown) */}
      {isOpen && (
        <Box
          className="absolute top-[110px] right-4 bg-white shadow-2xl rounded-[5px] z-[1000] w-[150px] overflow-hidden animate-fade-in"
        >
          {languages.map((lang) => (
            <Box
              key={lang.value}
              className={`p-2 flex items-center justify-between cursor-pointer transition-colors ${i18n.language === lang.value ? 'bg-red-50' : 'active:bg-gray-100'
                }`}
              onClick={() => {
                i18n.changeLanguage(lang.value);
                setIsOpen(false);
              }}
            >
              <Box flex alignItems="center" className="space-x-3">
                <Box className="flex items-center justify-center overflow-hidden rounded-[2px] shadow-sm" style={{ width: 24, height: 18 }}>
                  <ReactCountryFlag
                    countryCode={lang.countryCode}
                    svg
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                  />
                </Box>
                <Text
                  size="small"
                  className={i18n.language === lang.value ? 'text-[#b91c1c] font-bold' : 'text-gray-700'}
                >
                  {lang.text}
                </Text>
              </Box>
              {i18n.language === lang.value && (
                <Icon icon="zi-check" size={16} className="text-[#b91c1c]" />
              )}
            </Box>
          ))}
        </Box>
      )}


    </Box>
  );
};