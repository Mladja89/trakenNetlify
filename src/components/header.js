import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import Headroom from "react-headroom";
import usePhotos from "../hooks/use-photos";
import MailSusbscription from "./mail-subscription"
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";

const NavLink = styled(Link)`
  color: #222;
  font-size: 18px;
  font-family: Poppins;
  /* font-weight: ${props => props.fontWeight || "normal"}; */
  line-height: 1;
  text-transform: uppercase;
  font-weight: 400;
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

export default class Header extends React.Component {
  render() {

    const MEDIA_MAX_WIDTH = 576;
    const navLinks = [
      // { value: "Produkt", link: "/produkt/" },
      // { value: "Preise", link: "/preise/" },
      { value: "Home", link: "/" }, 
      { value: "Projects", link: "/kontakt/" },
      { value: "News", link: "/kontakt/" },
      { value: "Contact", link: "/kontakt/" }
    ];
    return (
      <Headroom disable={false} >
        <header
          css={css`
            background: ${typeof window !== 'undefined' && window.location.pathname !== "/"
              ? "#383d4d"
              : "white"};
            z-index: 999;
            height: 80px;
            display: flex;
            align-items: center;
            padding: 0px 20px;
            .logo-traken {
              margin-right: 30px;
              font-size: 22px;
              max-width: 200px;
              img {
                width: 100%;
                height: 100%;
              }
            }
            .nav-link-group {
              margin-left: auto;
            }
            a {
              padding: 0;
              padding-top: 5px;
              padding-bottom: 5px;
              margin: 0px 10px;
              color: ${typeof window !== 'undefined' && window.location.pathname !== "/" ? "white" : "#383d4d"};
            }
            @media (max-width: ${MEDIA_MAX_WIDTH}px) {
                
            }
          `}
        >
          <NavLink className={'logo-traken'} to="/" fontWeight="bold">
            {/* <img src={`/ico/logo/${typeof window !== 'undefined' && window.location.pathname !== "/"
              ? "casus-logo-white.svg"
              : "casus-logo.svg"}`}></img> */}

            <img src={`/ico/logo/traken-logo.png`}></img>
          </NavLink>
          <div className={'nav-link-group'}>
          {navLinks.map(link => (
            <NavLink
              key={link.link}
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
  }
}
