import React from "react";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Checkout, CheckoutSuccess, CheckoutFail } from "./Checkout";
import Payments from "./Payments";
import Customers from "./Customers";
import Subscriptions from "./Subscriptions";

function App() {
  return (
    <Router>
      <div className="">
        <nav className="bg-black py-6">
          <ul className="list-none flex flex-row justify-evenly text-white">
            <li className="hover:scale-105 transition duration-300">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:scale-105 transition duration-300">
              <Link to="/checkout">
                <span aria-label="emoji" role="img">
                  🛒
                </span>{" "}
                Checkout
              </Link>
            </li>
            <li className="hover:scale-105 transition duration-300">
              <Link to="/payments">
                <span aria-label="emoji" role="img">
                  💸
                </span>{" "}
                Payments
              </Link>
            </li>
            <li className="hover:scale-105 transition duration-300">
              <Link to="/customers">
                <span aria-label="emoji" role="img">
                  🧑🏿‍🤝‍🧑🏻
                </span>{" "}
                Customers
              </Link>
            </li>
            <li className="hover:scale-105 transition duration-300">
              <Link to="/subscriptions">
                <span aria-label="emoji" role="img">
                  🔄
                </span>{" "}
                Subscriptions
              </Link>
            </li>
          </ul>
        </nav>

        <main>
          <Routes>
            <Route
              exact
              path="/checkout"
              element={<Checkout></Checkout>}
            ></Route>
            <Route
              exact
              path="/payments"
              element={<Payments></Payments>}
            ></Route>
            <Route
              exact
              path="/customers"
              element={<Customers></Customers>}
            ></Route>
            <Route
              exact
              path="/subscriptions"
              element={<Subscriptions></Subscriptions>}
            ></Route>
            <Route
              exact
              path="/success"
              element={<CheckoutSuccess></CheckoutSuccess>}
            ></Route>
            <Route
              exact
              path="/failed"
              element={<CheckoutFail></CheckoutFail>}
            ></Route>
            <Route exact path="/" element={<Home></Home>}></Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <h2>Home</h2>
    </>
  );
}

export default App;
