'use client'

import { useSyncExternalStore } from 'react'

const emptySubscribe = () => () => {}

// Returns false during SSR/hydration, true once mounted on the client
const useMounted = () => useSyncExternalStore(emptySubscribe, () => true, () => false)

export default useMounted
