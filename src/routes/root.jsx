import { Outlet, NavLink } from "react-router-dom";

const pages = ["Home", "Notes", "Analysis", "Sounds", "Settings"];

export default function Root() {
  return (
    <div className="flex flex-col">
      <div className="border-b">
        <nav>
          <ul className="flex justify-evenly bg-gray-100 p-6">
            {pages.map((page, index) => {
              return (
                <li key={index}>
                  <NavLink
                    key={page}
                    className="text-gray-600 hover:text-blue-700 flex-grow text-center py-2 rounded-md transition-colors duration-300 "
                    activeClassName="text-blue-800 font-bold"
                    to={`/${page.toLowerCase()}`}
                  >
                    {page}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
