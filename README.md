# Meme Generator

A simple React app that allows users to generate random memes and customize the text.

## Features
- Fetches meme images from the Imgflip API.
- Allows users to input top and bottom text for the meme.
- Generates a random meme image when the button is clicked.

## Technologies Used
- React.js (useState, useEffect)
- Fetch API

## Installation & Usage
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/meme-generator.git
   ```
2. Navigate to the project directory:
   ```sh
   cd meme-generator
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## How It Works
- The app fetches a list of memes from the Imgflip API when it loads.
- Clicking the button selects a random meme from the list and updates the displayed image.
- Users can enter custom text for the meme using input fields.

## File Structure
```
/meme-generator
│── src
│   ├── components
│   │   ├── Main.js (Main component for generating memes)
│   ├── App.js (Root component)
│   ├── index.js (Entry point for React)
│── public
│── package.json
│── README.md (This file)
```

## API Used
- Imgflip API: `https://api.imgflip.com/get_memes`

## Contributions
Contributions are welcome! Feel free to fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

