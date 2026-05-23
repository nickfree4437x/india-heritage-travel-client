import {
  DROPDOWN_LEFT_OFFSET,
  DROPDOWN_OFFSET,
  MIN_LEFT_SPACE,
} from "../config/constants";

export const getDropdownPosition = (
  rect: DOMRect
) => {
  return {
    top: rect.bottom + DROPDOWN_OFFSET,

    left: Math.max(
      MIN_LEFT_SPACE,
      rect.left - DROPDOWN_LEFT_OFFSET
    ),
  };
};