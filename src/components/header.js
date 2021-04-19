import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import Headroom from "react-headroom";

const NavLink = styled(Link)`
  color: #222;
  font-size: 18px;
  font-family: Poppins;
  /* font-weight: ${(props) => props.fontWeight || "normal"}; */
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
  const MEDIA_MAX_WIDTH = 576;
  const navLinks = [
    { value: "Home", link: "/" },
    { value: "Product", link: "/product/" },
    { value: "Team", link: "/team/" },
    { value: "Contact", link: "/contact/" },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        // true for mobile device
        setMobile(true);
      }
    }
  }, []);

  return (
    <Headroom
      css={css`
        /* transition: transform 2000ms linear; */
      `}
    >
      <header
        css={css`
            background: ${
              typeof window !== "undefined" &&
              window.location.pathname !== "/team/"
                ? "#00000087"
                : "black"
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
              window.location.pathname == "/product/"
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
                /* font-weight: 600; */
              }
            }
            @media (max-width: ${MEDIA_MAX_WIDTH}px) {
            }
          `}
      >
        <NavLink className={"logo-traken"} fontWeight="bold">
          <Link to="/">
            <img src={`/ico/logo/traken-logo2.png`}></img>
          </Link>
          {mobile ? (
            <div
              onClick={() => setExpand(!expand)}
              id="nav-icon2"
              className={expand ? "open" : ""}
              css={css`
                width: 40px;
                height: 30px;
                position: relative;
                /* margin: 50px auto; */
                -webkit-transform: rotate(0deg);
                -moz-transform: rotate(0deg);
                -o-transform: rotate(0deg);
                transform: rotate(0deg);
                -webkit-transition: 0.5s ease-in-out;
                -moz-transition: 0.5s ease-in-out;
                -o-transition: 0.5s ease-in-out;
                transition: 0.5s ease-in-out;
                cursor: pointer;
                > span {
                  display: block;
                  position: absolute;
                  height: 3px;
                  width: 50%;
                  background: #40b7ce;
                  opacity: 1;
                  -webkit-transform: rotate(0deg);
                  -moz-transform: rotate(0deg);
                  -o-transform: rotate(0deg);
                  transform: rotate(0deg);
                  -webkit-transition: 0.25s ease-in-out;
                  -moz-transition: 0.25s ease-in-out;
                  -o-transition: 0.25s ease-in-out;
                  transition: 0.25s ease-in-out;
                  &:nth-child(even) {
                    left: 50%;
                    border-radius: 0 9px 9px 0;
                  }
                  &:nth-child(odd) {
                    left: 0px;
                    border-radius: 9px 0 0 9px;
                  }

                  &:nth-child(1),
                  &:nth-child(2) {
                    top: 0px;
                  }

                  &:nth-child(3),
                  &:nth-child(4) {
                    top: 15px;
                  }

                  &:nth-child(5),
                  &:nth-child(6) {
                    top: 30px;
                  }
                }
                &.open span:nth-child(1),
                  &.open span:nth-child(6) {
                    -webkit-transform: rotate(45deg);
                    -moz-transform: rotate(45deg);
                    -o-transform: rotate(45deg);
                    transform: rotate(45deg);
                  }

                  &.open span:nth-child(2),
                  &.open span:nth-child(5) {
                    -webkit-transform: rotate(-45deg);
                    -moz-transform: rotate(-45deg);
                    -o-transform: rotate(-45deg);
                    transform: rotate(-45deg);
                  }

                  &.open span:nth-child(1) {
                    left: 5px;
                    top: 7px;
                  }

                  &.open span:nth-child(2) {
                    left: calc(50% - 3px);
                    top: 7px;
                  }

                  &.open span:nth-child(3) {
                    left: -50%;
                    opacity: 0;
                  }

                  &.open span:nth-child(4) {
                    left: 100%;
                    opacity: 0;
                  }

                  &.open span:nth-child(5) {
                    left: 5px;
                    top: 29px;
                  }

                  &.open span:nth-child(6) {
                    left: calc(50% - 3px);
                    top: 29px;
                  }
              `}
            >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
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
        {/* <nav
            css={css`
              margin-left: auto;
            `}
          >
            <MailSusbscription height={40} />
          </nav> */}
      </header>
    </Headroom>
  );
};

export default Header;
