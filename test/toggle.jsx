import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider, Buttons, Status } from './lib/index'

it(
  'can toggle themes',
  async () => {
    render(
      <Provider>
        <Status/>
        <Buttons/>
      </Provider>
    )
    const setLight    = screen.getByTestId('setLight')
    const setDark     = screen.getByTestId('setDark')
    const toggleTheme = screen.getByTestId('toggleTheme')
    const theme       = screen.getByTestId('theme')
    const isDark      = screen.getByTestId('isDark')
    const isLight     = screen.getByTestId('isLight')

    // set light
    await userEvent.click(setLight)
    expect(theme).toHaveTextContent('light')
    expect(isDark).toHaveTextContent('no')
    expect(isLight).toHaveTextContent('yes')

    // set dark
    await userEvent.click(setDark)
    expect(theme).toHaveTextContent('dark')
    expect(isDark).toHaveTextContent('yes')
    expect(isLight).toHaveTextContent('no')

    // toggle to light
    await userEvent.click(toggleTheme)
    expect(theme).toHaveTextContent('light')
    expect(isDark).toHaveTextContent('no')
    expect(isLight).toHaveTextContent('yes')

    // toggle to dark
    await userEvent.click(toggleTheme)
    expect(theme).toHaveTextContent('dark')
    expect(isDark).toHaveTextContent('yes')
    expect(isLight).toHaveTextContent('no')
  }
)
