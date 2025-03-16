import { createRouter, RouterProvider } from '@tanstack/react-router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
// Import the generated route tree
import '@/styles/index.css'
import '@ant-design/v5-patch-for-react-19'
import '~/locales/i18n'
import { theme } from './config/theme'
import { routeTree } from './routeTree.gen'

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  context: {
    // auth will initially be undefined
    // We'll be passing down the auth state from within a React component
    auth: {
      isAuthenticated: false,
    },
  },
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const rootElement = document.getElementById('root')!
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <StrictMode>
        <ConfigProvider
          locale={zhCN}
          theme={theme}
        >
          <RouterProvider router={router} />
        </ConfigProvider>
    </StrictMode>,
  )
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
