import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import { AuthContext } from "../context/AuthProvider/AuthProvider";
import Home from "../pages/Home/Home";
import Footer from "../pages/Shared/Footer/Footer";
import Header from "../pages/Shared/Header/Header";
import LeftSide from "../pages/Shared/LeftSide/LeftSide";

const Main = () => {
  const { name } = useContext(AuthContext);
  console.log(name);
  return (
    <>
      <Header></Header>
      <Container>
        <Row className="w-100">
          <Col md="3">
            <LeftSide></LeftSide>
          </Col>
          <Col md="9">
            <Outlet></Outlet>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Main;
