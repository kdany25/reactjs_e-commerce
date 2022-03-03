import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 380px) {
      ${props}
    }
  `;
};

export const thirteenProMax = (props) => {
  return css`
    @media only screen and (device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) {
      ${props}
    }
  `;
};

export const thirteenPro = (props) => {
  return css`
    @media only screen and (device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) {
      ${props}
    }
  `;
};

export const thirteenmin = (props) => {
  return css`
    @media only screen and (device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) {
      ${props}
    }
  `;
};

export const elevenproMax= (props) => {
  return css`
  @media only screen 
  and (device-width: 414px) 
  and (device-height: 896px) 
  and (-webkit-device-pixel-ratio: 3)  {
      ${props}
    }
  `;
};