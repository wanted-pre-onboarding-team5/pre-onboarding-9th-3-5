import type { FlexsysApi, Id } from '@/types/responseData';

export type ExtractedArrayData = {
  labelArray: string[];
  idArray: Id[];
  areaDataArray: number[];
  barDataArray: number[];
};

const extractArrayFromResponse = (mockData: FlexsysApi) => {
  const extractedArrayData: ExtractedArrayData = {
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
