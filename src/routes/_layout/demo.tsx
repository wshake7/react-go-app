import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_layout/demo')({
  component: () => <div>Hello /_layout/test!</div>,
})
