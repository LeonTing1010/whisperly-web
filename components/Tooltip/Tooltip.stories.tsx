import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from './Tooltip'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    intent: {
      control: { type: 'select' },
      options: ['primary'],
    },
    size: {
      control: { type: 'select' },
      options: ['md'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <button>Hover me</button>,
    content: 'This is a tooltip',
  },
}

export const WithLongContent: Story = {
  args: {
    children: <button>Hover for long tooltip</button>,
    content: 'This is a much longer tooltip that demonstrates how the component handles more text content',
  },
}

export const WithComplexTrigger: Story = {
  args: {
    children: (
      <div className="p-4 bg-blue-500 text-white rounded-lg cursor-pointer">
        Complex trigger element
      </div>
    ),
    content: 'Tooltip for complex trigger',
  },
}
