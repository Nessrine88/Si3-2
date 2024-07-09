// EmptyPage.tsx
import React from 'react';

const EmptyPage = () => {
  return (
    <div className="flex flex-col items-center justify-center  h-[100vh] ">
      <h2 className="text-2xl font-bold mb-4">No Cards Found</h2>
      <p>Try adjusting your search or check back later.</p>
    </div>
  );
};

export default EmptyPage;
