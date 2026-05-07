const normalizePhoneNumber = (phoneNumber: string): string => {
  return phoneNumber.replace(/^\+/, "")
}

export { normalizePhoneNumber }
