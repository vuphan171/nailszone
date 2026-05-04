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

export { joinText, normalizeText }
