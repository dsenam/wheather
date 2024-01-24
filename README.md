# WeatherApp

WeatherApp is a web application that provides current weather information and forecasts for the upcoming days.

## Getting Started

## Project Setup

First, install the project dependencies:

```bash
yarn install
```

First, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Architeture
In this project, we chose to use the Custom Hooks design pattern. Custom Hooks in React allow us to extract component logic into reusable functions. This choice was driven by the need for cleaner code and better reusability. With Custom Hooks, we can encapsulate logic that might be used across multiple components into a single function, making our components more readable and maintainable. It also helps in avoiding duplication of code, thus adhering to the DRY (Don’t Repeat Yourself) principle. Furthermore, Custom Hooks work perfectly with the existing React Hooks like useState, useEffect, and others, allowing us to easily manage state and side effects in our functional components. Overall, Custom Hooks provide a powerful and flexible way to reuse functionality across our React application.

## Features

- Location search using Google Maps
- Displays current temperature, weather conditions, humidity, and wind speed
- Provides a 5-day weather forecast
- Allows toggling between Celsius and Fahrenheit

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Technologies Used

- React
- Next.js
- Styled Components
- Google Maps API
- Weather API
- Jest
- React Testing Library
