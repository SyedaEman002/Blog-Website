import Link from "next/link";
const Contact=() =>{
  return (
    <div className="flex flex-col items-center justify-center bg-rose-400">
      <Header />
      <h1 className="text-4xl font-bold text-blue-700">Contact Us</h1>
      <p className="text-[24px] mt-4 text-black">Leave Your Message In The Below Form!</p>
     <div className="flex items-center justify-center bg-rose-300 p-[144px]">
      <form  className="max-w-full p-[116px] bg-rose-300 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center mb-[14px] text-black">User Form</h2>
        <div className="mb-[14px]">
          <label htmlFor="name" className="block text-sm font-medium text-black">Name</label>
          <input
            type="text"
            id="name"
            name="name"
           className="mt-1 p-2 mx-w-full border border-black rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-medium text-black">Contact</label>
          <input
            type="text"
            id="contact"
            name="contact"
            className="mt-1 p-2 mx-w-full border border-black rounded-md"
          />
        </div><div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-black">Email</label>
          <input
            type="email"
            id="email"
            name="email"
           className="mt-1 p-2 mx-w-full border border-black rounded-md"
          />
        </div>
<div className="mb-4">
          <label htmlFor="comments" className="block text-sm font-medium text-black">Comments</label>
          <textarea
            id="comments"
            name="comments"
          className="mt-1 p-2 mx-w-full border border-black rounded-md"
            rows={4}
          />
        </div>
<div className="mb-4">
          <button
            type="submit"
            className="mx-w-full py-2 px-4 bg-rose-400 text-black hover:text-black rounded-md">Submit</button>
        </div>
      </form>
    </div>
</div>
  )
}
function Header() {
  return (
    <nav className="w-full bg-rose-400 p-4 text-white flex justify-center space-x-12">
    <Link href="/" className="text-[24px] hover:text-black">
      Home
    </Link>
    <Link href="/About" className="text-[24px] hover:text-black">
      About
    </Link>
    <Link href="/Contact" className="text-[24px] hover:text-black">
      Contact
    </Link>
    </nav>
  )
}
export default Contact;

