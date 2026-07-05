export interface Customer {
  [key: string]: unknown;
}

export interface CustomerResponse {

  success: boolean;

  project_id: string;

  total_customers: number;

  customers: Customer[];

}