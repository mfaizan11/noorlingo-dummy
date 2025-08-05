// src/types/react-slick.d.ts
declare module 'react-slick' {
  import * as React from 'react';

  interface Settings {
    infinite?: boolean;
    draggable?: boolean;
    arrows?: boolean;
    autoplay?: boolean;
    dots?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    [key: string]: unknown;
  }

  export default class Slider extends React.Component<Settings> {}
}
