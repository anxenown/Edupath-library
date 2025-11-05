// scripts/seedBooks.ts
import "dotenv/config";
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import seedBooks from "../data/seedBooks";

// ---------- Helpers ----------
function isInvalidValue(value: unknown): boolean {
  return (
    value === undefined ||
    value === null ||
    typeof value === "function" ||
    typeof value === "symbol" ||
    Number.isNaN(value) ||
    value === Infinity ||
    value === -Infinity
  );
}

// ---------- Validate Books ----------
console.log(`🔍 Validating ${seedBooks.length} books...`);
const invalidBooks = seedBooks.filter((book) =>
  Object.values(book).some(isInvalidValue)
);

if (invalidBooks.length > 0) {
  console.error(`⚠️ Found ${invalidBooks.length} invalid books. Aborting upload.`);
  invalidBooks.forEach((book, i) =>
    console.log(`❌ Book #${i + 1} "${book.title}" has invalid fields`)
  );
  process.exit(1);
}

// ---------- Firebase Setup ----------
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

console.log("🔥 Firebase config:", {
  projectId: firebaseConfig.projectId,
  apiKey: firebaseConfig.apiKey,
});

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

// ---------- Seed Function ----------
(async function seedData() {
  console.log(`🌱 Starting to upload ${seedBooks.length} books...`);
  let count = 0;

  for (const book of seedBooks) {
    try {
      // Clean undefined/null values
      const cleanBook = Object.fromEntries(
        Object.entries(book).map(([k, v]) => [k, v ?? ""])
      );

      await addDoc(collection(db, "books"), cleanBook);
      count++;
      console.log(`✅ Added (${count}/${seedBooks.length}): ${book.title}`);

      // Small delay between writes to avoid hitting Firestore limits
      await new Promise((r) => setTimeout(r, 150));
    } catch (err: any) {
      console.error(`❌ Failed to add "${book.title}":`, err.message);
    }
  }

  console.log(`🌱 All books processed. Successfully added ${count} books.`);
})();
