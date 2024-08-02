import { useState } from "react";
import data from "./data";
import "./styles.css";
const Accordian = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    console.log(getCurrentId);
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  function handleMultiSelection(getCurrentId) {
    let copyMultiple = [...multiple];
    const findIndexOfCurrent = copyMultiple.indexOf(getCurrentId)
    console.log(findIndexOfCurrent);
    if(findIndexOfCurrent === -1) copyMultiple.push(getCurrentId);
    else copyMultiple.splice(findIndexOfCurrent,1)
    setMultiple(copyMultiple);
  }
  console.log(selected);

  return (
    <div className="wrapper">
      <h1>Arcordian Project</h1>
      <button className="multiselect" onClick={()=> setEnableMultiSelection(!enableMultiSelection)}>MultiClick</button>
      <div className="accordian">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
{
    enableMultiSelection? multiple.indexOf(dataItem.id)!== -1 && (
        <div className="content">{dataItem.answer}</div>
    ): selected === dataItem.id && (
        <div className="content">{dataItem.answer}</div>
    )
}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
};

export default Accordian;
