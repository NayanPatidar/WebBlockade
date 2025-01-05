# WebBlockade

WebBlockade is a user-friendly Chrome extension built with React that allows users to block specific websites. Designed for productivity and focus, this extension provides an intuitive interface to manage blocked websites and toggle the blocker on or off with ease.

## Features

### 1. Enable/Disable Blocker

- A toggle button to turn the website blocker on or off.
- Reflects the current status of the blocker in real time.

### 2. Blocked Websites List

- View a list of all currently blocked websites.
- Easily remove websites from the blocked list.

### 3. Customizable Blocking

- Add specific websites to the blocked list.
- Automatically redirects blocked URLs to a custom "Blocked Page."

## Installation

### Prerequisites

- Node.js and npm installed on your system.

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/NayanPatidar/webblockade.git

   ```

2. Navigate to the project directory:

   ```bash
   cd webblockade

   ```

3. Install dependencies:
   ```bash
   npm install

   ```
4. Build the project:

   ```bash
   npm run build

   ```

5. Load the Extension in Chrome

- Open `chrome://extensions/` in your Chrome browser.
- Enable **Developer mode** (toggle it on in the top-right corner).
- Click on **Load unpacked**.
- Navigate to your project directory and select the `build` folder.

## Usage

1. After installing the extension, click on the WebBlockade icon in your Chrome toolbar.
2. Use the toggle button to enable or disable the blocker.
3. Add websites to the blocked list by editing the blockedUrls array in the code or through the popup UI.
4. Blocked websites will automatically redirect to the custom "Blocked Page."
