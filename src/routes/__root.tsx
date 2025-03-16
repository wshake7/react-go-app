import NotFount from '@/components/NotFount'
import { createRootRouteWithContext, Outlet, useNavigate } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { useCookieState, useMount } from 'ahooks'

const auth = {
  isAuthenticated: false,
}

type IAuth = typeof auth

interface RouterContext {
  auth: IAuth
}

export const Route = createRootRouteWithContext<RouterContext>()({
  notFoundComponent: () => <NotFount />,
  component: Root,
})

function Root() {
  const [token] = useCookieState('token')
  const navigate = useNavigate()
  useMount(() => {
    if (!token) {
      navigate({
        to: '/login',
      })
    }
  })

  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  )
}
