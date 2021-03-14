import React from 'react';
import { css } from '@emotion/core';

const Subheader = ({ children, darkBg = false }) => {
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        padding: 100px 0px;
        span:nth-of-type(1) {
          text-transform: uppercase;
          /* color: #3479f6; */
          color: ${!darkBg ? '#747784' : 'white'};
          font-family: Heebo;
          font-size: 12px;
          font-weight: bold;
          letter-spacing: 2.13px;
          line-height: 26px;
          text-align: center;
        }
        span:nth-of-type(2) {
          color: ${!darkBg ? '#393d4c' : 'white'};
          font-family: Butler;
          font-size: 38px;
          font-weight: bold;
          line-height: 61px;
          text-align: center;
          position: relative;
          padding-bottom: 20px;
          :before {
            content: '';
            height: 3px;
            width: 62px;
            background: #3479f6;
            z-index: 0;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            bottom: 0;
          }
        }
      `}
    >
      {children}
    </div>
  );
};

export default Subheader;
