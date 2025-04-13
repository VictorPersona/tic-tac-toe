# Tic-Tac-Toe Game

This project is a simple implementation of the classic Tic-Tac-Toe game built using React and Vite. It features a responsive design and interactive gameplay.

## Features

- Playable Tic-Tac-Toe game with a 3x3 grid.
- Tracks player turns and determines the winner.
- Reset functionality to restart the game.
- Built with React for a component-based architecture.
- Styled with modern CSS for a clean and responsive UI.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/VictorPersona/tic-tac-toe.git
    cd tic-tac-toe
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm run dev
    ```

4. Open your browser and navigate to `http://localhost:5173`.

## Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the project for production.
- `npm run preview`: Previews the production build.
- `npm run lint`: Runs ESLint to check for code quality issues.

## Project Structure

```
tic-tac-toe/
├── src/
│   ├── components/
│   │   └── TicTacToe/
│   │       ├── TicTacToe.jsx
│   │       └── TicTacToe.css
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── .gitignore
├── package.json
├── vite.config.js
└── README.md
```

## Technologies Used

- **React**: For building the user interface.
- **Vite**: For fast development and build tooling.
- **CSS**: For styling the application.

## How to Play

1. The game starts with Player X.
2. Click on any empty box to make your move.
3. The game alternates between Player X and Player O.
4. The first player to align three of their symbols horizontally, vertically, or diagonally wins.
5. Click the "Reset" button to restart the game.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Built using [Vite](https://vitejs.dev/) and [React](https://reactjs.org/).
- Inspired by the classic Tic-Tac-Toe game.

Enjoy playing Tic-Tac-Toe!
