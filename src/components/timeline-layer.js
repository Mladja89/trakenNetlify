import React from "react";
import { css } from "@emotion/core";
import Image from "gatsby-image";

const isEven = x => {
  return !Boolean(x & 1);
};

const text = (title, content) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 40%;

        span:nth-of-type(1) {
          color: #393d4c;
          font-family: Heebo;
          font-size: 30px;
          font-weight: bold;
          line-height: 56px;
        }
        span:nth-of-type(2) {
          color: #60636f;
          font-family: Heebo;
          font-size: 18px;
          letter-spacing: 0.16px;
          line-height: 27px;
        }
      `}
    >
      <span>{title}</span>
      <span>{content}</span>
    </div>
  );
};
const image = (fluid, title) => {
  return (
    <div
      css={css`
        display: flex;
        width: 40%;
        padding: 40px;
      `}
    >
      <Image
        css={css`
          width: 100%;
          height: 300px;
        `}
        fluid={fluid}
        alt={title}
      ></Image>
    </div>
  );
};

const TimelineLayer = ({
  children,
  number,
  dataObj,
  first = false,
  last = false
}) => {
  const { title, content } = dataObj;
  const fluid = dataObj.image.src.childImageSharp.fluid;

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        width: calc(100vw - 400px);
        position: relative;
      `}
    >
      {isEven(number) ? image(fluid, title) : text(title, content)}

      <div
        css={css`
          display: flex;
          color: #393d4c;
          border: 3px solid #393d4c;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          padding: 16px;
          margin: 0px 100px;
          font-weight: 500;
          background: white;
        `}
      >
        {number}
      </div>
      <div
        css={css`
          height: 100%;

          :before {
            content: "";
            position: absolute;
            width: 1px;
            height: 50%;
            top: 2px;
            left: calc(50% - 13px);
            border-right: 1px dashed ${first ? "white" : "#D7D8DB"};
            z-index: -1;
          }
          :after {
            content: "";
            position: absolute;
            width: 1px;
            height: 50%;
            top: 50%;
            left: calc(50% - 13px);
            border-right: 1px dashed ${last ? "white" : "#D7D8DB"};
            z-index: -1;
          }
        `}
      ></div>
      {!isEven(number) ? image(fluid, title) : text(title, content)}
    </div>
  );
};

export default TimelineLayer;
