import { describe, it, expect, beforeEach, vi } from 'vitest'
import Cookies from 'js-cookie'
import { validateSession, writeSession, getSession } from '@/utils/session'

describe('utils/session', () => {
  beforeEach(() => Cookies.remove('userData'))

  it('redirects to Login when there is no session', () => {
    const replace = vi.fn()
    expect(validateSession({ $router: { replace } })).toBe(false)
    expect(replace).toHaveBeenCalledWith({ name: 'Login' })
  })

  it('stores the credential and redirects to Users', () => {
    writeSession({ username: 'admin', password: '1234' })
    expect(getSession().username).toBe('admin')
    const replace = vi.fn()
    expect(validateSession({ $router: { replace } })).toBe(true)
    expect(replace).toHaveBeenCalledWith({ name: 'Users' })
  })

  it('clears the session on logout', () => {
    writeSession({ username: 'admin' })
    writeSession()
    expect(getSession()).toEqual({})
  })
})
