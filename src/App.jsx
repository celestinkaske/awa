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
      {activeTab === 0 && <div><h2 className="flex justify-center text-lg font-semibold mb-2">Your Pillars</h2>
    <table className="w-full">
      <tbody>
        <tr>
          <td className="p-4 border">
            <div className="flex justify-center items-center h-24 bg-gray-200">Health</div>
          </td>
          <td className="p-4 border">
            <div className="flex justify-center items-center h-24 bg-gray-200">Work</div>
          </td>
        </tr>
        <tr>
          <td className="p-4 border">
            <div className="flex justify-center items-center h-24 bg-gray-200">Hobby</div>
          </td>
          <td className="p-4 border">
            <div className="flex justify-center items-center h-24 bg-gray-200">Sport</div>
          </td>
        </tr>
        <tr>
          <td className="p-4 border">
            <div className="flex justify-center items-center h-24 bg-gray-200">Family</div>
          </td>
          <td className="p-4 border">
            <div className="flex justify-center items-center h-24 bg-gray-200">Friends</div>
          </td>
        </tr>
      </tbody>
    </table></div>}
      {activeTab === 1 && <div><h2 className="flex justify-center text-lg font-semibold mb-2">Notes</h2></div>}
      {activeTab === 2 && <div><h2 className="flex justify-center text-lg font-semibold mb-2">Analyse </h2></div>}
      {activeTab === 3 && <div><h2 className="flex justify-center text-lg font-semibold mb-2">Sounds</h2></div>}
      {activeTab === 4 && (
          <div>
            <h2 className="flex justify-center text-lg font-semibold mb-2">Your Settings</h2>
         
          </div>
        )}
    </div>
  </div>
);
}

export default App
