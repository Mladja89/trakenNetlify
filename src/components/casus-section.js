import React from 'react';
import { css } from '@emotion/core';

const CasusSection = ({ children, color, height, flexDr = 'row' }) => {
  return (
    <section
      className={'row'}
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: ${flexDr};
        
        background: ${color};
        height: ${height};
        
      `}
    >
      {children}
    </section>
  );
};

export default CasusSection;
