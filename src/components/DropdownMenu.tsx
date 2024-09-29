import React, {
  useState,
  useContext,
  ReactNode,
  ReactElement,
  useRef,
  useEffect,
} from 'react';
import { twMerge } from 'tailwind-merge';
import useClickOutside from '../hooks/useClickOutside';

export type DropdownMenuProps = {
  children: ReactNode;
  className?: string;
};

const DropdownMenuContext = React.createContext<{
  isShown: boolean;
  setIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  triggerRef: React.RefObject<HTMLDivElement>;
}>({
  isShown: false,
  setIsShown: () => {
    throw new Error('DropdownMenuContext is not provided');
  },
  triggerRef: { current: null },
});

function DropdownMenu({ children, className }: DropdownMenuProps) {
  const [isShown, setIsShown] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const fullMenuRef = useRef<HTMLDivElement>(null);

  useClickOutside(fullMenuRef, () => {
    setIsShown(false);
  });

  return (
    <DropdownMenuContext.Provider value={{ isShown, setIsShown, triggerRef }}>
      <div className={twMerge('relative', className)} ref={fullMenuRef}>
        {children}
      </div>
    </DropdownMenuContext.Provider>
  );
}

function Trigger({ children }: { children: ReactElement }) {
  const { setIsShown, triggerRef } = useContext(DropdownMenuContext);

  const handleClick = () => {
    setIsShown((prev) => !prev);
  };

  return React.cloneElement(children, {
    onClick: handleClick,
    ref: triggerRef,
  });
}

function Content({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { isShown } = useContext(DropdownMenuContext);

  const contentRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isShown) {
      const contentLocation = contentRef.current?.getBoundingClientRect();
      console.log(contentLocation);
    }
  }, [contentRef, isShown]);

  return isShown ? (
    <ul
      ref={contentRef}
      className={twMerge(
        'absolute z-50 mt-3 flex h-fit w-max flex-col items-center justify-start rounded p-2 shadow-lg',
        className,
      )}
    >
      {children}
    </ul>
  ) : null;
}

function Item({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  const handleClick = () => {
    if (onClick) onClick();
  };

  return (
    <li className={twMerge('w-full', className)} onClick={handleClick}>
      {children}
    </li>
  );
}

DropdownMenu.Trigger = Trigger;
DropdownMenu.Content = Content;
DropdownMenu.Item = Item;

export default DropdownMenu;
