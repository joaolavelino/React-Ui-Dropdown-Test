import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Dropdown from "./Dropdown";
import AlignButton from "./AlignButton/AlignButton";
import App from "../App";

test("check if the dropdown is initially closed", () => {
  const component = render(<Dropdown />);
  const openMenu = component.queryByTestId("open-menu");
  const closedMenu = component.getByTestId("closed-menu");

  expect(closedMenu).toBeInTheDocument;
  expect(openMenu).not.toBeInTheDocument;
});

test("check if the dropdown opens when clicked", () => {
  const component = render(<Dropdown />);
  const closedMenu = component.getByTestId("closed-menu");

  userEvent.click(closedMenu);

  const openMenu = component.getByTestId("open-menu");
  expect(openMenu).toBeInTheDocument;
});

test("check if the dropdown closes by clicking on the icon", () => {
  const component = render(<Dropdown />);
  const closedMenu = component.getByTestId("closed-menu");

  userEvent.click(closedMenu);

  const openMenu = component.getByTestId("open-menu");
  expect(openMenu).toBeInTheDocument;

  userEvent.click(closedMenu);
  expect(openMenu).not.toBeInTheDocument;
});

test("check if the menu responds to the align property", () => {
  const componentLeft = render(<Dropdown align="left" />);
  const closedMenu = componentLeft.getByTestId("closed-menu");
  userEvent.click(closedMenu);

  const openMenu = componentLeft.queryByTestId("open-menu");
  expect(openMenu.classList).toContain("menu-align-left");
});

test("check if the align button is working", () => {
  const application = render(<App />);
  const closedMenu = application.getByTestId("closed-menu");
  const alignButton = application.getByTestId("align-button");

  userEvent.click(closedMenu);

  const openMenu = application.queryByTestId("open-menu");
  expect(openMenu.classList).toContain("menu-align-left");

  userEvent.click(alignButton);
  expect(openMenu.classList).toContain("menu-align-right");
});
