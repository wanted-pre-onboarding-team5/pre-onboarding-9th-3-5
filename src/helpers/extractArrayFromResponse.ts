import type { MockDataType, IDType } from '@/types/mockData';

export type ExtractedArrayDataType = {
  labelArray: string[];
  idArray: IDType[];
  areaDataArray: number[];
  barDataArray: number[];
};

const extractArrayFromResponse = (mockData: MockDataType) => {
  const extractedArrayData: ExtractedArrayDataType = {
    labelArray: [],
    idArray: [],
    areaDataArray: [],
    barDataArray: [],
  };

  for (const [key, value] of Object.entries(mockData.response)) {
    const { id, value_area, value_bar } = value;
    extractedArrayData.labelArray.push(key);
    extractedArrayData.idArray.push(id);
    extractedArrayData.areaDataArray.push(value_area);
    extractedArrayData.barDataArray.push(value_bar);
  }

  return extractedArrayData;
};

export default extractArrayFromResponse;
