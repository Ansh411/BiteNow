import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Contact from "../Contact.js";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases", () => {
test("should load contact component", async () => {
  render(<BrowserRouter> <Contact /> </BrowserRouter>);

const heading = await screen.findByRole("heading", {
  name: /get in touch/i,
});

  expect(heading).toBeInTheDocument();
});

it("should load send message button inside contact component", () => {
  render(<BrowserRouter> <Contact /> </BrowserRouter>);

const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

test("should load input name inside contact component", () => {
  render(<BrowserRouter> <Contact /> </BrowserRouter>);

const button = screen.getByPlaceholderText("Enter your name");

  expect(button).toBeInTheDocument();
});

it("should load input boxes in the Contact Component", () => {
    render(<BrowserRouter> <Contact /> </BrowserRouter>);

    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes.length);

    expect(inputBoxes.length).toBe(3);

});
});

test("should render phone and email details", () => {
  render(<BrowserRouter><Contact /></BrowserRouter>);

  expect(screen.getByText("+91-9000000000")).toBeInTheDocument();
  expect(screen.getByText("bitenow@gmail.com")).toBeInTheDocument();
});

test("should have correct placeholders", () => {
  render(<BrowserRouter><Contact /></BrowserRouter>);

  expect(screen.getByPlaceholderText("Enter your name")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("example@gmail.com")).toBeInTheDocument();
  expect(screen.getByPlaceholderText("Write your message here...")).toBeInTheDocument();
});

test("should contain exactly one submit button", () => {
  render(<BrowserRouter><Contact /></BrowserRouter>);

  const buttons = screen.getAllByRole("button");
  expect(buttons.length).toBe(1);
});

test("send message button should link to /messageSent", () => {
  render(<BrowserRouter><Contact /></BrowserRouter>);

  const link = screen.getByRole("link", { name: /send message/i });
  expect(link).toHaveAttribute("href", "/messageSent");
});

test("should have 2 inputs and 1 textarea", () => {
  render(<BrowserRouter><Contact /></BrowserRouter>);

  const inputs = screen.getAllByRole("textbox");
  expect(inputs.length).toBe(3); // name, email, message textarea
});


