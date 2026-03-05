export type ApiErrorResponse = {
  error: string;
  code?: string;
};

export type ApiSuccessResponse<T> = {
  data: T;
};
