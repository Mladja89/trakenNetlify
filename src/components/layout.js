import React from "react";
import { Global, css } from "@emotion/core";
import Helmet from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import { ParallaxProvider } from "react-scroll-parallax";
import useSiteMetadata from "../hooks/use-sitemetadata";
// import "../../static/bootstrap-grid.min.css"; // Bootstrap grid only

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global
        styles={css`
          * {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box;
            margin: 0;
            font-family: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
            letter-spacing: 0.2px;
            ::selection {
              background: #40b7ce;
              color: black;
            }
          }
          .headroom-wrapper {
            position: absolute;
            top: 0px;
            width: 100%;
          }
          html,
          body {
            margin: 0;
            color: #555;
            
            @media (max-width: 992px) {
              width: 100vw !important;
            overflow-x: hidden !important;
                    }
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 18px;
            line-height: 1.4;
            > div {
              margin-top: 0;
            }
          }
          main {
            /* overflow: hidden; */
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            color: #222;
            line-height: 1.1;

            + * {
              margin-top: 0.5rem;
            }
          }

          strong {
            color: #222;
          }

          li {
            margin-top: 0.25rem;
          }
          .row {
            margin: 0;
            margin-left: 0;
            margin-right: 0;
          }
          .trails-main {
            position: relative;
            width: 100%;
            height: 100%;
            overflow: hidden;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .trails-text {
            position: relative;
            width: 100%;
            /* height: 110px; */
            /* line-height: 110px; */
            color: white;
            cursor: default;
            /* font-size: 8em; */
            font-weight: 400;
            letter-spacing: -9px;
            will-change: transform, opacity;
            overflow: hidden;
          }

          .trails-text > div {
            overflow: hidden;
          }
        `}
      />
      <Helmet>
        <html lang="en"></html>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Helmet>
      <Header />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
        integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
        crossorigin="anonymous"
      />
      <main
        css={css`
          /* padding-top: 0px;
          margin-top: -60px; */
          /* margin-top: -80px; */
        `}
      >
        <ParallaxProvider>{children}</ParallaxProvider>
      </main>
      <Footer />
    </>
  );
};

export default Layout;
