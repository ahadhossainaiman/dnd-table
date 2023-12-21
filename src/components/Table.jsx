/* eslint-disable react/prop-types */

import { useState } from "react";

const Table = ({ currentItems }) => {
  const [hiddenColumns, setHiddenColumns] = useState([]);
  const headerData = [
    {
      id: "client_name",
      value: "Name",
    },
    {
      id: "project_type",
      value: "Job",
    },
    {
      id: "deadline",
      value: "Deadline",
    },
  ];
  const toggleColumnVisibility = (columnName)=>{
    console.log(columnName);
    if (hiddenColumns.includes(columnName)) {
        setHiddenColumns(hiddenColumns.filter((col) => col !== columnName));
      } else {
        setHiddenColumns([...hiddenColumns, columnName]);
      }
  }
  return (
    <div>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          {
            headerData.map((thead)=>(
            <>
                <li>
                <label>
                  <input
                    type="checkbox"
                    checked={!hiddenColumns.includes(thead.id)}
                    onChange={() => toggleColumnVisibility(thead.id)}
                  />
                  {thead.value}
                </label>
                </li>
            </>
            ))
          }
        </ul>
      </details>
      <table className="table mt-60">
        {/* head */}
        <thead>
          <tr>
            {headerData?.map((head) => {
              return  !hiddenColumns.includes(head.id) &&(
                <>
                  <th>{head?.value}</th>
                </>
              );
            })}
          </tr>
        </thead>
        <tbody>

          {currentItems.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {headerData.map((thead) =>  !hiddenColumns.includes(thead.id) && (
                <>
                  <td>{item[thead.id]}</td>
                </>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
