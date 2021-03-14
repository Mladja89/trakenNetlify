import React, { useState } from 'react';
import { css } from '@emotion/core';

const Hamburger = () => {
  let [open, setOpen] = useState(false);
  const transformVar = 8;

  return (
    <>
      <button
        css={css`
          :focus {
            outline: none;
          }
          border: none;
          color: black;
          font-size: 1.25rem;

          .row .three {
            padding: 80px 30px;
            -webkit-box-sizing: border-box;
            -moz-box-sizing: border-box;
            box-sizing: border-box;
            background-color: #2c3e50;
            color: #ecf0f1;
            text-align: center;
          }

          .hamburger .line {
            width: 30px;
            height: 2px;
            background-color: #393d4c;
            display: block;
            margin: 6px auto;
            -webkit-transition: all 0.3s ease-in-out;
            -o-transition: all 0.3s ease-in-out;
            transition: all 0.3s ease-in-out;
          }

          .hamburger:hover {
            cursor: pointer;
          }

          #hamburger-2.is-active .line:nth-of-type(1) {
            -webkit-transform: translateY(${transformVar}px);
            -ms-transform: translateY(${transformVar}px);
            -o-transform: translateY(${transformVar}px);
            transform: translateY(${transformVar}px);
          }

          #hamburger-2.is-active .line:nth-of-type(3) {
            -webkit-transform: translateY(-${transformVar}px);
            -ms-transform: translateY(-${transformVar}px);
            -o-transform: translateY(-${transformVar}px);
            transform: translateY(-${transformVar}px);
          }
        `}
        onClick={() => setOpen((open = !open))}
      >
        <div className="three col">
          <div
            className={'hamburger ' + (!open ? '' : 'is-active')}
            id="hamburger-2"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </button>
    </>
  );
};

export default Hamburger;
