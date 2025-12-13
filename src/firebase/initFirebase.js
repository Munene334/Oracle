import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebaseConfig';

let app;
try {
  app = initializeApp(firebaseConfig);
} catch (e) {
  // placeholder for environments where config isn't provided
  console.warn('Firebase init failed (expected in scaffold):', e.message);
}

export default app;
