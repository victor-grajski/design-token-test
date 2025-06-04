# Design Token Test App

This is a React TypeScript application built specifically to test design token extraction and standardization tools. The app intentionally contains **inconsistent design patterns, redundant components, and varied styling approaches** that typically emerge in scrappy startup codebases.

## Purpose

This codebase serves as a realistic test environment for tools that:
- Extract and standardize color tokens
- Identify and consolidate spacing inconsistencies  
- Normalize typography variations
- Detect redundant components that should be unified

## What's Intentionally Messy

### 🎨 **Inconsistent Colors**
- Multiple shades of blue used inconsistently across buttons
- Different approaches to color definition (hex, rgb, named colors)
- Similar but not identical color values throughout components

### 📏 **Varied Spacing**
- Inconsistent padding/margin values (10px vs 12px vs 14px)
- Mixed units and spacing approaches
- Different border-radius values for similar elements

### 📝 **Typography Chaos**
- Inconsistent font-size values (14px, 15px, 16px for similar text)
- Mixed font-weight approaches (500 vs 600 vs bold)
- Varied line-height and letter-spacing values

### 🔄 **Redundant Components**
The app contains multiple similar components that should clearly be unified:

#### Buttons
- `PrimaryButton` - Standard blue button
- `ActionButton` - Green button with different API
- `SubmitBtn` - Red button with different naming conventions

#### Cards  
- `ProductCard` - Card for product display
- `InfoCard` - Similar card with different styling
- Various inline card components throughout pages

#### Form Inputs
- `TextInput` - Standard form input
- `FormField` - Similar input with different styling and API

#### Badges
- `StatusBadge` - Rounded badge with variants
- `Label` - Similar badge with different styling approach

## Structure

```
src/
├── pages/           # 5 different pages showcasing inconsistencies
│   ├── Dashboard.tsx
│   ├── Products.tsx  
│   ├── Settings.tsx
│   ├── Profile.tsx
│   └── Login.tsx
├── components/
│   ├── Buttons/     # 3 redundant button components
│   ├── Cards/       # 2 redundant card components  
│   ├── Inputs/      # 2 redundant input components
│   ├── Badges/      # 2 redundant badge components
│   └── Navigation/  # Navigation component
└── App.tsx         # Main router setup
```

## Key Inconsistencies for Testing

1. **Color Tokens**: 15+ different color values used inconsistently
2. **Spacing**: 20+ different padding/margin combinations  
3. **Typography**: 10+ font-size variations for similar elements
4. **Component Duplication**: 9 components that could be unified into 4 standard ones
5. **API Inconsistencies**: Different prop names for similar functionality

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner  
- `npm run build` - Builds the app for production

## Live Analysis Ready

This codebase is designed to be analyzed by tools that read React + TypeScript + styled-components repositories from GitHub. The intentional inconsistencies provide a comprehensive test case for design token extraction and component standardization tools.

---

*Perfect for testing design system automation tools! 🛠️*
