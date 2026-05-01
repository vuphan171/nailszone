const joinText = (...parts: Array<string | undefined | null>) => {
  return parts.filter(Boolean).join(" ").trim()
}

const normalizeText = (value?: string | null, fallback = "") => {
  return value?.trim() || fallback
}

export { joinText, normalizeText }
