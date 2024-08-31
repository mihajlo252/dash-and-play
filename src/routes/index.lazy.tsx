import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createLazyFileRoute("/")({
    component: Home,
});

function Home() {
    return (
      <motion.div className="" initial={{ opacity: 0 }} animate={{ opacity: 1 }} >
      <button
          className="btn btn-ghost"
      >
          Upload edit
      </button>
    </motion.div>
    );
}
