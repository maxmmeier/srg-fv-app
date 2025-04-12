import { useTranslation } from "react-i18next";

export function Apply() {
  const { t } = useTranslation();
  return (
    <>
      <div>{t("applyForMembership")}</div>
    </>
  );
}
