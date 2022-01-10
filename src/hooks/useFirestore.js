import { useState, useEffect } from 'react';
import { onSnapshot, collection } from 'firebase/firestore';
import { projectFirestore } from '../firebase/config';

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const collectionRef = collection(projectFirestore, collectionName);
    const unsubCol = onSnapshot(collectionRef, (snapshot) => {
      let documents = [];
      snapshot.docs.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsubCol();
  }, [collection]);

  return { docs };
};

export default useFirestore;
