import React, { memo } from 'react';

interface ImageProps {
    src: string;
    alt?: string;
    style?: React.CSSProperties;
}

const Image = ({ src, alt, style }: ImageProps) => {
  return <img src={src} alt={alt} style={style} />;
};

export default memo(Image);