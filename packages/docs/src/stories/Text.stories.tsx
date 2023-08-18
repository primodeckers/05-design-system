import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@primodeckers-ignite-ui/react'

export default {
  title: 'Tipography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children:
      'lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
