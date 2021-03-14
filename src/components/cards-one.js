import React from "react";
import { css } from "@emotion/core";

const Cardone = ({ children }) => {
  return (
    <div
      className="col-sm-12"
      css={css`
        display: flex;
        flex-direction: column;
        max-width: 375px;
        padding: 30px;
        cursor: default;
        border-radius: 5px;
        transition: all 0.22s ease-in-out;
        /* &:hover > span:nth-of-type(1) {
          color: #5d627b;
        } */
        span:nth-of-type(1) {
          font-size: 36px;
          position: relative;
          line-height: 54px;
          max-width: 275px;
          margin-bottom: 60px;
          color: #393d4c;
          font-family: Butler;
          font-weight: bold;

          :before {
            content: "";
            width: 75px;
            height: 75px;
            position: absolute;
            top: -8px;
            left: -20px;
            background-repeat: no-repeat;
            background-size: contain;
            z-index: -1;
          }

          :after {
            content: "";
            background: #3479f6;
            position: absolute;
            width: 30px;
            height: 1px;
            bottom: -30px;
            left: 0;
          }
        }
        span:nth-of-type(2) {
          color: #888a93;
          font-family: Heebo;
          font-size: 16px;
          letter-spacing: 0.23px;
        }
      `}
    >
      {children}
    </div>
  );
};

export default Cardone;
