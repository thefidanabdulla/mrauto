import React, { useEffect } from "react";
import { Select } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";

const { Option } = Select;

const Language = () => {
  const router = useRouter();

  function changeLang(newLocale) {
    const { pathname, asPath, query } = router;
    router.push({ pathname, query }, router.asPath, { locale: newLocale });
  }
  return (
    <Select
      onChange={(value) => changeLang(value)}
      value={router.locale}
      style={{
        width: 70,
        height: 40,
        background: "transparent",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        borderRadius: "0.375rem",
        border: "1px solid #fff",
      }}
      bordered={false}
      optionLabelProp="label"
    >
      <Option style={{ fontSize: "18px" }} value="en" label="En">
        <div className="flex items-center justify-start">
          <span className="ml-2.5">En</span>
        </div>
      </Option>
      <Option style={{ fontSize: "18px", width: "100%" }} value="az" label="Az">
        <div className="flex items-center">
          <span className="ml-2.5">Az</span>
        </div>
      </Option>
      <Option style={{ fontSize: "18px" }} value="ru" label="Ru">
        <div className="flex items-center justify-start">
          <span className="ml-2.5">Ru</span>
        </div>
      </Option>
    </Select>
  );
};

export default Language;
