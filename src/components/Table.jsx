import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { TfiMenuAlt } from "react-icons/tfi";

const Table = ({ currentItems }) => {
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const [visibleColumns, setVisibleColumns] = useState([
    { id: "client_name", value: "Name" },
    { id: "project_link", value: "Project Link" },
    { id: "project_id", value: "Project ID" },
    { id: "bid_value2", value: "Project Budget" },
    { id: "bid_value", value: "Bid Value" },
    { id: "deadline", value: "Created" },
    { id: "deal_status", value: "Deal_Status" },
  ]);

  const handleDragStart = (e, columnId) => {
    e.dataTransfer.setData("text/plain", columnId);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e, targetColumnId) => {
    e.preventDefault();
    const draggedColumnId = e.dataTransfer.getData("text/plain");

    // Find the indices of dragged and target columns
    const draggedColumnIndex = visibleColumns.findIndex(
      (item) => item.id === draggedColumnId
    );
    const targetColumnIndex = visibleColumns.findIndex(
      (item) => item.id === targetColumnId
    );

    // If both indices are valid, perform the swap
    if (draggedColumnIndex !== -1 && targetColumnIndex !== -1) {
      const newVisibleColumns = [...visibleColumns];

      // Swap the columns
      [
        newVisibleColumns[draggedColumnIndex],
        newVisibleColumns[targetColumnIndex],
      ] = [
        newVisibleColumns[targetColumnIndex],
        newVisibleColumns[draggedColumnIndex],
      ];

      setVisibleColumns(newVisibleColumns);
    }
  };
  const toggleColumnVisibility = (columnName) => {
    setHiddenColumns((prevHiddenColumns) =>
      prevHiddenColumns.includes(columnName)
        ? prevHiddenColumns.filter((col) => col !== columnName)
        : [...prevHiddenColumns, columnName]
    );
  };

  return (
    <div>
      <details className="dropdown ml-24">
        <summary className="m-1 btn">
          <TfiMenuAlt />
        </summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {visibleColumns.map((thead) => (
            <li key={thead.id}>
              <label>
                <input
                  type="checkbox"
                  checked={!hiddenColumns.includes(thead.id)}
                  onChange={() => toggleColumnVisibility(thead.id)}
                />
                {thead.value}
              </label>
            </li>
          ))}
        </ul>
      </details>
      <table
        className="table table-zebra w-[90%] mx-auto rounded-md"
        onDrop={(e) => handleDrop(e, "drop-target")}
        onDragOver={handleDragOver}
      >
        <thead className="bg-blue-500 text-white  text-xl">
          <tr>
            {visibleColumns.map(
              (head) =>
                !hiddenColumns.includes(head.id) && (
                  <th
                    key={head.id}
                    draggable
                    onDragStart={(e) => handleDragStart(e, head.id)}
                    onDrop={(e) => handleDrop(e, head.id)}
                  >
                    {head.value}
                  </th>
                )
            )}
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {visibleColumns.map(
                (thead) =>
                  !hiddenColumns.includes(thead.id) && (
                    <td key={thead.id}>
                      {thead.id === "client_name" ? (
                        item[thead.id].slice(0, 20) + "..."
                      ) : thead.id === "project_link" ? (
                        item[thead.id].slice(0, 20) + "..."
                      ) : thead.id === "bid_value2" ? (
                        `${item["bid_value"]}$-${item[thead.id]}$`
                      ) : thead.id === "bid_value" ? (
                        `${item[thead.id]}$`
                      ) : thead.id === "deal_status" ? (
                        item[thead.id] === 0 ? (
                          <span className="bg-green-500 p-1 rounded-lg text-white">
                            Converted To Deal
                          </span>
                        ) : (
                          <span className="bg-red-500 p-1 rounded-lg text-white">
                            Not Converted To Deal
                          </span>
                        )
                      ) : thead.id === "project_id" ? (
                        Math.floor(1000 + Math.random() * 9000)
                      ) : (
                        item[thead.id]
                      )}
                    </td>
                  )
              )}
              <td>
                <BsThreeDotsVertical />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
