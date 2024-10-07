import { motion } from "framer-motion"
import { Link } from "@tanstack/react-router"
import { useCharacterStore } from "../store/characterStore";
// import { getData } from "../utilities/getData";
import { useEffect } from "react";

export const Navigation = () => {

    const {setCharacter} : CharacterStore = useCharacterStore();


    useEffect(() => {
      setCharacter()
    }, [])
    
  return (
    <motion.nav className="flex gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Link to="/" className="uppercase text-neutral no-underline [&.active]:font-bold">
          Dash&Play
        </Link>
      </motion.nav>
  )
}
