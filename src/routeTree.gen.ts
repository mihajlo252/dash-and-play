/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const TraitsLazyImport = createFileRoute('/traits')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const TraitsLazyRoute = TraitsLazyImport.update({
  path: '/traits',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/traits.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/traits': {
      id: '/traits'
      path: '/traits'
      fullPath: '/traits'
      preLoaderRoute: typeof TraitsLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  TraitsLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/traits"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/traits": {
      "filePath": "traits.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
