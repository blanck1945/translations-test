import React from "react";
import { useTranslation as useReactI18nextTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Test = () => {
  const { t } = useReactI18nextTranslation();
  console.warn(t("admin"));

  return (
    <div>
      <p>{t("admin")}</p>
      <p>{t("madison")}</p>
    </div>
  );
};

export default Test;

export const getServerSideProps = async (ctx) => {
  try {
    return {
      props: {
        ...(await serverSideTranslations("en", ["common"])),
      },
    };
  } catch (err) {
    return {
      props: {},
    };
  }
};
