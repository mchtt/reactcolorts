import * as React from "react";

export interface Props {
  boxes: any;
  deleteBox: any;
}

const Boxes = ({ boxes, deleteBox }: Props) => {
  return (
    <div className="row boxRow">
      {boxes.map((box: any, item: number) => {
        if (box.color) {
          return (
            <button
              key={item}
              onClick={e => changeHeaderColor(e, box.color, box.colorRgb, box.colorName)}
              id="jean"
              className="box"
              style={{ backgroundColor: "#" + box.color }}
              value={box.color}
            >
              {box.colorName}
              <span onClick={e => deleteBox(e, item)} className="deleteBtn">
                <i className="far fa-trash-alt" />
              </span>
            </button>
          );
        }
        return null;
      })}
    </div>
  );
};

export default Boxes;

// helpers

const changeHeaderColor = (e: any, color: string, colorRgb: string, colorName: string) => {
  let newColor = e.target.value;
  document.getElementById("header")!.style.backgroundColor = "#" + newColor;
  document.getElementById("header")!.style.fontSize = '1em';
  document.getElementById("header")!.innerHTML = colorName + '<br>'+"#" + color + '<br>' + colorRgb;
};
