import React from 'react';
import {Path, Svg} from 'react-native-svg';

import {COLORS} from '@utils/constants';

export * from './Logo';

type IconProps = {
  size?: number;
  active?: boolean;
  activeColor?: string;
  inactiveColor?: string;
};

export const StarSvg = (props: IconProps) => {
  const {
    active = true,
    activeColor = COLORS.primary,
    inactiveColor = COLORS.inactive,
    size = 24,
  } = props;
  return (
    <Svg width={size} height={size} viewBox="0 0 29 27" fill="none">
      <Path
        d="M14.5 0l4.517 8.283 9.273 1.736-6.481 6.856 1.214 9.356-8.523-4.046-8.523 4.046 1.214-9.356L.71 10.019l9.273-1.736L14.5 0z"
        fill={active ? activeColor : inactiveColor}
      />
    </Svg>
  );
};

export const HamburguerSvg = (props: IconProps) => {
  const width = props.size || 21;
  const height = width * (13 / 21);
  const activeColor = props.activeColor || COLORS.primary;
  return (
    <Svg width={width} height={height} viewBox="0 0 21 13" fill="none">
      <Path
        d="M0 .975a.97.97 0 01.288-.69A.99.99 0 01.984 0h19.032a.99.99 0 01.696.286.97.97 0 010 1.378.99.99 0 01-.696.286H.984a.99.99 0 01-.696-.286A.97.97 0 010 .975zM0 6.5a.97.97 0 01.288-.69.99.99 0 01.696-.285h19.032a.99.99 0 01.696.286.97.97 0 010 1.378.99.99 0 01-.696.286H.984a.99.99 0 01-.696-.286A.97.97 0 010 6.5zm.984 4.55a.989.989 0 00-.696.286.97.97 0 000 1.378.989.989 0 00.696.286h19.032a.989.989 0 00.696-.286.97.97 0 000-1.378.989.989 0 00-.696-.286H.984z"
        fill={activeColor}
      />
    </Svg>
  );
};
