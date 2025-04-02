# React Router Framework with shadcn/ui Template

A reusable project template that combines React Router with shadcn/ui components and Tailwind CSS for rapid application development.

## Features

- ⚡️ **React + TypeScript** - Built with React 18 and TypeScript for type safety
- 🧩 **shadcn/ui Components** - Beautiful, accessible UI components based on Radix UI
- 🎨 **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- 🧭 **React Router** - Declarative routing for React applications
- 📱 **Responsive Design** - Mobile-first approach for all components and pages
- 🌓 **Light/Dark Mode** - Theme support with system preference detection
- 🔄 **Code Structure** - Clean, modular architecture for maintainability

## Quick Start

```bash
# Clone the repository
git clone git@github.com:onlyoneaman/react-router-framework-shadcn-template.git my-project

# Navigate to project directory
cd my-project

# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

```
react-router-framework-shadcn-template/
├── public/
├── src/
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   ├── layouts/          # Shared layout components
│   ├── lib/              # Utility functions and configurations
│   ├── pages/            # Application pages
│   │   ├── About.tsx     # About page
│   │   ├── Contact.tsx   # Contact page
│   │   └── Home.tsx      # Home page
│   ├── routes/           # React Router configuration
│   ├── styles/           # Global CSS and Tailwind configuration
│   ├── App.tsx           # Main application component
│   ├── main.tsx          # Application entry point
│   └── index.css         # Global styles
├── .eslintrc.json        # ESLint configuration
├── .gitignore            # Git ignore file
├── index.html            # HTML entry point
├── package.json          # Project dependencies and scripts
├── README.md             # Project documentation
├── tailwind.config.js    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

## Pages

The template includes several pre-built pages that you can use as a starting point:

- **Home**: Landing page with hero section and feature highlights
- **About**: Company/project information page with team section
- **Contact**: Contact form with information details

## shadcn/ui Components

This template uses [shadcn/ui](https://ui.shadcn.com/) components, which are built on top of Radix UI and styled with Tailwind CSS. These components are imported directly into your project, allowing for complete customization.

### Key Components

- Button - Versatile button component with various styles
- Card - Container component for grouping related content
- Input/Textarea - Form input components
- Dialog - Modal dialogs for important actions
- And many more...

## Customization

### Themes

The template uses Tailwind CSS for styling. You can customize the color palette in `tailwind.config.js`:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // Customize your colors here
        primary: { /* ... */ },
        secondary: { /* ... */ },
      },
    },
  },
  // ...
}
```

### Adding New Pages

1. Create a new page component in the `src/pages` directory
2. Add the route in `src/routes/index.tsx`:

```tsx
import NewPage from '../pages/NewPage';

// Inside your routes configuration:
{
  path: '/new-page',
  element: <NewPage />
}
```

## Adding New shadcn/ui Components

To add more shadcn/ui components:

```bash
# Install the component
npx shadcn-ui@latest add [component-name]
```

This will add the component to your `src/components/ui` directory.

## Deployment

This template is optimized for deployment to various platforms. Build your project with:

```bash
npm run build
```

The built files will be in the `dist` directory, ready to be deployed to platforms like Vercel, Netlify, or GitHub Pages.

## Support and Questions

If you have any questions or run into issues while using this template, please feel free to:

- Open an issue on GitHub with a detailed description of your problem
- Start a discussion in the repository's Discussions section
- Reach out directly if you need specific assistance

We're committed to making this template as useful and robust as possible, so your feedback is always welcome.

## Best Practices

This template follows several best practices for React and frontend development:

- **Component Composition** - Smaller, focused components that can be composed together
- **Separation of Concerns** - UI components separate from logic and routing
- **Consistent Styling** - Using Tailwind CSS and shadcn/ui design tokens consistently
- **Accessibility** - shadcn/ui components are built with accessibility in mind
- **Performance** - Optimized build configuration and lazy-loaded routes
- **Type Safety** - TypeScript throughout the codebase to prevent common errors
- **Conventional Commits** - Following standard commit message conventions
- **Code Formatting** - ESLint and Prettier for consistent code style

## License

MIT

## Acknowledgements

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [React Router](https://reactrouter.com/)
