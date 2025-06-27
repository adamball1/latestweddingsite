# Adam & Rebecca's Wedding Website

A beautiful, responsive wedding website built with React and Firebase Hosting.

## 🚀 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Navigation**: Clean navbar with Home, FAQs, and Contact pages
- **Interactive FAQs**: Expandable accordion-style FAQ section
- **Contact Form**: Functional contact form with validation
- **Modern UI**: Elegant design with smooth animations
- **Fast Loading**: Optimized for performance

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 14 or higher)
- **npm** (comes with Node.js)
- **Firebase CLI** (for deployment)

## 🛠️ Installation

1. **Clone the repository** (if you haven't already):

   ```bash
   git clone <your-repository-url>
   cd wedding-website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🏃‍♂️ Running Locally

### Development Mode

To run the app in development mode:

```bash
npm start
```

This will:

- Start the development server
- Open [http://localhost:3000](http://localhost:3000) in your browser
- Enable hot reloading (changes appear instantly)
- Show lint errors in the console

### Production Build (Local Testing)

To test the production build locally:

```bash
# Build the app
npm run build

# Serve the build folder locally
npx serve -s build
```

This will serve your optimized production build at `http://localhost:3000`.

## 🚀 Deployment with Firebase

### Prerequisites

1. **Install Firebase CLI** (if not already installed):

   ```bash
   npm install -g firebase-tools
   ```

2. **Login to Firebase**:
   ```bash
   firebase login
   ```

### Deploy to Firebase Hosting

1. **Build the production version**:

   ```bash
   npm run build
   ```

2. **Deploy to Firebase Hosting**:

   ```bash
   firebase deploy --only hosting
   ```

3. **Access your live website**:
   - Firebase will provide you with a URL (usually `https://your-project-id.web.app`)
   - You can also set up a custom domain in the Firebase Console

### Deployment Commands Reference

```bash
# Build and deploy in one command
npm run build && firebase deploy --only hosting

# Deploy only hosting (if you've already built)
firebase deploy --only hosting

# Deploy everything (hosting, functions, firestore)
firebase deploy

# View deployment status
firebase hosting:list
```

## 📁 Project Structure

```
wedding-website/
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.js      # Navigation component
│   │   └── Navbar.css     # Navbar styles
│   │   ├── Home.js        # Home page
│   │   ├── Home.css       # Home page styles
│   │   ├── FAQs.js        # FAQ page
│   │   ├── FAQs.css       # FAQ page styles
│   │   ├── Contact.js     # Contact page
│   │   └── Contact.css    # Contact page styles
│   ├── App.js             # Main app component
│   ├── App.css            # App styles
│   └── index.js           # App entry point
├── firebase.json          # Firebase configuration
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Updating Content

- **Home Page**: Edit `src/pages/Home.js` for the main content
- **FAQs**: Modify the `faqData` array in `src/pages/FAQs.js`
- **Contact Info**: Update contact details in `src/pages/Contact.js`
- **Styling**: Modify CSS files in respective component folders

### Changing Colors/Themes

The main color scheme uses purple/blue gradients. To change:

- Primary color: `#8e44ad` (purple)
- Secondary color: `#667eea` (blue)
- Update these values in the CSS files

## 🔧 Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App (not recommended)

## 🌐 Firebase Configuration

The project is configured for Firebase Hosting with:

- **Public directory**: `build`
- **Single-page app routing**: All routes redirect to `index.html`
- **Caching**: Optimized for performance

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Make your changes
2. Test locally with `npm start`
3. Build and test production with `npm run build`
4. Deploy with `firebase deploy --only hosting`

## 📞 Support

For questions or issues:

- Check the Firebase Console for deployment status
- Review the browser console for any errors
- Ensure all dependencies are installed with `npm install`

---

**Happy Wedding Planning! 💒**
