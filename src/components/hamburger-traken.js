import React from "react";
import { css } from "@emotion/core";

const HamburgerTraken = (expand) => {
  return (
    <div
      id="nav-icon2"
      className={expand.expand ? "open" : ""}
      css={css`
        width: 40px;
        height: 30px;
        position: relative;
        /* margin: 50px auto; */
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
        -webkit-transition: 0.5s ease-in-out;
        -moz-transition: 0.5s ease-in-out;
        -o-transition: 0.5s ease-in-out;
        transition: 0.5s ease-in-out;
        cursor: pointer;
        > span {
          display: block;
          position: absolute;
          height: 3px;
          width: 50%;
          background: #40b7ce;
          opacity: 1;
          -webkit-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
          -webkit-transition: 0.25s ease-in-out;
          -moz-transition: 0.25s ease-in-out;
          -o-transition: 0.25s ease-in-out;
          transition: 0.25s ease-in-out;
          &:nth-of-type(even) {
            left: 50%;
            border-radius: 0 9px 9px 0;
          }
          &:nth-of-type(odd) {
            left: 0px;
            border-radius: 9px 0 0 9px;
          }

          &:nth-of-type(1),
          &:nth-of-type(2) {
            top: 0px;
          }

          &:nth-of-type(3),
          &:nth-of-type(4) {
            top: 15px;
          }

          &:nth-of-type(5),
          &:nth-of-type(6) {
            top: 30px;
          }
        }
        &.open span:nth-of-type(1),
        &.open span:nth-of-type(6) {
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          transform: rotate(45deg);
        }

        &.open span:nth-of-type(2),
        &.open span:nth-of-type(5) {
          -webkit-transform: rotate(-45deg);
          -moz-transform: rotate(-45deg);
          -o-transform: rotate(-45deg);
          transform: rotate(-45deg);
        }

        &.open span:nth-of-type(1) {
          left: 5px;
          top: 7px;
        }

        &.open span:nth-of-type(2) {
          left: calc(50% - 3px);
          top: 7px;
        }

        &.open span:nth-of-type(3) {
          left: -50%;
          opacity: 0;
        }

        &.open span:nth-of-type(4) {
          left: 100%;
          opacity: 0;
        }

        &.open span:nth-of-type(5) {
          left: 5px;
          top: 29px;
        }

        &.open span:nth-of-type(6) {
          left: calc(50% - 3px);
          top: 29px;
        }
      `}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};

export default HamburgerTraken;
