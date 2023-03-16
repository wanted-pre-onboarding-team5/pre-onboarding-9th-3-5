export interface MockData {
  [key: string]: {
    id: string;
    value_area: number;
    value_bar: number;
  };
}

export interface ProcessChartData {
  labels: string[];
  ids: string[];
  areaData: number[];
  barData: number[];
}
