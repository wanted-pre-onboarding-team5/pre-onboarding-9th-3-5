export interface ChartData {
  id: string;
  value_area: number;
  value_bar: number;
}

export interface responseData {
  type: string;
  version: number;
  response: {
    [key: string]: {
      id: string;
      value_area: number;
      value_bar: number;
    };
  };
}
