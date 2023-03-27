import React from "react";
import { DashCircle, PlusCircle } from "react-bootstrap-icons";
import { useDispatch } from "react-redux";
import { AddQuantity, removeQuantity } from "../Utils/CartSlice";
const AddRemoveButtonComponent = (item) => {
  const dispatch = useDispatch();
  return (
    <div
      className={
        item.clsName ? "input-group " + item.clsName : "input-group w-auto"
      }
    >
      <span class="input-group-btn">
        <button
          type="button"
          class="btn btn-default btn-number"
          data-type="add"
          onClick={() => {
            dispatch(AddQuantity(item));
          }}
        >
          <PlusCircle />
        </button>
      </span>

      <input
        type="text"
        name="quant[1]"
        disabled="disabled"
        class="form-control input-number text-center"
        value={item.quantity}
      />
      <span class="input-group-btn">
        <button
          type="button"
          class="btn btn-default btn-number"
          data-type="minus"
          onClick={() => {
            dispatch(removeQuantity(item));
          }}
        >
          <DashCircle />
        </button>
      </span>
    </div>
  );
};
export default AddRemoveButtonComponent;
