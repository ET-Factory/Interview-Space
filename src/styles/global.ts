import { css } from '@emotion/react';

export const global = css`
  html,
  body {
    padding: 0;
    margin: 0;
    line-height: 1.6;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  button:hover {
    cursor: pointer;
  }
`;
