import { Main } from '.'

type BasicComponentProps = {
  title?: string
  description?: string
}

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Title default',
    description: 'Description default'
  }
}

export const Basic = (args: BasicComponentProps) => <Main {...args} />
