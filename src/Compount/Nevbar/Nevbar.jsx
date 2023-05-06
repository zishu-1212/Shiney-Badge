import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { loadWeb3 } from "../../apis/api";
import logo from "../Accest/Logo.PNG";
import "./Nevbar.css";
function Nevbar({ btnTxt, setBtTxt }) {


  const getAccount = async () => {
    let acc = await loadWeb3();
    // console.log("ACC=",acc)
    if (acc === "No Wallet") {
      setBtTxt("No Wallet");
    } else if (acc === "Wrong Network") {
      setBtTxt("Wrong Network");
    } else {
      setBtTxt(acc);
      }
  };
  return (
    <>
      <div className="maina">
        <Navbar
          className="Headera"
          collapseOnSelect
          expand="xl"
          bg="black"
          variant="dark"
        >
          <Container>
            <Navbar.Brand className="pic">
              <img src={logo} alt="" width="50%" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto nav_in_responsive ">
                <Nav.Link href="/" className="hzn">
                  <Link to="/" className="link_text">
                    Mint
                  </Link>
                </Nav.Link>
                <Nav.Link href="/Collection" className="hzn">
                  <Link to="/Collection" className="link_text">
                    Collection
                  </Link>
                </Nav.Link>
                <button
                  className="btn btn-lg text-white hzn "
                  onClick={() => getAccount()}
                >
                  {btnTxt === "Connect Wallet"
                    ? "Connect Wallet"
                    : btnTxt?.substring(0, 4) +
                      "..." +
                      btnTxt?.substring(btnTxt?.length - 4)}
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
    // <div className=" text-white d-flex justify-content-around py-2 navv">
    //   <div className="d-flex align-items-center">
    //     <img src={logo} width="60" alt="" />
    //     <h3>BleYd NFT</h3>
    //   </div>
    //   <div className="pt-1">
    //     <button className="btn btn-lg text-white " onClick={()=>getAccount()}>{btnTxt}</button>
    //   </div>
    // </div>
  );
}

export default Nevbar;
