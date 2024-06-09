import { Select } from "shared/ui/Select/Select";
import styles from "./CurrencySelect.module.scss";
import { Currency } from "../../model/types/currency";

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

interface CurrencySelectProps {
  value?: Currency;
  onChange: (value: Currency) => void;
}

export const CurrencySelect = ({ value, onChange }: CurrencySelectProps) => {
  const handleOnChange = (value: string) => {
    onChange?.(value as Currency);
  };
  return (
    <Select
      label="Укажите валюту"
      options={options}
      value={value}
      onChange={handleOnChange}
    />
  );
};
