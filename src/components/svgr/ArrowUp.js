import React from 'react';
import Svg, { G, Path } from 'react-native-svg';

const ArrowUp = () => (
  <Svg width="40" height="40">
    <G fill="none" fillRule="evenodd">
      <Path fill="#303030" d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 38.333c-9.39 0-17-7.61-17-17s7.61-17 17-17 17 7.61 17 17-7.61 17-17 17z" />
      <Path stroke="#FFF" strokeWidth="2" d="M14 23l6-6 6 6" />
    </G>
  </Svg>
);

export default ArrowUp;
