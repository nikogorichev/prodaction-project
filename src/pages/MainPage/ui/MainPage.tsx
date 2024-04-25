import { Counter } from "entities/Counter";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from "shared/ui/Input/Input";
import { Text } from "shared/ui/Text/Text";

const MainPage = () => {
  const { t } = useTranslation("main");
  const [value, setValue] = useState("");

  const handleChange = (val: string) => {
    setValue(val);
  };

  return (
    <div>
      <Text title={t("Главная")} text="обычный текст" />
      <Input value={value} onChange={handleChange} />
    </div>
  );
};

export default MainPage;
