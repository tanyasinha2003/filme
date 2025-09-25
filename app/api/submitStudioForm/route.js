import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { NextResponse } from "next/server";


const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

// Initialize Firebase once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      phone,
      email,
      date,
      shootType,
      packageType,
      message,
      shootTypeOther,
      packageOther,
    } = body;

    await addDoc(collection(db, "studio"), {
      firstName,
      lastName,
      phone,
      email,
      date,
      shootType,
      packageType,
      message,
      shootTypeOther,
      packageOther,
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Firestore error:", err);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
