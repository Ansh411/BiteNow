import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantMenu from "../RestaurantMenu.js";
import Header from "../Header.js";
import Cart from "../Cart.js";
import MOCK_DATA from "../TestMocks/mockResMenu.json";
import { act } from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../../store/cartSlice";

const mockFetchData = () => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA),
    })
  );
};

const renderWithStore = (ui) => {
  const store = configureStore({
    reducer: {
      cart: cartReducer,
    },
  });

  return render(
    <BrowserRouter>
      <Provider store={store}>{ui}</Provider>
    </BrowserRouter>
  );
};

describe("Restaurant Menu + Cart Tests", () => {

  beforeEach(() => {
    mockFetchData();
  });

  // MENU LOAD

  test("should load restaurant menu component", async () => {
    await act(async () =>
      renderWithStore(<RestaurantMenu />)
    );

    expect(screen.getByText("Half & Half Pizza (2)")).toBeInTheDocument();
  });

  // EXPAND ACCORDION

  test("should load 2 food items after clicking category", async () => {
    await act(async () =>
      renderWithStore(<RestaurantMenu />)
    );

    fireEvent.click(screen.getByText("Half & Half Pizza (2)"));

    expect(screen.getAllByTestId("foodItem").length).toBe(2);
  });

  // CART COUNT BEFORE ADDING ITEMS

  test("should show 0 cart items initially", async () => {
    await act(async () =>
      renderWithStore(
        <>
          <Header />
          <RestaurantMenu />
        </>
      )
    );

    expect(screen.getByTestId("cartItems")).toHaveTextContent("0");
  });

  // CART UPDATES TO 1 AFTER ADDING ONE ITEM

  test("should update cart count to 1 after adding one item", async () => {
    await act(async () =>
      renderWithStore(
        <>
          <Header />
          <RestaurantMenu />
        </>
      )
    );

    fireEvent.click(screen.getByText("Half & Half Pizza (2)"));

    const addBtns = screen.getAllByRole("button", { name: /add/i });

    fireEvent.click(addBtns[0]);

    expect(screen.getByTestId("cartItems")).toHaveTextContent("1");
  });

  // CART UPDATES TO 2 AFTER ADDING TWO ITEMS

  test("should update cart count to 2 after adding two items", async () => {
    await act(async () =>
      renderWithStore(
        <>
          <Header />
          <RestaurantMenu />
        </>
      )
    );

    fireEvent.click(screen.getByText("Half & Half Pizza (2)"));
    const addBtns = screen.getAllByRole("button", { name: /add/i });

    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    expect(screen.getByTestId("cartItems")).toHaveTextContent("2");
  });

  // ITEMS SHOWN IN CART PAGE

  test("cart page should show two items", async () => {
    await act(async () =>
      renderWithStore(
        <>
          <Header />
          <RestaurantMenu />
          <Cart />
        </>
      )
    );

    fireEvent.click(screen.getByText("Half & Half Pizza (2)"));
    const addBtns = screen.getAllByRole("button", { name: /add/i });

    fireEvent.click(addBtns[0]);
    fireEvent.click(addBtns[1]);

    expect(screen.getAllByTestId("CartPageItems").length).toBe(2);
  });

  // CLEAR CART

  test("should clear cart", async () => {
    await act(async () =>
      renderWithStore(
        <>
          <Header />
          <RestaurantMenu />
          <Cart />
        </>
      )
    );

    fireEvent.click(screen.getByText("Half & Half Pizza (2)"));
    const addBtns = screen.getAllByRole("button", { name: /add/i });

    fireEvent.click(addBtns[0]);

    fireEvent.click(screen.getByRole("button", { name: /clear cart/i }));

    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });
});

