import { createFileRoute } from '@tanstack/react-router'
import { Button } from 'antd'

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <>
    <div>Hello "/"!</div>
    <Button>按钮</Button>
    </>
  )
}
