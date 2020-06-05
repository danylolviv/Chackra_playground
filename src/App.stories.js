import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';
import {OnboardingForm} from './OnboardinForm';

export default {
  title: 'Forms',
  component: OnboardingForm,
};

export const SampleOnboardingForm = () => <OnboardingForm />;

export const Emoji = () => (
  <Button onClick={action('clicked')}>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯😀 😎 👍 💯
    </span>
  </Button>
);
