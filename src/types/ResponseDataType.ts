export type Place = '성북구' | '중랑구' | '강남구' | '노원구';

export interface AreaData {
  id: Place;
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
