**HTML CODE** for the classic _Hangman game_.

**HTML Structure (Document Skeleton):**

- `DOCTYPE html`: This line declares the document type as HTML.
- `<html lang="en">`: This tag defines the root of the HTML document and specifies the language as English.

**Head Section:**

- `<head>`: This section contains meta information about the document.
  - `<meta charset="UTF-8" />`: This meta tag specifies the character encoding as UTF-8, which allows for displaying various characters.
  - `<meta name="viewport" content="width=device-width, initial-scale=1.0" />`: This meta tag ensures proper responsiveness of the web page on different devices by setting the viewport width to the device width and the initial zoom level to 100%.
  - `<link rel="stylesheet" href="style.css" />`: This tag links an external stylesheet file named "style.css" to the HTML document, which likely contains the styling information for the game's visual elements.
  - `<title>Hangman Game</title>`: This tag sets the title of the web page displayed on the browser tab to "Hangman Game".

**Body Section:**

- `<body>`: This section contains the visible content of the web page.

**Game Over Screen:**

- `<div class="gameEnd">`: This `div` element likely represents a container for displaying the game over screen.
  - `<div class="content">`: This nested `div` likely holds the content within the game over screen.
    - `<img src="images/lost.gif" alt="gif" />`: This `img` tag displays an image named "lost.gif", which is probably an animation or image signifying a loss.
    - `<h4>Game Over!</h4>`: This `h4` tag displays the text "Game Over!" as a heading.
    - `<p>The correct word was: <b>alpha</b></p>`: This `p` tag displays a paragraph revealing the correct word that was to be guessed, which is "alpha" in this case. The `<b>` tag makes the word "alpha" bold.
    - `<button class="playAgain">Play Again</button>`: This `button` element creates a button with the text "Play Again", which likely triggers an action to restart the game.

**Game Interface:**

- `<div class="container">`: This `div` element likely represents the main container for the game interface.
  - `<div class="hangBox">`: This nested `div` likely holds elements related to the hangman display.
    - `<img src="images/hangman-0.svg" alt="hangman-img" />`: This `img` tag displays an image named "hangman-0.svg", which is presumably the first stage of the hangman where the stand is intact.
    - `<h1>Hangman Game</h1>`: This `h1` tag displays the heading "Hangman Game" as a title.
  - `<div class="gameBox">`: This nested `div` likely holds the core gameplay elements.
    - `<ul class="queryDisplay">`: This unordered list (`<ul>`) with the class "queryDisplay" is likely meant to display the guessed letters during the game. As of now, it's empty (``), but the commented line shows an example of how a guessed letter "a" might be displayed with the class "letter guessed".
    - `<h4 class="hint">`: This `h4` tag with the class "hint" is likely meant to display a hint for the word to be guessed. The current content is `<b>text</b>`, but it will likely be replaced with an actual hint during the game.
    - `<h4 class="guesses">`: This `h4` tag with the class "guesses" is likely meant to display the number of incorrect guesses made by the player. The current content is `<b>0 / 6</b>`, indicating 0 incorrect guesses out of a maximum of 6 allowed.
    - `<div class="keyboard">`: This nested `div` with the class "keyboard" is likely meant to hold the virtual keyboard that the player will use to guess letters. As of now, it's empty (``), but it would likely contain buttons for each letter of the alphabet during gameplay.

**Javascript References:**

- `<script src="scripts/main-data.js"></script>`: This tag references an external JavaScript file named "main-data.js", which likely contains the game data such as the word bank or other configurations.
- `<script src="scripts

```

```

The _Hangman game's_ interface is styled using **Cascading Style Sheets (CSS)**.

**1. Font Import and Global Styles:**

- `@import url("https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap");`: This line imports a custom font called "Amatic SC" from Google Fonts for use in the game. The `wght` parameter specifies that both regular (400) and bold (700) weights of the font are imported.
- The following block defines styles that apply to all elements (`*`) in the document:
  - `margin: 0%;`: Removes default margins from all elements.
  - `padding: 0%;`: Removes default padding from all elements.
  - `box-sizing: border-box;`: Ensures that the width and height of elements include padding and border.
  - `font-family: "Amatic SC", sans-serif;`: Sets the default font family for the entire document to "Amatic SC", and falls back to a sans-serif font if "Amatic SC" is unavailable.

**2. Body Styles:**

- `body { ... }`: This block styles the body element of the webpage:
  - `display: flex;`: Sets the body to display its child elements as a flexbox.
  - `align-items: center;`: Aligns the flex items along the cross-axis (vertically in this case) to the center of the body.
  - `padding: 0 10px;`: Adds some padding to the top and bottom of the body.
  - `justify-content: center;`: Aligns the flex items along the main axis (horizontally in this case) to the center of the body.
  - `min-height: 100vh;`: Sets the minimum height of the body to 100% of the viewport height.
  - `background-color: #3d405b;`: Sets the background color of the body to a dark blue (#3d405b).

**3. Container Styles:**

