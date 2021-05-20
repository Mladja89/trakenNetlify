import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import Headroom from "react-headroom";
import HamburgerTraken from "./hamburger-traken";

const NavLink = styled(Link)`
  color: #222;
  font-size: 18px;
  font-family: Poppins;
  line-height: 1;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
  margin: 0 0.5rem 0 0;
  padding: 0.25rem;
  text-decoration: none;

  &.current-page {
    font-weight: 600;
    display: inline-block;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const [expand, setExpand] = useState(false);

  const navLinks = [
    { value: "Home", link: "/" },
    { value: "Product", link: "../product/" },
    { value: "Team", link: "../team/" },
    { value: "Contact", link: "../contact/" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        setMobile(true);
      }
    }
  }, []);

  return (
    <Headroom>
      <header
        css={css`
            background: ${
              typeof window !== "undefined" &&
              window.location.pathname === "/team/"
                ? "black"
                : "#00000087"
            };
            border-bottom: 1px solid #40b7ce;
            z-index: 999;
            height: ${expand ? "240px" : "80px"};
            transition: height 0.3s ease;
            display: flex;
            align-items: center;
            padding: 0px 20px;
            overflow: hidden;
            @media (max-width: 992px) {
              flex-direction: column;
              position: relative;
              }
            ${
              typeof window !== "undefined" &&
              window.location.pathname === "/product/"
                ? "max-width: 1400px; margin-left: auto; margin-right: auto; background: #111111;"
                : null
            }
            }
            .logo-traken {
              margin-right: 30px;
              font-size: 22px;
              
              @media (max-width: 992px) {
                display: flex;
                width: 100%;
                justify-content: space-around;
                align-items: center;
              }
              img {
                max-width: 200px;
                width: 100%;
                height: 100%;
              }
            }
            .nav-link-group {
              margin-left: auto;
              @media (max-width: 992px) {
                position: absolute;
                display: flex;
                flex-direction: column;
                top: 90px;
              }

            }
            a {
              padding: 0;
              padding-top: 5px;
              padding-bottom: 5px;
              margin: 0px 10px;
              color: ${
                typeof window !== "undefined" &&
                window.location.pathname !== "/"
                  ? "white"
                  : "white"
              };
              :hover {
                color: #32b1ca;
                text-decoration: none;
              }
            }
          `}
      >
        <NavLink className={"logo-traken"} fontWeight="bold">
          <Link to="/">
            <img src={`./ico/logo/traken-logo2.png`}></img>
          </Link>
          {mobile ? (
            <div onClick={() => setExpand(!expand)}>
              <HamburgerTraken expand={expand}></HamburgerTraken>
            </div>
          ) : null}
        </NavLink>
        <div className={"nav-link-group"}>
          {navLinks.map((link) => (
            <NavLink
              key={link.value}
              to={link.link}
              activeClassName="current-page"
            >
              {link.value}
            </NavLink>
          ))}
        </div>
      </header>
    </Headroom>
  );
};

export default Header;
