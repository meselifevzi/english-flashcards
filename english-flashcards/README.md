# English Flashcards Application

This project is a web-based English flashcard application designed to help users learn and memorize English vocabulary through interactive flashcards.

## Technology Stack
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for styling.
- **Supabase**: An open-source Firebase alternative for database and authentication.
- **JavaScript**: The programming language used for the application.

## Features
- Create, view, and navigate through English flashcards.
- User authentication and data management using Supabase.
- Responsive design for optimal viewing on various devices.
- Dark mode support and level-based card filtering.

## Project Structure
```
english-flashcards
├── src
│   ├── components
│   │   ├── Card.jsx
│   │   ├── CardContainer.jsx
│   │   ├── LevelBadge.jsx
│   │   └── Navigation.jsx
│   ├── hooks
│   │   └── useSupabase.js
│   ├── styles
│   │   └── index.css
│   ├── config
│   │   └── supabase.js
│   ├── App.jsx
│   └── main.jsx
├── public
│   └── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd english-flashcards
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage
To start the development server, run:
```bash
npm start
```
Open your browser and navigate to `http://localhost:3000` to view the application.

## License
This project is licensed under the MIT License.