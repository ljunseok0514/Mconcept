import React, { useState } from 'react';

function Label({ isVisible }) {
  if (!isVisible) return null;
  
  return <label className="sr-only">뉴시즌</label>;
}

function VisibilityButton({ isVisible, onClick }) {
  return (
    <button 
    className="mt-2 w-[40px] bg-tertiary p-[1px] px-1 text-center text-xs font-medium text-white" 
    onClick={onClick}
    >
      {isVisible ? 'hide' : '뉴시즌'}
    </button>
  );
}

function ProductLabel() {
  const [isLabelVisible, setLabelVisible] = useState(true);

  const handleClick = () => {
    setLabelVisible(!isLabelVisible);
  };

  return (
    <div>
      <Label isVisible={isLabelVisible} />
      <VisibilityButton isVisible={isLabelVisible} onClick={handleClick} />
    </div>
  );
}

export default ProductLabel;
