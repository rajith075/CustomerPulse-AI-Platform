export interface CustomerDetail {
  [key: string]: unknown;
}

export interface CustomerDetailResponse {
  success: boolean;
  project_id: string;
  customer: CustomerDetail;
}