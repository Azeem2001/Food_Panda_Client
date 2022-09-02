import "./App.css";
import React, { Fragment, useEffect } from "react";
import Container from "@mui/material/Container";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home/Home";
import Rigester from "./pages/Rigester/Rigester";
import LoginPage from "./pages/Login/LoginPage";
import setAuthToken from "./utils/setAuthToken";
import { currentUser } from "./redux/actions/auth";
import { useDispatch, useSelector } from "react-redux";
import Resturant from "./pages/Resturant/Resturant";
import ResturantDetails from "./pages/ResturantDetails/ResturantDetails";

function App() {
  let token = useSelector((state) => state.auth?.token);
  const dispatch = useDispatch();
  useEffect(() => {
    let gettoken = localStorage.getItem("token");
    if (gettoken) {
      setAuthToken(gettoken);
      dispatch(currentUser());
    }
  }, [token]);

  return (
    <Container maxWidth="xl" disableGutters={true}>
      <Router>
        <Navbar />
        <Routes>
          {token ? (
            <Fragment>
              {" "}
              <Route path="/" element={<Home />}></Route>
              <Route path="/city/:id" element={<Resturant />}></Route>
              <Route
                path="/resturant/:id"
                element={<ResturantDetails />}
              ></Route>
            </Fragment>
          ) : (
            <Fragment>
              <Route path="/Rigester" element={<Rigester />}></Route>
              <Route path="/LoginPage" element={<LoginPage />}></Route>
            </Fragment>
          )}
        </Routes>
      </Router>
    </Container>
  );
}

export default App;
