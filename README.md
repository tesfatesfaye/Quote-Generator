# Quote Generator
The Quote Generator is a simple React application that fetches quotes from an API and displays them. It allows users to cycle through the quotes by clicking a button. The background color and the quote change with each click, providing a unique visual experience.

## Project Structure

The project is organized with the following main files:

- `App.jsx`: This is the main component of the application. It maintains several states including the current quote, the list of all quotes fetched from the API, the current color value for the background and text, and a state to trigger the transition effect when changing quotes. It also handles fetching the quotes from the API and randomly selecting a quote to display.

- `Quote.jsx`: This is a sub-component used in `App.jsx`. It receives properties from the App component and is responsible for displaying the quote text.

## Running the Project

To run the project, follow these steps:

1. Clone the repository: `git clone https://github.com/tesfatesfaye/Quote-Generator.git`
2. Navigate into the project directory: `cd Quote-Generator`
3. Install the dependencies: `npm install`
4. Start the application: `npm start`
5. The application will start and can be accessed at `http://localhost:3000` in your browser.

## Contributing

Contributions to the project are welcome. Please feel free to fork the repository and submit pull requests.

## Author

Tesfa
