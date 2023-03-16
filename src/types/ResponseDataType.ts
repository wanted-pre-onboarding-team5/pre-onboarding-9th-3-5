export interface AreaData {
  id: string;
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
