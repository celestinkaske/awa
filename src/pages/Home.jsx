import * as React from "react";
import { Header } from "../components/Header";
import CustomCalendarHeatmap from "../components/CalendarHeatmap";

export default function HomeTab() {
  return (
    <div>
      <Header>Your Pillars</Header>
      <table className="w-full table-fixed">
        <tbody>
          <tr>
            <td className="p-4 border">
              <div className="flex justify-center items-center h-24 bg-gray-200">
                Health
              </div>
            </td>
            <td className="p-4 border">
              <div className="flex justify-center items-center h-24 bg-gray-200">
                Work
              </div>
            </td>
          </tr>
          <tr>
            <td className="p-4 border">
              <div className="flex justify-center items-center h-24 bg-gray-200">
                Hobby
              </div>
            </td>
            <td className="p-4 border">
              <div className="flex justify-center items-center h-24 bg-gray-200">
                Sport
              </div>
            </td>
          </tr>
          <tr>
            <td className="p-4 border">
              <div className="flex justify-center items-center h-24 bg-gray-200">
                Family
              </div>
            </td>
            <td className="p-4 border">
              <div className="flex justify-center items-center h-24 bg-gray-200">
                Friends
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <CustomCalendarHeatmap />
    </div>
  );
}
