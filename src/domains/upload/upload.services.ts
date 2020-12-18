import axios, { AxiosRequestConfig } from 'axios';
import { ApiResponse } from '../../models/ApiResponse';

export const uploadFileRequest = async (
  request: FormData,
  progressCallback?: (progressEvent: ProgressEvent) => void
): Promise<ApiResponse<string[]>> => {
  const config: AxiosRequestConfig = {
    headers: { 'content-type': 'multipart/form-data' },
    onUploadProgress: progressCallback,
  };
  const response = await axios.post('/api/upload', request, config);

  return response.data;
};

export const generateUploadProgressPercentage = (event: ProgressEvent): number => {
  return Math.round((event.loaded * 100) / event.total);
};
