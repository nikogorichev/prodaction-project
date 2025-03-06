import { Currency } from "entities/Currency";
import { Country } from "shared/const/common";

export interface Profile {
  id?: number
  first?: string;
  lastname?: string;
  age?: number;
  currency?: Currency;
  country?: Country;
  city?: string;
  username?: string;
  avatar?: string;
}
