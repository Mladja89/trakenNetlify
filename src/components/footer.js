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
      // <footer
      //   css={css`
      //     display: block;
      //   `}
      // >
      //   <CasusSection color={"#f4f4f5"}>
      //     <div
      //       css={css`
      //         position: relative;
      //         display: flex;
      //         flex-direction: column;
      //         align-items: center;
      //         width: 100vw;
      //         padding-bottom: 250px;
      //         margin: 0;
      //         :before {
      //           content: "";
      //           position: absolute;
      //           width: 100vw;
      //           height: 180px;
      //           padding: 0px;
      //           margin: 0px;
      //           bottom: 0;
      //           border-left: 0px solid transparent;
      //           border-right: 100vw solid transparent;
      //           border-bottom: 15vw solid #383d4d;
      //         }
      //         span {
      //           display: flex;
      //           font-size: 40px;
      //           text-align: center;

      //           margin-top: 130px;
      //           margin-bottom: 50px;
      //           font-family: Butler;
      //           font-weight: bold;
      //         }
      //       `}
      //     >
      //       <span>
      //         Wir halten Sie gerne über <br></br> Neuigkeiten auf dem Laufenden.
      //       </span>
      //       <MailSusbscription />
      //     </div>
      //   </CasusSection>
      //   <CasusSection color={"#383d4d"}>
      //     <div
      //       css={css`
      //         display: flex;
      //         width: 100%;
      //         justify-content: center;
      //         max-width: 800px;
      //         margin-bottom: 150px;
      //         div {
      //           .logo-footer {
      //             li {
      //               max-width: 70px;
      //               img {
      //                 width: 100%;
      //                 height: 100%;
      //               }
      //             }
      //           }
      //           ul {
      //             li:nth-of-type(1) {
      //               font-weight: bold;
      //               color: white;
      //               margin-bottom: 15px;
      //             }
      //             li {
      //               list-style: none;
      //               padding: 0px;
      //               margin: 0px;
      //               color: #ffffffc7;
      //               font-family: Heebo;
      //               font-size: 12px;
      //               font-weight: 300;
      //               line-height: 28px;
      //               letter-spacing: 0.2px;
      //             }
      //           }
      //         }
      //       `}
      //     >
      //       <div className={bootstrap}>
      //         <ul className="logo-footer">
      //           <li><img src="/ico/logo/casus-logo-white.svg"></img></li>
      //         </ul>
      //       </div>
      //       <div className={bootstrap}>
      //         <ul>
      //           <li>Read more</li>
      //           <li>About Us</li>
      //           <li>Team</li>
      //           <li>API</li>
      //           <li>Security</li>
      //           <li>Terms & Conditions</li>
      //           <li>Privacy Policy</li>
      //           <li>Digital Signature</li>
      //           <li>Request DPA</li>
      //         </ul>
      //       </div>
      //       <div className={bootstrap}>
      //         <ul>
      //           <li>Contact</li>
      //           <li>contact@casus.ch</li>
      //           <li>CASUS Technologies AG</li>
      //           <li>Hohlstrasse 176</li>
      //           <li>8004 Zürich</li>
      //           <li>Schweiz</li>
      //         </ul>
      //       </div>
      //       <div className={bootstrap}>
      //         <ul>
      //           <li>Community</li>
      //           <li
      //             css={css`
      //               display: inline-flex;
      //               svg {
      //                 margin: 0px 5px;
      //               }
      //             `}
      //           >
      //             <FontAwesomeIcon icon={faTwitter} />
      //             <FontAwesomeIcon icon={faLinkedin} />
      //             <FontAwesomeIcon icon={faFacebookSquare} />
      //           </li>
      //         </ul>
      //       </div>
      //     </div>
      //   </CasusSection>
      // </footer>
    );
  }
}
