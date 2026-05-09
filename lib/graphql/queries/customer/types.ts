import { Customer } from "@/types/customer"

interface GetCustomerProfileResponse {
  customerProfile: Customer
}

interface GetCustomerProfileVariables {
  customerId: string
}

export type { GetCustomerProfileResponse, GetCustomerProfileVariables }
