import { Story, Meta } from '@storybook/react/types-6-0';

import { Button } from '.';

export default {
  title: 'components/Button',
  component: Button,
} as Meta;

export const button: Story = () => <Button />;
