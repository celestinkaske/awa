import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {

  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    
    <div>
    <ul className="flex border-b">
      <li
        className={`-mb-px mr-1 ${activeTab === 0 ? ' flex-1 border-l border-t border-r rounded-t text-blue-700' : 'border-b border-gray-400 hover:text-blue-700'}`}
        onClick={() => handleTabClick(0)}
      >
        <a className="inline-block py-2 px-4">Home</a>
      </li>
      <li
        className={`-mb-px mr-1 ${activeTab === 1 ? ' flex-1 border-l border-t border-r rounded-t text-blue-700' : 'border-b border-gray-400 hover:text-blue-700'}`}
        onClick={() => handleTabClick(1)}
      >
        <a className="inline-block py-2 px-4">Notes</a>
      </li>
      <li
        className={`-mb-px ${activeTab === 2 ? 'flex-1 border-l border-t border-r rounded-t text-blue-700' : 'border-b border-gray-400 hover:text-blue-700'}`}
        onClick={() => handleTabClick(2)}
      >
        <a className="inline-block py-2 px-4">Analyse</a>
      </li>
      <li
        className={`-mb-px ${activeTab === 3 ? 'flex-1 border-l border-t border-r rounded-t text-blue-700' : 'border-b border-gray-400 hover:text-blue-700'}`}
        onClick={() => handleTabClick(3)}
      >
        <a className="inline-block py-2 px-4">Sounds</a>
      </li>
      <li
        className={`-mb-px ${activeTab === 4 ? 'flex-1 border-l border-t border-r rounded-t text-blue-700' : 'border-b border-gray-400 hover:text-blue-700'}`}
        onClick={() => handleTabClick(4)}
      >
        <a className="inline-block py-2 px-4">Settings</a>
      </li>
    </ul>
    <div className="border-l border-r border-b p-4">
      {activeTab === 0 && <div>Tab 1 content</div>}
      {activeTab === 1 && <div>Tab 2 content</div>}
      {activeTab === 2 && <div>Tab 3 content</div>}
      {activeTab === 3 && <div>Tab 4 content</div>}
      {activeTab === 4 && <div>Tab 5 content</div>}
    </div>
  </div>
);
}

export default App
