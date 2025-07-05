import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import FAQList from './FAQList'

describe('FAQList', () => {
  it('renders FAQ sections', () => {
    render(<FAQList />)
    
    // Check if main sections are rendered
    expect(screen.getByText('Installation & Setup')).toBeInTheDocument()
    expect(screen.getByText('Privacy & Security')).toBeInTheDocument()
    expect(screen.getByText('Supported Formats & Languages')).toBeInTheDocument()
    expect(screen.getByText('Processing & Performance')).toBeInTheDocument()
    expect(screen.getByText('Export & Output')).toBeInTheDocument()
    expect(screen.getByText('Troubleshooting')).toBeInTheDocument()
  })

  it('renders FAQ questions and answers', () => {
    render(<FAQList />)
    
    // Check if some key questions are rendered
    expect(screen.getByText('What are the system requirements?')).toBeInTheDocument()
    expect(screen.getByText('Is my data safe with Whisperly?')).toBeInTheDocument()
    expect(screen.getByText('What audio formats are supported?')).toBeInTheDocument()
  })

  it('has proper structure with sections and cards', () => {
    render(<FAQList />)
    
    // Check if the main container exists
    const container = screen.getByText('Installation & Setup').closest('div')
    expect(container).toHaveClass('space-y-8')
  })
})
