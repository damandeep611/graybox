import { ModeToggle } from "./mode-toggle";

export default function Navbar(){
  return(
    <header className=" h-16 flex items-center justify-between px-8 border-b border-gray-500">
      <div>
        <span>OpenX</span>
      </div>
      <div>
        <ModeToggle/>
      </div>
    </header>
  )
}