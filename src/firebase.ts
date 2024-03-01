import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getFirestore, setDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

console.log(firebaseConfig)

// TODO get from cache instead of online: https://firebase.google.com/docs/firestore/query-data/get-data?_gl=1*15pxyq9*_up*MQ..*_ga*MTQzNTE2OTA2MS4xNzA5MjY2NDE0*_ga_CW55HF8NVT*MTcwOTI2NjQxMy4xLjAuMTcwOTI2NjQxMy4wLjAuMA..#source_options
export const fetchItemsInCategory = async (category: string): Promise<any[]> => {
  const querySnapshot = await getDocs(
    collection(db, `items/${category}/items`)
  );
  const results: any[] = []
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    results.push(doc.data())
  });
  return Promise.resolve(results);
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);

/** add an item-document in the Item collection on Firebase */
export const writeListToFireStorage = (type: string, itemList: any[]) => {
  itemList.forEach(
    (item) => {
      addDbDoc(type, item)
    }
  )
}

const addDbDoc = async (type: string, item: any) => {
  const formattedName = item.name.replace(/\W/g, '') // remove non-alphanumeric chars
  await setDoc(doc(db, `items/${type}/items`, formattedName), {
    type: type,
    ...item
  });
}
