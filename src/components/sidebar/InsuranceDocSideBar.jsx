import React, { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const InsuranceDocSidebar = ({ onSelectItem }) => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (itemPath) => {
    setOpenItems(prevState => ({
      ...prevState,
      [itemPath]: !prevState[itemPath]
    }));
  };

  const renderTreeItem = (item, path = '') => {
    const currentPath = path ? `${path}.${item.name}` : item.name;
    return (
      <div key={currentPath}>
        {item.component ? (
          <Link 
            to={item.path} 
            className="sidebar-item" 
            onClick={() => onSelectItem(item.component)}
          >
            {item.name}
          </Link>
        ) : (
          <Button
            variant="link"
            className="sidebar-item"
            onClick={() => toggleItem(currentPath)}
          >
            {item.name}
            {item.children && (
              <FontAwesomeIcon
                icon={openItems[currentPath] ? faChevronUp : faChevronDown}
                className="ml-2"
              />
            )}
          </Button>
        )}
        {item.children && openItems[currentPath] && (
          <Nav className="flex-column ml-3">
            {item.children.map(child => renderTreeItem(child, currentPath))}
          </Nav>
        )}
      </div>
    );
  };

  const treeData = {
    name: 'SecuerStore',
    children: [
      {
        name: 'CustomersData',
        children: [
          { name: 'Leaf 1.1', path: '/leaf1-1', component: 'Leaf1_1Component' },
          { name: 'Leaf 1.2', path: '/leaf1-2', component: 'Leaf1_2Component' }
        ]
      },
      {
        name: 'ArchievingData',
        children: [
          { name: 'Leaf 2.1', path: '/leaf2-1', component: 'Leaf2_1Component' },
          { name: 'Leaf 2.2', path: '/leaf2-2', component: 'Leaf2_2Component' }
        ]
      }
    ]
  };

  return (
    <Nav className="flex-column sidebar">
      {renderTreeItem(treeData)}
    </Nav>
  );
};

export default InsuranceDocSidebar;