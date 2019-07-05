import * as React from "react";

export interface Props {
  color: any;
  onColorChange: any;
  getColor: any;
}

const Form = ({ color, onColorChange, getColor }: Props) => {
  return (
    <div className="jumbotron text-center inputRow">
      <span className="symbol">#</span>
      <input
        value={color}
        onChange={e => onColorChange(e)}
        type="text"
        placeholder="Color"
      />
      <button className="btn" onClick={e => getColor(e)}>
        <i className="fas fa-plus" />
      </button>
    </div>
  );
};

export default Form;
