/* eslint-env browser */

export const isServer = typeof window === 'undefined'

export const isClient = !isServer

export const isDevelopment = (process.env.NODE_ENV || 'development') === 'development'

export const isProduction = !isDevelopment
