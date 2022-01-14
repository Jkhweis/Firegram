import { useState, useEffect } from 'react';
import { projectFirestore } from '../firebase/config';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';

const useFirestore = (collectionName) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const imageQuery = query(
      collection(projectFirestore, collectionName),
      orderBy('createdAt', 'desc')
    );
    const unsub = onSnapshot(imageQuery, (snap) => {
      const images = [];
      snap.forEach((doc) => {
        images.push({ ...doc.data(), id: doc.id });
      });

      setDocs(images);
    });

    return () => unsub();
  }, [collection]);

  return { docs };
};

export default useFirestore;
