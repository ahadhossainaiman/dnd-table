import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import "./App.css";
import PaginationItems from "./components/PaginationItems";

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
       
        <PaginationItems itemsPerPage={10}/>
      </div>
    </>
  );
}

export default App;
