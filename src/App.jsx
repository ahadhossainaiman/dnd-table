import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import "./App.css";
import PaginationItems from "./components/PaginationItems";
import BarChartSection from "./components/BarChartSection";

function App() {
  // const tableHead = [
  //   {
  //     id: 1,
  //     name: "Name",
  //   },
  //   {
  //     id: 2,
  //     name: "Job",
  //   },
  //   {
  //     id: 3,
  //     name: "Favorite Color",
  //   },
  //   {
  //     id: 4,
  //     name: "Details",
  //   },
  // ];

 


  return (
    <>
      <div className="overflow-x-auto">
        <span className="flex justify-center items-center my-14">
        <BarChartSection />
        </span>
    
        <PaginationItems itemsPerPage={10}/>
      </div>
    </>
  );
}

export default App;
