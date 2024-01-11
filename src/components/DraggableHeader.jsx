import React from 'react';

const DraggableHeader = ({ columnName, onDragStart }) => {
    const handleDragStart = (e) => {
        onDragStart(e, columnName);
      };
    return (
        <th draggable onDragStart={handleDragStart}>
        {columnName}
      </th>
    );
};

export default DraggableHeader;