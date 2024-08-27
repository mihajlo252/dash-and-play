import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="p-2 flex gap-2">
      Home
    </div>
  )
}

