import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
// import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { motion } from "framer-motion";

export const Route = createRootRoute({
  component: () => (
    <div className="flex h-screen flex-col gap-5 px-10 py-5">
      <motion.nav className="flex gap-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Link to="/" className="uppercase text-neutral no-underline [&.active]:font-bold">
          Dash&Play
        </Link>
      </motion.nav>

      <Outlet  />
      {/* <TanStackRouterDevtools /> */}
    </div>
  ),
})
