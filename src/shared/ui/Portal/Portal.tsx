import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  element?: HTMLElement;
}

export const Portal: React.FC<PortalProps> = ({
  children,
  element = document.body,
}) => {
  return createPortal(children, element);
};
