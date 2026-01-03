# Portfolio Website - Govinda Kumar Rajbanshi

A modern, responsive portfolio website built with React.js, Node.js, and Tailwind CSS featuring light/dark theme toggle.

## Features

- 🎨 Modern and responsive design
- 🌓 Light/Dark theme toggle with persistent storage
- 📱 Fully responsive across all devices
- ⚡ Fast and optimized performance
- 🎯 Smooth scrolling navigation
- 📧 Contact form with email integration
- 🚀 Built with React.js and Vite

## Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Icons
- Vite

### Backend
- Node.js
- Express.js
- Nodemailer (for contact form)

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd myPortfolio
```

2. Install dependencies
```bash
npm install
```

3. Set up environment variables
```bash
cd server
cp .env.example .env
```

Edit `.env` file with your email credentials:
```
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
CONTACT_EMAIL=your-contact-email@gmail.com
```

4. Run the development server
```bash
# Terminal 1 - Frontend
npm run dev

# Terminal 2 - Backend
npm run server
```

5. Open your browser
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## Building for Production

```bash
npm run build
```

The production build will be in the `dist` folder.

## Project Structure

```
myPortfolio/
├── src/
│   ├── components/      # React components
│   ├── context/         # React context (Theme)
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── server/              # Node.js backend
│   └── index.js         # Express server
├── public/              # Static assets
└── package.json         # Dependencies
```

## Customization

1. Update personal information in components
2. Replace placeholder images with your project screenshots
3. Update social media links
4. Modify color scheme in `tailwind.config.js`
5. Add your own projects in `Projects.jsx`

## Netlify Forms (Contact form)

- This project supports **Netlify Forms**. A hidden static form exists in `index.html` so Netlify can detect the form at build time, and the React `Contact` component includes `data-netlify="true"`, `data-netlify-honeypot="bot-field"`, and a hidden `form-name` input.
- How to test:
  1. Deploy the site to Netlify (connect the repo and let Netlify build it).
  2. Submit the contact form on the deployed site.
  3. Check **Site → Forms** in the Netlify dashboard to confirm the submission.
  4. Configure **Notifications → Add Email** (or use Zapier/Make) to forward submissions to an email or other services.
- Notes:
  - Netlify only records submissions from builds deployed to Netlify, so ensure you test the deployed site.  
  - The React form uses an AJAX POST to `/` with `form-name=contact`, which Netlify accepts.

## License

This project is open source and available under the MIT License.




