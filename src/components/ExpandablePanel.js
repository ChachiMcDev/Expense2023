import { useState } from 'react';
import { GoChevronDown, GoChevronRight } from 'react-icons/go';

function ExpandablePanel({ header, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items-center">
        <div onClick={handleClick} className="cursor-pointer">
          Details: {expanded ? <GoChevronDown /> : <GoChevronRight />}
        </div>
        <div className="flex flex-row items-center justify-between">
          {header}
        </div>

      </div>
      {expanded && <div className="">{children}</div>}
    </div>
  );
}

export default ExpandablePanel;
