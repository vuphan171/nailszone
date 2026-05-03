import IconContact from "@/public/icons/ic-contact.svg"

const ContactButton = () => {
  return (
    <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-white transition-all duration-300 hover:bg-gray-100">
      <IconContact className="size-5.5 text-primary" />
    </div>
  )
}

export default ContactButton
