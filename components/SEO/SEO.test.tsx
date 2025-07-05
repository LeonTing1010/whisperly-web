import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import SEO from './SEO'

// Mock Next.js Head component
jest.mock('next/head', () => {
  return function Head({ children }: { children: React.ReactNode }) {
    return <>{children}</>
  }
})

describe('SEO', () => {
  it('renders with basic props', () => {
    render(
      <SEO
        title="Test Title"
        description="Test Description"
        url="https://example.com"
      />
    )
    
    // Check if title is rendered
    expect(document.title).toBe('Test Title')
  })

  it('renders with keywords', () => {
    render(
      <SEO
        title="Test Title"
        description="Test Description"
        url="https://example.com"
        keywords="test, keywords, seo"
      />
    )
    
    // Check if meta description is present
    const metaDescription = document.querySelector('meta[name="description"]')
    expect(metaDescription).toHaveAttribute('content', 'Test Description')
  })

  it('renders Open Graph tags', () => {
    render(
      <SEO
        title="Test Title"
        description="Test Description"
        url="https://example.com"
      />
    )
    
    // Check if OG tags are present
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    
    expect(ogTitle).toHaveAttribute('content', 'Test Title')
    expect(ogDescription).toHaveAttribute('content', 'Test Description')
    expect(ogUrl).toHaveAttribute('content', 'https://example.com')
  })

  it('renders Twitter Card tags', () => {
    render(
      <SEO
        title="Test Title"
        description="Test Description"
        url="https://example.com"
      />
    )
    
    // Check if Twitter Card tags are present
    const twitterCard = document.querySelector('meta[name="twitter:card"]')
    const twitterTitle = document.querySelector('meta[name="twitter:title"]')
    const twitterDescription = document.querySelector('meta[name="twitter:description"]')
    
    expect(twitterCard).toHaveAttribute('content', 'summary_large_image')
    expect(twitterTitle).toHaveAttribute('content', 'Test Title')
    expect(twitterDescription).toHaveAttribute('content', 'Test Description')
  })
})
