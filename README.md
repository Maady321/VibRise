# Valentine's Day Proposal Website ❤️

A beautiful, interactive, and animated Valentine's Day specific website built with React, Vite, Tailwind CSS, and Framer Motion.

## Features ✨

- **Glassmorphism Design**: Modern, sleek UI with soft romantic gradients.
- **Animations**: Smooth transitions, floating hearts, and celebrations using Framer Motion.
- **Interactive Proposal**: "Will you be my Valentine?" section with a playful "No" button that runs away.
- **Personalized Letter**: Typewriter effect for your love letter.
- **Background Music**: Ambient romantic music with toggle.
- **Responsive**: Works perfectly on mobile and desktop.

## getting Started 🚀

### Prerequisites

- Node.js (v16 or higher) installed.

### Installation

1.  Clone or download this repository.
2.  Open a terminal in the project folder.
3.  Install dependencies:
    ```bash
    npm install
    ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

## Customization 🎨

### 1. Change the Love Letter

Open `src/pages/LoveLetter.jsx`.
Find the `message` variable and replace the text with your own heartfelt message.

### 2. Change the Music

Open `src/components/MusicPlayer.jsx`.
Replace the `audioSrc` link with your own MP3 URL. You can use a direct link to any audio file.

### 3. Add Photos (Optional)

You can add a carousel in `LoveLetter.jsx` using `npm install swiper` or standard CSS if you wish to display memories.

## Deployment 🌍

### GitHub Pages

1.  Update `vite.config.js`:
    ```js
    export default defineConfig({
      base: "/your-repo-name/", // Add this line
      plugins: [react()],
    });
    ```
2.  Push to GitHub.
3.  Go to Settings > Pages and select the branch to deploy.

### Netlify (Recommended)

1.  Drag and drop the `dist` folder after running `npm run build`.
    OR
2.  Connect your GitHub repository to Netlify.
3.  Set build command: `npm run build`.
4.  Set publish directory: `dist`.

## Built With 🛠️

- **React** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Canvas Confetti** - Celebrations

Happy Valentine's Day! 💖
