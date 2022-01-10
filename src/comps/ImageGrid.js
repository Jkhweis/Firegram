import React from 'react';
import useFirestore from '../hooks/useFirestore';

const ImageGrid = () => {
  const { docs } = useFirestore('images');

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={docs.id}>
            <img src={doc.url} alt="New Upload" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
