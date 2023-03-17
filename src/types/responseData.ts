import ID_COLOR_MAP from '@/constants/chart';

export type Id = keyof typeof ID_COLOR_MAP;

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
