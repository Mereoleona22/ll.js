\# Weather JS

A simple client-side weather app that fetches current conditions from OpenWeather and renders a clean, animated UI.

\## Features
- Search weather by city name
- Displays temperature (°C), humidity, description, and an emoji based on conditions
- Friendly error state for invalid cities or network issues
- Styled glassmorphism UI with subtle animations

\## Project Structure
- index.html – App markup and form
- index.js – Weather logic and API calls
- style.css – UI styling and animations
- learnjs.js – Personal JavaScript practice file (not used by the app)
- \*.json – Sample JSON files (not used by the app)

\## Getting Started
1. Open index.html in your browser.
2. Enter a city name and click “Get Weather”.

No build step or dependencies are required.

\## Configuration
The OpenWeather API key is defined in index.js as `apiKey`.

If you want to use your own key:
1. Create an account at OpenWeather.
2. Replace the `apiKey` value in index.js.

\## Notes
- Temperature is returned in Kelvin and converted to Celsius in the UI.
- This is a front-end only demo; API key is visible in the client.

\## License
MIT
