import React from "react";
import { css } from "@emotion/core";
import { Link } from "gatsby";

export default class Footer extends React.Component {
  render() {
    const bootstrap = "col-sm-4";
    return (
      <footer
        css={css`
          background: url("/footer-bg.svg");
          overflow: hidden;
          border-top: 1px solid #40b7ce;
          display: flex;
          flex-direction: column;}
          .foot-wrap {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 30px;
            padding-bottom: 0px;

            @media (max-width: 992px) {
              flex-direction: column;
            }
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
            > div {
              margin-bottom: 45px;
              display: flex;
              > a {
                padding: 0px 15px;
                > span {
                  width: 30px;
                  height: 30px;
                  background-repeat: no-repeat;
                  background-size: contain !important;
                  display: flex;
                }
                .twitter {
                  background: url("/ico/social/w-twitter.svg");
                  :hover{ background: url("/ico/social/twitter.svg"); }
                }
                .linkedin {
                  background: url("/ico/social/w-linkedin.svg");
                  :hover{ background: url("/ico/social/linkedin.svg"); }
                }
              }
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
              
              @media (max-width: 992px) {
                padding: 0;
                }
              li {
                color: white;
                margin: 0px 20px;
                @media (max-width: 992px) {
                  margin: 0px 5px;
                }
                
                a {
                  text-decoration: none;
                  color: white;
                  text-transform: uppercase;
                  :hover {
                    color: #40b7ce;
                  }
                }

              }
            }
          }
        `}
      >
        <div className={"foot-wrap"}>
          <div className={"social"}>
            <span>Follow us</span>
            <div>
              <a href={"https://twitter.com/Traken90473930"}><span className={"twitter"}></span></a>
              <a href={"https://linkedin.com/company/traken-energy"}><span className={"linkedin"}></span></a>
              {/* <img src={"/ico/social/facebook.svg"}></img>
              <img src={"/ico/social/linkedin.svg"}></img>
              <img src={"/ico/social/instagram.svg"}></img>
              <img src={"/ico/social/youtube.svg"}></img>
              <img src={"/ico/social/twitter.svg"}></img> */}
            </div>
          </div>
          <div className={"links"}>
            <ul>
              <li>
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/product/"}>Product</Link>
              </li>
              <li>
                <Link to={"/team/"}>Team</Link>
              </li>
              <li>
                <Link to={"/contact/"}>Contact</Link>
              </li>
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
