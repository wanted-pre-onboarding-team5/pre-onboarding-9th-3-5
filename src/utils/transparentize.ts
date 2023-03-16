import colorLib from '@kurkle/color';

export function transparentize(value: string, opacity?: number): string {
  const alpha = opacity ? 1 - opacity : 0.5;
  return colorLib(value).alpha(alpha).rgbString();
}
