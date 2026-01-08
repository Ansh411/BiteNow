import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import { createBrowserRouter, RouterProvider, Outlet  } from "react-router-dom";
import { lazy, Suspense, useEffect, useState } from "react";
import Shimmer from "./components/Shimmer.js";
import Loader from "./components/Loader.js";
import UserContext from "./utils/UserContext.js";
import ScrollToTop from "./utils/ScrollToTop.js";

const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/About.js"));
const Contact = lazy(() => import("./components/Contact.js"));
const Body = lazy(() => import("./components/Body.js"));
const ErrorPage = lazy(() => import("./components/ErrorPage.js"));
const Offers = lazy(() => import("./components/Offers.js"));
const RestaurantMenu = lazy(() => import("./components/RestaurantMenu.js"));
const Cart = lazy(() => import("./components/Cart.js"));
const HelpCenter = lazy(() => import("./components/support/HelpCenter.js"));
const FAQ = lazy(() => import("./components/support/FAQ.js"));
const PrivacyPolicy = lazy(() => import("./components/support/PrivacyPolicy.js"));
const TermsConditions = lazy(() => import("./components/support/TermsConditions.js"));
const SuccessPage = lazy(() => import("./components/SuccessPage.js"));
const MessageSent = lazy(() => import("./components/support/MessageSent.js"));

const AboutClass = lazy(() => import("./components/AboutClass.js"));

import { Provider } from "react-redux";
import appStore from "./store/appStore.js";

const AppLayout = () => {

    const[userName, setUserName] = useState();

    // Authentication Code to check for username and password

    useEffect(() => {
        // Make an API Call to verify username and password and get some data of loggedIn User
        const data = {
            name : "Ansh",
        }
        setUserName(data.name);
    },[]);

    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser : userName , setUserName}}>
            <ScrollToTop />
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
        </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children : [
        {
            path: "/",
            element: <Suspense fallback={<Shimmer />}> <Body /> </Suspense>
        },
        {
            path: "/grocery",
            element: <Suspense fallback={<Loader />}> <Grocery /> </Suspense>
        },
        {
            path: "/about",
            element: <Suspense fallback={<Loader />}> <About/> </Suspense>
        },
        {
            path: "/contact",
            element: <Suspense fallback={<Loader />}> <Contact /> </Suspense>,
        },
        {
            path: "/messageSent",
            element: <Suspense fallback={<Loader />}> <MessageSent /> </Suspense>
        },
        {
            path: "/offers",
            element: <Suspense fallback={<Loader />}> <Offers /> </Suspense>
        },
        {
            path: "/cart",
            element: <Suspense fallback={<Loader />}> <Cart /> </Suspense>
        },
        {
            path: "/success",
            element: <Suspense fallback={<Loader />}> <SuccessPage /> </Suspense>
        },
        {
            path: "/restaurants/:resId",
            element:  <Suspense fallback={<Loader />}> <RestaurantMenu /> </Suspense>
        },
        {
            path: "/help",
            element: <Suspense fallback={<Loader />}> <HelpCenter /> </Suspense>
        },
        {
            path: "/faq",
            element: <Suspense fallback={<Loader />}> <FAQ /> </Suspense>
        },
        {
            path: "/privacy",
            element: <Suspense fallback={<Loader />}> <PrivacyPolicy /> </Suspense>
        },
        {
            path: "/terms",
            element: <Suspense fallback={<Loader />}> <TermsConditions /> </Suspense>
        },
     ],
     errorElement: <Suspense fallback={<Loader />}> <ErrorPage /> </Suspense>
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);