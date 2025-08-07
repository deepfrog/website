# DeepFrog Landing Page

A modern, responsive landing page for DeepFrog - a product development company specializing in healthcare, logistics, and fintech sectors.

## 🚀 Features

- **Modern Design**: Clean, professional UI with Material-UI components
- **Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Interactive**: Smooth scrolling navigation and hover effects
- **Brand Integration**: Custom DeepFrog branding and logo
- **Email Capture**: Demo booking functionality with email validation
- **Product Showcase**: Detailed sections for Frognosis, Pangents, and DecentAI

## 🛠️ Tech Stack

- **React 18** with TypeScript
- **Material-UI v5** for UI components
- **React Router DOM** for navigation
- **CSS Grid & Flexbox** for responsive layouts

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd deepfrog-landing-page
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Build for production:
```bash
npm run build
```

## 🚀 Railway Deployment

This project is configured for easy deployment on Railway.com:

### Automatic Deployment
1. Connect your GitHub repository to Railway
2. Railway will automatically detect the React app
3. The build process will run automatically
4. Your site will be deployed and accessible via Railway's URL

### Manual Deployment
1. Install Railway CLI: `npm i -g @railway/cli`
2. Login: `railway login`
3. Initialize: `railway init`
4. Deploy: `railway up`

### Environment Variables
No environment variables are required for basic deployment. The app works as a static site.

## 📁 Project Structure

```
src/
├── components/
│   └── landing/          # Landing page components
│       ├── Header.tsx    # Navigation header
│       ├── Hero.tsx      # Hero section
│       ├── Stats.tsx     # Statistics section
│       ├── CoreFeatures.tsx  # Products showcase
│       ├── Partners.tsx  # Partners section
│       ├── AboutUs.tsx   # About section
│       ├── CTA.tsx       # Call-to-action
│       └── Footer.tsx    # Footer
├── utils/
│   └── emailService.ts   # Email service utilities
├── pages/
│   └── Landing.tsx       # Main landing page
└── App.tsx               # App root component
```

## 🎨 Customization

### Colors
The primary brand color is `#0f766e` (teal). Update this in components to match your brand.

### Content
- Update product information in `src/pages/Landing.tsx`
- Modify partner logos in the `partners` array
- Update contact information in the Footer component

### Images
- Place logo images in the `public/` folder
- Update image paths in the components

## 📧 Email Integration

The demo booking form currently logs email requests to the console. To integrate with real email services:

1. Update `src/utils/emailService.ts`
2. Add your email service API keys as environment variables
3. Implement actual email sending logic

## 🔧 Development

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run tests
- `npm run eject` - Eject from Create React App

### Code Style
- TypeScript for type safety
- Material-UI for consistent styling
- Functional components with hooks
- Responsive design principles

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is proprietary to DeepFrog.

## 🆘 Support

For support or questions, contact the DeepFrog development team.
