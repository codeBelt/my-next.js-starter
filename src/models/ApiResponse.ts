export type SuccessfulResponse<T> = { data: T; error?: null; statusCode?: number };
export type UnsuccessfulResponse<E> = { data?: null; error: E; statusCode?: number };

export interface IApiError<E = any> {
  message: string;
  raw: E | null;
}

export type ApiResponse<T, E = IApiError> = SuccessfulResponse<T> | UnsuccessfulResponse<E>;
