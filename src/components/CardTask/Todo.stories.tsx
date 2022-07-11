import { Story, Meta } from '@storybook/react/types-6-0';

import { CardTask } from '.';

export default {
  title: 'components/CardTask',
  component: CardTask,
} as Meta;

export const cardTask: Story = () => <CardTask />;