- `.container { ... }`: This block styles a container element with the class "container":
  - `width: 850px;`: Sets the width of the container to 850 pixels.
  - `background-color: #f4f1de;`: Sets the background color of the container to a light beige (#f4f1de).
  - `display: flex;`: Sets the container to display its child elements as a flexbox.
  - `gap: 70px;`: Adds a gap of 70 pixels between the child elements of the container.
  - `align-items: flex-end;`: Aligns the flex items along the cross-axis (vertically in this case) to the bottom of the container.
  - `padding: 60px 40px;`: Adds padding to the top, bottom, left, and right sides of the container.
  - `border-radius: 10px;`: Adds a rounded border with a radius of 10 pixels to the container.

**4. Hangman Image Styles:**

- `.hangBox img { ... }`: This block styles the image inside the element with the class "hangBox":
  - `max-width: 270px;`: Sets the maximum width of the image to 270 pixels.

**5. Hangman Title Styles:**

- `.hangBox h1 { ... }`: This block styles the `<h1>` element inside the element with the class "hangBox":
  - `font-size: 2rem;`: Sets the font size to 2rem (roughly 32 pixels).
  - `margin-top: 20px;`: Adds a margin of 20 pixels to the top of the heading.
  - `text-align: center;`: Centers the text of the heading.

**6. Guessed Word Display Styles:**

- `.queryDisplay { ... }`: This block styles the element with the class "queryDisplay", which likely shows the guessed letters during the game:
  - `display: flex;`: Sets the element to display its child elements as a flexbox.
  - `gap: 10px;`: Adds a gap of 10 pixels between the child elements.
  - `list-style: none;`: Removes default styling for list items (since this element behaves like an unordered list).
  - `align-items: center;`: Aligns

```

```

The fundamental functions of the _Hangman game_ are incorporated into the **JavaScript** code. Following is a summary of the functions of the code:

**1. Variable and Element Selection:**

- The code starts by selecting various HTML elements from the document using `document.querySelector()`. These elements include:

  - `.queryDisplay`: Likely represents the container for displaying guessed letters.
  - `.keyboard`: Likely represents the container for the virtual keyboard buttons.
  - `.guesses b`: Likely selects the element displaying the number of incorrect guesses.
  - `.hangBox img`: Likely selects the image representing the hangman state.
  - `.gameEnd`: Likely selects the element representing the game over screen.
  - `.playAgain`: Likely selects the button to restart the game.

- It also defines other variables to manage the game state:
  - `correctLetter`: An empty array to store correctly guessed letters.
  - `currentWord`: A variable to store the current word to be guessed.
  - `wrongGuesses`: A variable to keep track of the number of incorrect guesses made.
  - `maxGuesses`: A constant variable defining the maximum allowed incorrect guesses.

**2. Reset Game Function (`resetGame`):**

- This function resets the game state to its initial state.
  - Clears the `correctLetter` array.
  - Resets `wrongGuesses` to 0.
  - Updates the hangman image based on the current number of wrong guesses.
  - Updates the displayed number of guesses.
  - Enables all buttons on the keyboard.
  - Clears the previously displayed guessed letters and creates placeholders for each letter in the current word.

**3. Get Main Data Function (`getMainData`):**

- This function likely retrieves the word to be guessed and its hint from an external data source (possibly a `mainData` array defined in another JavaScript file `main-data.js`).
  - It randomly selects a word and its corresponding hint from the `mainData` array.
  - Stores the selected word in the `currentWord` variable.
  - Logs the selected word to the console for debugging purposes (potentially).
  - Updates the displayed hint on the webpage.
  - Calls the `resetGame` function to prepare for a new game.

**4. Game Over Function (`gameOver`):**

- This function displays the game over screen with an appropriate message based on whether the player won or lost.
  - Uses `setTimeout` to introduce a slight delay before displaying the message.
  - Sets the image and text content of the game over screen depending on whether the player won or lost.
  - Displays the correct word if the player lost.
  - Shows the game over screen.

**5. Game Initialization Function (`initGame`):**

- This function handles what happens when a letter button is clicked.
  - It checks if the clicked letter exists in the current word.
    - If the letter is present:
      - It updates the displayed guessed letters and marks them as guessed.
    - If the letter is not present:
      - It increments the `wrongGuesses` counter.
      - Updates the hangman image based on the number of wrong guesses.
  - Disables the clicked button to prevent guessing the same letter again.
  - Updates the displayed number of guesses.
  - Checks for game over conditions:
    - If the number of wrong guesses reaches the maximum, calls `gameOver` with `false` indicating a loss.
    - If all letters of the word are guessed correctly, calls `gameOver` with `true` indicating a win.

**6. Keyboard Button Creation:**

- This code iterates through lowercase letters (a-z) and creates a button for each letter.
  - Sets the button text to the corresponding letter.
  - Appends the button to the keyboard container.
  - Adds an event listener to each button. When a button is clicked, it calls the `initGame` function, passing the clicked button and the corresponding letter as arguments.

**7. Game Start and Restart:**

- The code calls `getMainData` to fetch the initial word and hint when the script loads, starting the game.
- It also adds an event listener to the "Play Again" button. Clicking this button calls `getMainData` again, essentially restarting the game with a new word.
