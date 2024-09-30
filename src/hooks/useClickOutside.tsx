import React, { useEffect } from 'react';

function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  callback: () => void,
) {
  useEffect(() => {
    function handleOutsideEvent(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleOutsideEvent);
    document.addEventListener('touchstart', handleOutsideEvent);

    return () => {
      document.removeEventListener('mousedown', handleOutsideEvent);
      document.removeEventListener('touchstart', handleOutsideEvent);
    };
  });
}

export default useClickOutside;
