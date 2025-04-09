"use client"
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react";

export default function ThemeSwitcher(){
  const {theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(()=> {
    setMounted(true)
  },[])

  if(!mounted) return null;
  const isDark = theme === "dark";
  return(
    <button onClick={()=> setTheme(theme === "dark" ? "light" : "dark")} className="p-2" aria-label="Toggle Theme">
      {isDark ? <Sun/> : <Moon/>}
    </button>
  )
}