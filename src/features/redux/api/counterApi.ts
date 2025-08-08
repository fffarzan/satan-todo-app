export type ResponseDTO<T> = Promise<T>

export interface fetchCountResponse {
  data: number,
}

export const fetchCount = (amount = 1): ResponseDTO<fetchCountResponse> => new Promise<fetchCountResponse>(
  resolve => setTimeout(() => resolve({ data: amount }), 500),
)