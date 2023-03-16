import idColorMap from '@/constants/id-color';

export type IDType = keyof typeof idColorMap;

export type MockData = {
  type: string;
  version: number;
  response: {
    [key: string]: {
      id: IDType;
      value_area: number;
      value_bar: number;
    };
  };
};
