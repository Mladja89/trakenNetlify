import React from 'react';
import { css } from '@emotion/core';

const Bluedot = ({ children, fontSize = 50, fontWeight = 400 }) => {
  let childrenArr = Array.isArray(children) ? children : [children];

  let addDot = childrenArr.map((element, i) => {
    if (i === children.length - 1 || childrenArr.length === 1) {
      return (
        <div key={element.props.children}>
          {element.props.children}
          <span>.</span>
        </div>
      );
    } else return <div key={element.props.children}>{element.props.children}</div>;
  });

  return (
    <div
      css={css`
        font-size: ${fontSize}px;
        font-weight: ${fontWeight};
        color: white;
        font-family: 'Butler';
        > div {
          display: flex;
          justify-content: center;
        }
        span {
          color: #007bfe;
        }
      `}
    >
      {addDot}
    </div>
  );
};

export default Bluedot;
