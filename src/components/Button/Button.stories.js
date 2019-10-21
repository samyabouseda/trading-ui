import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export const actions = {
    onClick: action('onClick'),
};

storiesOf('Button', module)
    .add('default', () => <Button {...actions} >Hello World!</Button>)
    // .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);