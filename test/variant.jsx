import React from 'react'
import userEvent from '@testing-library/user-event'
import { it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider, useTheme } from '../lib/index'

const Variant = () => {
  const { variant, setVariant } = useTheme()
  return (
    <>
      <div data-testid="variant">{variant}</div>
      <button
        data-testid="setRed"
        onClick={() => setVariant('red')}
      >
        Set Red
      </button>
      <button
        data-testid="setGreen"
        onClick={() => setVariant('green')}
      >
        Set Green
      </button>
      <button
        data-testid="setBlue"
        onClick={() => setVariant('blue')}
      >
        Set Blue
      </button>
    </>
  )
}

it(
  'can toggle themes',
  async () => {
    render(
      <ThemeProvider defaultVariant='orange'>
        <Variant/>
      </ThemeProvider>
    )
    const variant     = screen.getByTestId('variant')
    const setRed      = screen.getByTestId('setRed')
    const setGreen    = screen.getByTestId('setGreen')
    const setBlue     = screen.getByTestId('setBlue')

    // defaultVariant should set this to orange
    expect(variant).toHaveTextContent('orange')

    // set red
    await userEvent.click(setRed)
    expect(variant).toHaveTextContent('red')

    // set green
    await userEvent.click(setGreen)
    expect(variant).toHaveTextContent('green')

    // set blue
    await userEvent.click(setBlue)
    expect(variant).toHaveTextContent('blue')
  }
)
