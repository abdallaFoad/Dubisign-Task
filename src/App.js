import React, { useState } from "react";
import { arrayMoveImmutable } from "array-move";
import SortableList from "./components/SortableList";

function App() {
  const data = [
    {
      id: 1,
      order: 5,
    },
    {
      id: 2,
      order: 3,
    },
    {
      id: 3,
      order: 2,
    },
    {
      id: 4,
      order: 1,
    },
    {
      id: 5,
      order: 4,
    },
  ];

  const [items, setItems] = useState(data);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setItems((prevItem) => arrayMoveImmutable(prevItem, oldIndex, newIndex));
  };

  return (
    <div className="App">
      <h3>Drag and Drop sortable list</h3>
      <SortableList items={items} onSortEnd={onSortEnd} />
    </div>
  );
}

export default App;
