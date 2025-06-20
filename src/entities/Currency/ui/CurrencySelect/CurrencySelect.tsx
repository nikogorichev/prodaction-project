import { ListBox } from "@/shared/ui/Popups";
import { Currency } from "../../model/types/currency";

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

interface CurrencySelectProps {
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
  className?: string;
}

export const CurrencySelect = ({
  value,
  onChange,
  readonly,
  className,
}: CurrencySelectProps) => {
  const handleOnChange = (value: string) => {
    onChange?.(value as Currency);
  };

  return (
    <ListBox
      onChange={handleOnChange}
      items={options}
      className={className}
      value={value}
      defaultValue="Укажите валюту"
      label="Укажите валюту"
      readonly={readonly}
      direction="top-right"
    />
  );
};
