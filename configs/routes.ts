const APP_ROUTES = {
  home: "/",
  jobs: "/jobs",
  masterClass: "/event",
  forSale: "/for-sale",
  legal: "/legal",
  customerService: "/customer-service",
  requestSupport: "/request-support",
  aboutNailzone: "/about-nailszone",
  addNailzoneToYourDevice: "/add-nailszone-to-your-device",
  jobDetail: (jobId: string) => `/jobs/${jobId}`,
  forSaleDetail: (urlKey: string) => `/for-sale/${urlKey}`,
  login: "/login",
  loginPassword: (phoneNumber: string) =>
    `/login/password?phoneNumber=${phoneNumber}`,
} as const

export { APP_ROUTES }
