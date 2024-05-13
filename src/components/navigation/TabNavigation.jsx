const pages = ["Home", "Notes", "Analysis", "Sounds", "Settings"];

const TabNavigation = ({ activeIndex, setActiveIndex }) => {
  return (
    <nav>
      <ul className="flex border-b">
        {pages.map((page, index) => {
          return (
            <Tab
              key={page}
              active={activeIndex === index}
              onClick={() => setActiveIndex(index)}
            >
              {page}
            </Tab>
          );
        })}
      </ul>
    </nav>
  );
};

const Tab = ({ children, active, onClick }) => {
  return (
    <li
      className={`-mb-px flex-1 ${
        active
          ? "border-l border-t border-r rounded-t text-blue-700"
          : "border-b border-gray-400 hover:text-blue-700"
      }`}
      onClick={onClick}
    >
      <a
        className="flex justify-center py-6 "
        href={`#${children.toLowerCase()}`}
      >
        {children}
      </a>
    </li>
  );
};

export default TabNavigation;
