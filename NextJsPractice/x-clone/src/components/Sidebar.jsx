import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-4 p-3">
      <Link href="/">
        <FaXTwitter className="w-16 h-16 cursor-pointer hover:bg-gray-100 rounded-full transition-all duration-200" />
      </Link>
      <Link href="/" className="flex items-center w-fit gap-2 hover:bg-gray-100 rounded-full transition-all duration-200">
        <HiHome className="w-7 h-7" />
        <span className="font-bold hidden lg:block">Home</span>
      </Link>
      <button className="bg-blue-400 text-white w-48 h-9 rounded-full hover:brightness-95 transition-all duration-200 shadow-md hidden lg:block">
        Sign In
      </button>
    </div>
  )
}
