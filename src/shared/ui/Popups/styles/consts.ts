import { DropdownDirection } from "../../../types/ui";
import cls from "./popups.module.scss";

export const dropdownDirectionClasses: Record<DropdownDirection, string> = {
  "top-left": cls.optionsTopLeft,
  "top-right": cls.optionsTopRight,
  "bottom-left": cls.optionsBottomLeft,
  "bottom-right": cls.optionsBottomRight,
};
