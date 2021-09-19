import { render, screen } from '@testing-library/react'

import Map from '..'

describe('Map component', () => {
  it('should render without any marker', () => {
    render(<Map />)

    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render with the marker in the correct place', () => {
    const places = [
      {
        id: '1',
        name: 'Petrópolis',
        slug: 'petropolis',
        location: {
          latidute: 0,
          longitude: 0
        }
      },
      {
        id: '1',
        name: 'Natal',
        slug: 'natal',
        location: {
          latidute: 129,
          longitude: -50
        }
      }
    ]
    render(<Map places={places} />)

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument()
    expect(screen.getByTitle(/natal/i)).toBeInTheDocument()
  })
})
