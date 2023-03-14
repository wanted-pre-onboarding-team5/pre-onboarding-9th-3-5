export type MockData = {
  type: string;
  version: number;
  response: {
    [key: string]: {
      id: string;
      value_area: number;
      value_bar: number;
    };
  };
};
