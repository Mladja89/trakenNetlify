import React from "react";
import Layout from "../components/layout";
import { css } from "@emotion/core";

const Contact = () => {

  return (
    <>
      <Layout>
      <section>
      <div
            css={css`
              background: url("/black-bg.svg");
              background-position: 50%;
              background-size: cover;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              padding: 160px 0px;
              min-height: calc(100vh - 181px);
              .title {
                color: #40b7ce;
                font-size: 60px;
                font-weight: 200;
                margin-bottom: 70px;
              }
              .contact {
                > div {
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  span {
                    color: white;
                    font-size: 30px;
                  }
                  a {
                    width: 60px;
                    height: 100px;
                    background: url("/ico/social/w-mail.svg");
                    background-repeat: no-repeat;
                    background-position: 50%;
                    :hover {
                    background: url("/ico/social/mail.svg");
                    background-repeat: no-repeat;
                    background-position: 50%;
                    }
                  }
                }
              }
              > img {
                margin-top: 150px;
                max-width: 250px;
                width: 100%;
                height: 100%;
                display: block;
              }
            `}
          >
            <div className={"title"}>Contact us</div>
            <div className={"contact"}>
              <div>
                <span>office@traken.tech</span>
                <a href="mailto:office@traken.tech"></a>
              </div>
            </div>
            <img
              src={"/ico/logo/traken-logo-white.png"}
            ></img>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;