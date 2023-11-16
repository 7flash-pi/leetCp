

import { lineType } from '@/store/store';
import React, { ReactNode, useState } from 'react';

interface DropdownProps {
  trigger: ReactNode;
  children?: ReactNode;
  options?: string | lineType[];
  onChange?: (value: string | null) => void; 
}

const Dropdown: React.FC<DropdownProps> = ({ trigger, children, options,onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    
  };

  const handleOptionSelect = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false); 
    if(onChange) onChange(value)
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          onClick={toggleDropdown}
        >
          {selectedValue || trigger}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options && (
              <div>
                {Array.isArray(options)
                  ? options.map((option, index) => (
                      <div
                        key={index}
                        className={`block px-4 py-2 text-sm text-gray-700 ${selectedValue === option.type ? 'bg-gray-100' : ''}`}
                        onClick={() => handleOptionSelect(option.type)}
                        role="menuitem"
                      >
                        {option.type}
                      </div>
                    ))
                  : (
                      <div
                        className={`block px-4 py-2 text-sm text-gray-700 ${selectedValue === options ? 'bg-gray-100' : ''}`}
                        onClick={() => handleOptionSelect(options)}
                        role="menuitem"
                      >
                        {options}
                      </div>
                    )}
              </div>
            )}
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
