# Oracle (Scaffold)

This repository contains a scaffold for the "Oracle" Bible community app built with Expo + React Native.

What this scaffold includes
- Expo project files (`package.json`, `App.js`)
- Navigation and core screens: Feed, Explore, Group Plans, Prayer Wall, Profile
- Contexts: `AuthContext` and `FeedContext` with mock data and utilities
- Placeholder features: Verse Image Creator, Highlights, Achievements, Chat screen
- Firebase placeholders: `src/firebase/firebaseConfig.example.js` and initializer

How to run locally
1. Install dependencies (requires Node.js and npm/yarn and Expo CLI):

```bash
npm install
# or
yarn install
```

2. Start Expo:

```bash
npx expo start
```

3. Use Expo Go on your device or an emulator to open the app.

Firebase (optional)
- Copy `src/firebase/firebaseConfig.example.js` to `src/firebase/firebaseConfig.js` and fill with your Firebase project keys.
- The scaffold includes a basic Firebase initializer at `src/firebase/initFirebase.js`. Real-time features (chat, plans, storage, auth) need to be implemented against your chosen backend (Firebase / Supabase).

Next steps (recommended)
- Wire up real authentication (Firebase Auth or Supabase) in `AuthContext`.
- Replace mock data in `FeedContext` with a live database and real-time listeners.
- Implement real-time group plan chat using Firestore/Realtime DB or Supabase Realtime.
- Implement image generation/sharing for verse images (Expo APIs or native modules).
- Add tests and CI, and implement push notifications for events and prayer interactions.

License: none
