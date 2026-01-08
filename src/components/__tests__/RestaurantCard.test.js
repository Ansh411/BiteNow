import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantCard, {withBadges} from "../RestaurantCard.js";
import MOCK_DATA from "../TestMocks/mockResCard.json";

it("should render Restaurant Card Component with props Data", () => {
    render(
    <BrowserRouter><
        RestaurantCard resData={MOCK_DATA}/>
    </BrowserRouter>
    );

    const name = screen.getByText("Burger King");

    expect(name).toBeInTheDocument();
});

describe("HOC - withBadges Test", () => {
  it("should render RestaurantCard component along with badges", () => {
    // Wrap the RestaurantCard using HOC
    const RestaurantCardWithBadges = withBadges(RestaurantCard);

    render(
      <BrowserRouter>
        <RestaurantCardWithBadges resData={MOCK_DATA} />
      </BrowserRouter>
    );

    // Check Restaurant Name  
    expect(screen.getByText("Burger King")).toBeInTheDocument();

    // Check VEG / NON-VEG Badge
    const vegBadge = screen.getByText(/veg|non-veg/i);
    expect(vegBadge).toBeInTheDocument();

    // Check Best Seller badge if rating > 4.5
    if (MOCK_DATA.info.avgRating > 4.5) {
      expect(screen.getByText("❤️")).toBeInTheDocument();
    }
  });
});