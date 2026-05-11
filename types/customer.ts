const CustomerTypes = {
  Member: "1",
  Manicurist: "2",
  NailMaster: "3",
} as const

type CustomerType = (typeof CustomerTypes)[keyof typeof CustomerTypes]

type Customer = {
  email: string
  firstname: string
  lastname: string
  avatar: string
  account_type: CustomerType
  url_key: string
}

export { CustomerTypes }

export type { Customer }
