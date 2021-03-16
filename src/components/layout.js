import React from "react";
import { Global, css } from "@emotion/core";
import Helmet from "react-helmet";
import Header from "./header";
import Footer from "./footer";
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
            font-family: Poppins, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              Helvetica, Arial, sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol";
              letter-spacing: 0.2px;
          }

          ${"" /* * + * {
          margin-top: 1rem;
        } */}
          html,
          body {
            margin: 0;
            color: #555;

            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            font-size: 18px;
            line-height: 1.4;

            /* remove margin for the main div that Gatsby mounts into */
            > div {
              margin-top: 0;
            }
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
          padding-top: 0px;
        `}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
