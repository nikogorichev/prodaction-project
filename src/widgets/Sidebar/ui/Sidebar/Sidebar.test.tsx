import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Sidebar } from "./Sidebar";
import { withTranslation } from "react-i18next";
import { renderWithTranslation } from "../../../../shared/lib/tests/renderWithTranslation/renderWithTranslation";

describe("Sidebar", () => {
  test("initial render", () => {
    const SidebarWithTranslation = withTranslation()(Sidebar);
    renderWithTranslation(<SidebarWithTranslation />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  test("test toggle", () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
