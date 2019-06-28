import { css } from "styled-components";

const sizes = {
  extraLarge: 2000,
  large: 1200,
  medium: 992,
  small: 600,
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export default media;