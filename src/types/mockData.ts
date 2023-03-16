import ID_COLOR_MAP from '@/constants/chart';

export type IDType = keyof typeof ID_COLOR_MAP;

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
