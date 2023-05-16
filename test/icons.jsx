import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Provider, Switchers, Status } from './lib/index.jsx'

it(
  'can toggle themes',
  async () => {
    const { container } = render(
      <Provider>
        <Status/>
        <Switchers/>
      </Provider>
    )
    const switchers = container.querySelectorAll('div.night-and-day--switcher')
    const sunrise   = switchers[0]
    const nightfall = switchers[1]
    const theme     = screen.getByTestId('theme')
    const isDark    = screen.getByTestId('isDark')
    const isLight   = screen.getByTestId('isLight')

    expect(sunrise.querySelector('div.night-and-day--caption'))
      .toHaveTextContent('Light')
    expect(nightfall.querySelector('div.night-and-day--caption'))
      .toHaveTextContent('Dark')

    // set light
    await userEvent.click(sunrise)
    expect(theme).toHaveTextContent('light')
    expect(isDark).toHaveTextContent('no')
    expect(isLight).toHaveTextContent('yes')

    // set dark
    await userEvent.click(nightfall)
    expect(theme).toHaveTextContent('dark')
    expect(isDark).toHaveTextContent('yes')
    expect(isLight).toHaveTextContent('no')

    // set light again
    await userEvent.click(sunrise)
    expect(theme).toHaveTextContent('light')
    expect(isDark).toHaveTextContent('no')
    expect(isLight).toHaveTextContent('yes')

  }
)
