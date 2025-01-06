'use client'

import { ReactNode } from 'react'

import { MantineProvider } from '@mantine/core'

export const WithMantine = ({ children }: { children: ReactNode }) => <MantineProvider>{children}</MantineProvider>
