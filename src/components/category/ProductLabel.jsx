import React, { useState } from 'react';

function Label({ isVisible }) {
  if (!isVisible) return null;
  
  return <label className="sr-only">뉴시즌</label>;
}

function VisibilityButton({isVisible}) {
    return (
        <label 
          className="bg-tertiary p-[2px] px-1 text-center text-xs font-medium text-white" 
          role="button"
          aria-label={isVisible ? '뉴시즌' : 'hide'}
        >
          {isVisible ? '뉴시즌' : 'hide'}
        </label>
      );
    }

function ProductLabel() {
  const [isLabelVisible, setLabelVisible] = useState(true);

  const handleClick = () => {
    setLabelVisible(!isLabelVisible);
  };

  return (
    <div className='mt-4'>
      <Label isVisible={isLabelVisible} />
      <VisibilityButton isVisible={isLabelVisible}/>
    </div>
  );
}

export default ProductLabel;
