import React from 'react';
import { Svg, Path, Circle, G } from 'react-native-svg';

const ArrowUp = () => (
<Svg width={36} height={36}>
<Circle cx={18} cy={18} r={18} fill="#303030" />
<Path stroke="#FFF" strokeWidth={1.8} d="M13.5 20.5l4.5-4.5 4.5 4.5" />
</Svg>
);

export default ArrowUp;