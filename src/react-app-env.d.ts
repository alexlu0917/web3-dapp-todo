/// <reference types="react-scripts" />
declare module "react-dom";
declare module "@metamask/jazzicon" {
    export default function (diameter: number, seed: number): HTMLElement;
  }  
