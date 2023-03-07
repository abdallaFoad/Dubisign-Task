import React from "react";
import { SortableElement } from "react-sortable-hoc";

const SortableItem = ({value}) => {
  return <li>{value}</li>;
};

export default SortableElement(SortableItem);
