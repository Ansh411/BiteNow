import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body.js";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../TestMocks/mockResList.json";
import { act } from "react";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    });
});

it("should search res list for Pizza text input", async () => {

    await act(async () =>
    render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const cardsBeforeSearch = screen.getAllByTestId("resCard");

    expect(cardsBeforeSearch.length).toBe(20);

    const searchBtn = screen.getByRole("button", {name : "Search"});

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, {target : {value : "Pizza"}});

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("resCard");

    expect(cardsAfterSearch.length).toBe(2); 

    expect(searchBtn).toBeInTheDocument();

});


it("should filter top rated restaurants", async () => {

    await act(async () =>
    render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ));

    const cardsBeforeFilter = screen.getAllByTestId("resCard");

    expect(cardsBeforeFilter.length).toBe(20);

    const filterBtn = screen.getByRole("button" , {name : "Top Rated Restaurants 😎👌"});

    fireEvent.click(filterBtn);

    const cardsAfterFilter = screen.getAllByTestId("resCard");

    expect(cardsAfterFilter.length).toBe(10);


});