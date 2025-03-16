

import type { AttributifyAttributes } from '@unocss/preset-attributify'

declare module 'react' {
  interface HTMLAttributes<T> extends AttributifyAttributes {}
}

declare module '*.tsx' {
  import { ComponentType } from 'react'

  const React: ComponentType<any>
  export default React
}
