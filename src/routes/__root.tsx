import NotFount from '@/layout/NotFount'
import {
  createRootRouteWithContext,
  Outlet,
  useNavigate,
} from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useCookieState, useMount } from 'ahooks'

interface AuthState {
  isAuthenticated: boolean
}

export interface RouterContext {
  // The ReturnType of your useAuth hook or the value of your AuthContext
  auth: AuthState
}

export const Route = createRootRouteWithContext<RouterContext>()({
  notFoundComponent: () => <NotFount />,
  component: Root,
})

function Root() {
  const [token] = useCookieState('token')
  const navigate = useNavigate()
  useMount(() => {
    // if (!token) {
    //   navigate({
    //     to: '/login',
    //   })
    // }
  })

  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}
