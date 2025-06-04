Here's a comprehensive Storybook story file for the InfoCard component:

```typescript
// InfoCard.stories.tsx
import React from 'react';
import { Meta, Story } from '@storybook/react';
import { InfoCard, InfoCardProps, InfoCardSize, InfoCardVariant } from './InfoCard';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/Cards/InfoCard',
  component: InfoCard,
  parameters: {
    docs: {
      description: {
        component: `
          InfoCard is a versatile card component used to display information with optional interactive elements.
          It supports different sizes and visual variants to accommodate various use cases throughout the application.
          
          ## Usage
          Use InfoCard when you need to:
          - Display contained content with a clear hierarchy
          - Present information with optional call-to-action
          - Create consistent card-based layouts
          
          ## Design Tokens
          - Uses primary and secondary color schemes
          - Follows spacing system for padding (--spacing-md, --spacing-lg)
          - Typography scales based on card size
        `
      }
    }
  },
  argTypes: {
    title: {
      description: 'Main heading text of the card',
      control: 'text'
    },
    content: {
      description: 'Body content to be displayed in the card',
      control: 'text'
    },
    buttonText: {
      description: 'Optional button label - if provided, shows a button',
      control: 'text'
    },
    size: {
      description: 'Controls the overall size of the card',
      control: 'select',
      options: Object.values(InfoCardSize),
      defaultValue: InfoCardSize.MEDIUM
    },
    variant: {
      description: 'Visual style variant of the card',
      control: 'select',
      options: Object.values(InfoCardVariant),
      defaultValue: InfoCardVariant.PRIMARY
    },
    disabled: {
      description: 'Disables all interactions with the card',
      control: 'boolean',
      defaultValue: false
    },
    onButtonClick: {
      description: 'Handler for button click events',
      action: 'clicked'
    },
    className: {
      description: 'Additional CSS class names',
      control: 'text'
    }
  }
} as Meta;

// Template
const Template: Story<InfoCardProps> = (args) => <InfoCard {...args} />;

// Default Story
export const Default = Template.bind({});
Default.args = {
  title: 'Featured Content',
  content: 'This is a sample info card displaying some important information.',
  buttonText: 'Learn More',
  size: InfoCardSize.MEDIUM,
  variant: InfoCardVariant.PRIMARY,
  onButtonClick: action('button-clicked')
};

// Size Variants
export const Small = Template.bind({});
Small.args = {
  ...Default.args,
  size: InfoCardSize.SMALL,
  title: 'Small Card'
};

export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  size: InfoCardSize.MEDIUM,
  title: 'Medium Card'
};

export const Large = Template.bind({});
Large.args = {
  ...Default.args,
  size: InfoCardSize.LARGE,
  title: 'Large Card'
};

// Style Variants
export const Primary = Template.bind({});
Primary.args = {
  ...Default.args,
  variant: InfoCardVariant.PRIMARY,
  title: 'Primary Variant'
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  variant: InfoCardVariant.SECONDARY,
  title: 'Secondary Variant'
};

// States
export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  disabled: true,
  title: 'Disabled Card'
};

export const WithoutButton = Template.bind({});
WithoutButton.args = {
  ...Default.args,
  buttonText: undefined,
  title: 'No Button Card'
};

// Complex Example
export const ComplexExample = Template.bind({});
ComplexExample.args = {
  title: 'Premium Feature',
  content: `This premium feature includes multiple lines of content.
    You can upgrade your account to access all features.
    Contact support for more information.`,
  buttonText: 'Upgrade Now',
  size: InfoCardSize.LARGE,
  variant: InfoCardVariant.PRIMARY,
  onButtonClick: action('upgrade-clicked')
};

// Grid Layout Example
export const GridLayout = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
    <InfoCard
      title="Card 1"
      content="First card content"
      buttonText="Action"
      size={InfoCardSize.SMALL}
      variant={InfoCardVariant.PRIMARY}
    />
    <InfoCard
      title="Card 2"
      content="Second card content"
      buttonText="Action"
      size={InfoCardSize.SMALL}
      variant={InfoCardVariant.SECONDARY}
    />
    <InfoCard
      title="Card 3"
      content="Third card content"
      buttonText="Action"
      size={InfoCardSize.SMALL}
      variant={InfoCardVariant.PRIMARY}
    />
  </div>
);
GridLayout.parameters = {
  docs: {
    description: {
      story: 'Example of InfoCards arranged in a grid layout'
    }
  }
};
```

This Storybook story file provides:

1. **Comprehensive Meta Configuration**:
   - Detailed component description
   - Usage guidelines
   - Design token references
   - Organized under Components/Cards category

2. **Extensive Controls**:
   - All props configured with appropriate control types
   - Detailed descriptions for each prop
   - Action handlers for interactive elements

3. **Multiple Story Variants**:
   - Default usage example
   - Size variations (Small, Medium, Large)
   - Style variants (Primary, Secondary)
   - State examples (Disabled, Without Button)
   - Complex usage example
   - Grid layout demonstration

4. **Rich Documentation**:
   - Component purpose and usage
   - Design system integration
   - Interactive examples
   - Layout patterns

The stories cover all component variants and provide a good foundation for both development and documentation purposes.