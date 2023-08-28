import React from 'react';

function ThemeSettings() {
  return (
    <div className='bg-half-transparent w-screen fixed nav-item top-0 right-0'>
      <div className='float-right h-screen dark:text-gray-200 bg-white dark:bg-gray-400 w-400'>
        <div className='flex justify-between items-center p-4 ml-4'>
          <p>Settings</p>
          <button
            type='button'
            onClick={() => {}}
            style={{ color: 'rgb(135, 171, 180)' }}
          >
            Click Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default ThemeSettings;
