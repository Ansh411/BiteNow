import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../Header.js";
import { Provider } from "react-redux";
import appStore from "../../store/appStore.js";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const WrappedHeader = () => (
  <BrowserRouter>
    <Provider store={appStore}>
      <Header />
    </Provider>
  </BrowserRouter>
);

describe("Header Component Tests", () => {
  test("should render the header component", () => {
    render(<WrappedHeader />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  test("should render Login button", () => {
    render(<WrappedHeader />);
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("should toggle Login → Logout on click", () => {
    render(<WrappedHeader />);

    const loginBtn = screen.getByRole("button", { name: /login/i });
 
    fireEvent.click(loginBtn);
    expect(screen.getByRole("button", { name: /logout/i })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /logout/i }));
    expect(screen.getByRole("button", { name: /login/i })).toBeInTheDocument();
  });

  test("should render cart icon with item count", () => {
    render(<WrappedHeader />);
    const cartCounts = screen.getAllByText("0");
    expect(cartCounts.length).toBeGreaterThan(0);
  });

  test("should render navigation links in Desktop", () => {
    window.innerWidth = 1200;
    window.dispatchEvent(new Event("resize"));

    render(<WrappedHeader />);

    expect(screen.getAllByText(/home/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/about/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/contact/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/grocery/i).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/offers/i).length).toBeGreaterThan(0);
  });
});
