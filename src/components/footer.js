import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";
import CasusSection from "../components/casus-section";
import MailSusbscription from "./mail-subscription";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default class Footer extends React.Component {
  render() {
    const bootstrap = "col-sm-4";
    return (
      <footer
        css={css`
          background: url("/footer-bg.svg");
          overflow: hidden;
          .foot-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 30px;
            padding-bottom: 0px;
          }
          .moonstruck {
            background: #1b212d;
            padding: 3px;
            padding-left: 25px;
            color: white;
          }
          div {
            > span {
              padding-left: 20px;
              margin-bottom: 15px;
            }
          }
          .social {
            
            color: white;
            display: flex;
            flex-direction: column;
            div {
              margin-bottom: 45px;
              img {
                width: 30px;
                margin: 0px 10px;
              }
            }
          }
          .links {
            ul {
              list-style: none;
              display: flex;
              li {
                color: white;
                margin: 0px 20px;
              }
            }
          }
        `}
      >
        <div className={"foot-wrap"}>
          <div className={"social"}>
            <span>Follow us</span>
            <div>
              <img src={"/ico/social/facebook.svg"}></img>
              <img src={"/ico/social/linkedin.svg"}></img>
              <img src={"/ico/social/instagram.svg"}></img>
              <img src={"/ico/social/youtube.svg"}></img>
              <img src={"/ico/social/twitter.svg"}></img>
            </div>
          </div>
          <div className={"links"}>
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>News</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
        <div className={"moonstruck"}>
          <span>Powered by MOONSTRUCK</span>
        </div>
      </footer>
    );
  }
}
