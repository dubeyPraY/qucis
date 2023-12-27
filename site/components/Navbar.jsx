import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="absolute px-12 w-full h-[15vh] flex justify-between items-center text-white text-lg font-regular ">
      <div>QuCIS</div> 
      <ul className="flex gap-12 items-center font-source md:visible invisible">
        <li>
          <Link href="/">About</Link>
        </li>
      
        <li>
          <Link href="/">Publications</Link>
        </li>
        <li>
          <Link href="/">Team</Link>
        </li>
        <li>
          <Link href="/">Funding</Link>
        </li>
        <li className="contact_btn cursor-pointer transition-all">
          <Link href="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
