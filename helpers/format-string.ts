const joinText = ({
  parts,
  separator = " ",
}: {
  parts: Array<string | undefined | null>
  separator?: string
}) => {
  return parts.filter(Boolean).join(separator).trim()
}

const normalizeText = (value?: string | null, fallback = "") => {
  return value?.trim() || fallback
}

const getFirstLetter = (value?: string | null, fallback = "") => {
  const trimmed = value?.trim()
  if (!trimmed) return fallback
  return trimmed.charAt(0)
}

export { joinText, normalizeText, getFirstLetter }
