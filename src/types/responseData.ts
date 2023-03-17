import { CHART_BG_COLOR } from '@/constants/chart';

export type Id = keyof typeof CHART_BG_COLOR;

export interface AreaData {
  id: Id;
  value_area: number;
  value_bar: number;
}

export interface ResponseData {
  [key: string]: AreaData;
}

export interface FlexsysApi {
  response: ResponseData;
  type: string;
  version: number;
}
