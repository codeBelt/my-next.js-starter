import axios, { AxiosRequestConfig } from 'axios';
import { ApiResponse } from '../../models/ApiResponse';

export const uploadFileRequest = async (
  formData: FormData,
  progressCallback?: (progressEvent: ProgressEvent) => void
): Promise<ApiResponse<string[]>> => {
  const config: AxiosRequestConfig = {
    headers: { 'content-type': 'multipart/form-data' },
    onUploadProgress: progressCallback,
    validateStatus: (status) => true,
  };
  const response = await axios.post('/api/uploads', formData, config);

  return response.data;
};
