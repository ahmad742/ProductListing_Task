# Product Listing App

A beautiful React Native e-commerce app with a modern UI and smooth animations.

## Features

### UI/UX
- Modern and clean user interface
- Smooth animations and transitions
- Animated splash screen
- Custom bottom tab bar with gradient effects
- Responsive design for all screen sizes

### Product Features
- Product listing with grid layout
- Product search functionality
- Add/remove products to favorites
- Shopping cart management
- Product details with:
  - Size selection
  - Color variants
  - Quantity adjustment
  - Add to cart functionality

### Technical Features
- Network state handling
- Offline support with error states
- Performance optimized
- Cross-platform (iOS & Android)
- TypeScript implementation
- Clean and modular architecture

## Screenshots

### Home & Product Listing
| Home Screen | Product Details | Search Products |
|-------------|----------------|-----------------|
| ![Home](./screenshots/home.png) | ![Details](./screenshots/details.png) | ![Search](./screenshots/search.png) |

### Shopping Experience
| Cart | Favorites | Add to Cart |
|------|-----------|-------------|
| ![Cart](./screenshots/cart.png) | ![Favorites](./screenshots/favorites.png) | ![Add](./screenshots/add-to-cart.png) |

### App States
| Splash Screen | No Internet | Empty States |
|---------------|-------------|--------------|
| ![Splash](./screenshots/splash.png) | ![NoInternet](./screenshots/no-internet.png) | ![Empty](./screenshots/empty-state.png) |

## Getting Started

### Prerequisites

- Node.js (v18 or newer)
- npm or yarn
- React Native development environment setup
- Xcode (for iOS)
- Android Studio (for Android)

### Installation

1. Clone the repository:
\`\`\`bash
git clone https://github.com/ahmad742/ProductListing_Task
cd ProductListing_Task
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
# or
yarn install
\`\`\`

3. Install iOS dependencies:
\`\`\`bash
cd ios
pod install
cd ..
\`\`\`

### Running the App

#### iOS
\`\`\`bash
npm run ios
# or
yarn ios
\`\`\`

#### Android
\`\`\`bash
npm run android
# or
yarn android
\`\`\`

## Project Structure

\`\`\`
src/
├── api/          # API calls and configuration
├── components/   # Reusable components
├── context/      # React Context providers
├── navigation/   # Navigation configuration
├── screens/      # App screens
├── theme/        # Theme configuration
└── utils/        # Utility functions
\`\`\`

## Libraries Used

- React Navigation
- React Native Vector Icons
- React Native Linear Gradient
- React Native Toast Message
- React Native NetInfo
- TypeScript
- And more...

## Contributing

Feel free to submit issues and enhancement requests.

## License

This project is licensed under the MIT License - see the LICENSE file for details.