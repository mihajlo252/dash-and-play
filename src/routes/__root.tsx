import { createRootRoute, Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

export const Route = createRootRoute({
  component: () => (
    <>
      <div className="flex gap-2 p-2">
        <Link to="/" className="text-red-400 no-underline [&.active]:font-bold">
          Home
        </Link>
      </div>

      <Outlet  />
      <TanStackRouterDevtools />
    </>
  ),
})
