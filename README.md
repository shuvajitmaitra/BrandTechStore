# BrandTECH

A React Native e-commerce mobile application built with Expo. Browse products fetched from the Fake Store API, view product details, manage a favorites/wishlist, and toggle between light and dark themes — all with persisted state across sessions.

## Technologies Used

1. React Native - Core framework for cross-platform mobile apps.
2. React Navigation - Manages screen transitions and routing between views.
3. Redux Toolkit - Ensures predictable state logic as the state management library.
4. Redux Persist - Maintains user and app state across sessions.
5. NetInfo - Detects network connectivity changes.
6. Axios - Handles consistent HTTP requests for API calls.
7. TypeScript - Provides type safety for better predictability and tooling.
8. NativeWind - Enables utility-first CSS-in-JS styling.
9. Lucide React Native - Offers a rich set of icons for the app.

## APK File Link (Apk Uploaded in Github releases)

[https://github.com/shuvajitmaitra/BrandTECH/releases/download/apk/BranTECH-Shuvajit_Maitra.apk](https://github.com/shuvajitmaitra/BrandTECH/releases/download/apk/BranTECH-Shuvajit_Maitra.apk)

## Demo Video

<video src="./assets/brandtech_demo_video.mov" controls width="700"></video>

[Watch the demo video on Google Drive](https://drive.google.com/file/d/1OYHKSMPbshFc-LJlilBN075zlll0Yuzp/view?usp=drive_link)

---

## Prerequisites

| Tool    | Version | Install                                              |
| ------- | ------- | ---------------------------------------------------- |
| Node.js | >= 20.x | [nodejs.org](https://nodejs.org) or `nvm install 20` |
| pnpm    | >= 9.x  | `npm install -g pnpm`                                |
| Git     | any     | [git-scm.com](https://git-scm.com)                   |

---

## Clone & Install

```bash
git clone <repo-url>
cd BrandTECH
pnpm install
```

---

## Run the App

```bash
# Start the Expo dev server
pnpm start
```

Then press:

- `i` — open iOS Simulator
- `a` — open Android emulator / device
- `w` — open in browser

```bash
# Run directly on a platform
pnpm ios
pnpm android
```

---

## Build

```bash
# Android APK (release)
pnpm apk

# Android App Bundle (release)
pnpm abb

# iOS — open in Xcode
pnpm xcode

# Install CocoaPods
pnpm pod

# Clean Android build
pnpm clean
```

---

## Project Structure

```
BrandTECH/
├── src/
│   ├── components/
│   │   ├── common/         # GlobalHeader, GlobalStatusBar, Logo
│   │   ├── home/           # Banner
│   │   └── product/        # ProductCard, ProductRating, FavoriteButton, SearchBar, EmptyState
│   ├── hooks/
│   │   ├── useProducts.ts  # Fetch & cache products
│   │   └── useThemeColors.ts
│   ├── navigation/
│   │   ├── Navigation.tsx  # Root navigator wrapper
│   │   └── RootStack.tsx   # Stack screens (Home, ProductDetail, Favorites)
│   ├── redux/
│   │   ├── slices/
│   │   │   ├── productSlice.ts  # Product list + favorites state
│   │   │   └── themeSlice.ts    # Light/dark theme toggle
│   │   ├── store.ts        # Redux store with redux-persist
│   │   └── hooks.ts        # Typed useAppSelector / useAppDispatch
│   ├── screens/
│   │   └── product/
│   │       ├── HomeScreen.tsx
│   │       ├── ProductDetailScreen.tsx
│   │       └── FavoritesScreen.tsx
│   ├── services/
│   │   └── productService.ts   # Axios calls to Fake Store API
│   ├── theme/
│   │   └── colors.ts
│   └── types/
│       └── productTypes.ts
├── assets/                 # Icons, splash, logo
├── App.tsx                 # Entry point — Provider, PersistGate, ThemedApp
├── app.json                # Expo configuration
├── global.css              # NativeWind global styles
├── tailwind.config.js      # NativeWind / Tailwind config
└── tsconfig.json           # TypeScript config
```

---

## Screens

| Screen             | Description                                         |
| ------------------ | --------------------------------------------------- |
| **Home**           | Product grid with search bar and promotional banner |
| **Product Detail** | Full product info, rating, and favorite toggle      |
| **Favorites**      | Products saved to the favorites list                |

---

## Tech Stack

| Category         | Library                                    |
| ---------------- | ------------------------------------------ |
| Framework        | React Native + Expo 54                     |
| Language         | TypeScript 5.9                             |
| Styling          | NativeWind (Tailwind CSS for React Native) |
| Icons            | Lucide React Native                        |
| State Management | Redux Toolkit + Redux Persist              |
| Navigation       | React Navigation v7 (Native Stack)         |
| HTTP Client      | Axios                                      |
| Storage          | AsyncStorage                               |
| Package Manager  | pnpm 9                                     |

---

## API

Products are fetched from the public [Fake Store API](https://fakestoreapi.com/products). No API key required.
