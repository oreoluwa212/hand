# Hand

This is a React application built using Vite, featuring various sections such as a landing page, a contact form with validation, and a success page after form submission. Tailwind CSS is used for styling.

## Table of Contents

- [Project Structure](#project-structure)
- [Components](#components)
- [Validation](#validation)
- [Routing](#routing)

## Project Structure

```
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── assets
│   │   ├── twoPeople.png
│   │   └── ...
│   ├── components
│   │   ├── inputComponents
│   │   │   ├── InputField.jsx
│   │   │   └── TextareaField.jsx
│   │   ├── textComponents
│   │   │   └── HeaderText.jsx
│   │   ├── ContactForm.jsx
│   │   └── ...
│   ├── pages
│   │   ├── LandingPage.jsx
│   │   ├── SuccessPage.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── index.jsx
│   └── ...
├── .gitignore
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── README.md
└── ...
```

## Components

### `InputField` Component

A reusable input field component used in forms.

### `TextareaField` Component

A reusable textarea field component used in forms.

### `HeaderText` Component

A reusable header text component used for section headings.

### `ContactForm` Component

The main contact form component with validation and submission handling.

### `SuccessPage` Component

The page displayed after a successful form submission.

## Validation

Form validation is handled in the `ContactForm` component using regular expressions and error handling. Errors are displayed using `react-toastify`.

### Validation Rules:

- **Name**: Required
- **Email**: Must be a valid email format
- **Website URL**: Must be a valid URL format
- **Project Details**: Required

## Routing

Routing is set up using `react-router-dom`. The main routes include:

- `/`: The landing page
- `/success`: The success page displayed after a successful form submission

## Tailwind CSS

Tailwind CSS is used for styling the application. Configuration files include `tailwind.config.js` and `postcss.config.js`.