import colorLib from '@kurkle/color';

import { CHART_OPACITY } from '@/constants/chart';

export function transparentize(value: string, opacity?: number): string {
  const alpha = opacity ? opacity : CHART_OPACITY.default;
  return colorLib(value).alpha(alpha).rgbString();
}
