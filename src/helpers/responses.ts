export interface MySuccessResponse<T> {
  success: true;
  status: number;
  data: T;
}

export interface MyErrorResponse {
  success: false;
  status: number;
  message: string;
}

export interface MyNotFoundResponse {
  success: false;
  status: number;
  message: string;
}

export type CustomResponse<T> =
  | MySuccessResponse<T>
  | MyErrorResponse
  | MyNotFoundResponse;

export function successResponse<T>(data?: T): MySuccessResponse<T> {
  return { success: true, status: 200, data: data };
}

export function errorResponse(message: string): MyErrorResponse {
  return { success: false, status: 500, message: message };
}

export function notFoundResponse(): MyNotFoundResponse {
  return { success: false, status: 404, message: 'Not Found' };
}
