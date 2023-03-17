import colorLib from '@kurkle/color';

export const transparentize = (value: string, opacity?: number) => {
  const alpha = opacity ? opacity : 0.5;
  return colorLib(value).alpha(alpha).rgbString();
};
