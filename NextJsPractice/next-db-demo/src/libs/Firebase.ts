import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

import { collection, getDocs } from "firebase/firestore"; 


export function getFirebaseInstance() {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_API,
        measurementId: process.env.FIREBASE_MEASUREMENT_ID
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    return app;
}

export function getFirebaseAnalyticInstance() {
    return  getAnalytics(getFirebaseInstance());
}

export function getFirebaseDbInstanace() {
    return getFirestore(getFirebaseInstance());;
}

export async function getToDos() {
    const  db  = getFirebaseDbInstanace();
    try {
        const querySnapshot = await getDocs(collection(db, "todos"));
        const data = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
          }));
      
          return data;
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}