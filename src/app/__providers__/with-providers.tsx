'use client'

import { composeProviders } from '@/src/shared/helpers'

import { WithJotai } from './_with-jotai'
import { WithMantine } from './_with-mantine'
import { WithTanstackQuery } from './_with-tanstack-query'

export const WithProviders = composeProviders(WithMantine, WithTanstackQuery, WithJotai)
