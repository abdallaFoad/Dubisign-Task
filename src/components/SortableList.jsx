import React from "react";

import { SortableContainer } from "react-sortable-hoc";
import SortableItem from "./SortableItem";

const SortableList = ({items}) => {
  return (
    <ul>
      {items.map((value, i) => (
        <SortableItem key={value.id} index={i} value={value.order} />
      ))}
    </ul>
  );
};

export default SortableContainer(SortableList);
