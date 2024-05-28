import './App.css';
import React, { lazy, Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
// import root from "./index";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from './components/RestaurantMenu';
import userContext from './utils/userContext';
import appStore from './utils/appStore';
import Cart from './components/Cart';
import { Provider } from "react-redux";
// import Grocery from './components/Grocery';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";

//chunking
//code splitting
//Dynamic Bundling
//lazy loading (is a function given by react)
//on demand loading

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {

  const [userName, setUserName] = useState();

  //authentication
  useEffect(() => {
    //Make an API call and send username and password
    const data = {
      name: "Rachna Bharti",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
      <div className="App">
        <userContext.Provider value={{ loggedInUser: userName }}>
          <Header />
        </userContext.Provider>
        {/** if path = / */}
        {/* <Body/> */}
        <Outlet />
        {/** if path = /about */}
        {/* <About/> */}
        {/** if path = /contact */}
        {/* <Contact/> */}
      </div >
    </Provider>

  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },

      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/restaurants/:resid",
        element: <RestaurantMenu />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/grocery",
        element: <Suspense fallback={<h1>Loading....</h1>}><Grocery /></Suspense>,
      },

      {
        path: "/cart",
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },

]);

var root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<RouterProvider router={appRouter} />);

export default App;


