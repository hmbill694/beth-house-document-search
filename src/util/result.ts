export type OkResult<T> = { success: true; data: T };
export type ErrorResult = { success: false; error: string };

export type Result<T> = OkResult<T> | ErrorResult;
