import React, { useState } from "react";

const App = () => {
  const [Heading, setHeading] = useState("");
  const [Details, setDetails] = useState("");
  const [Note, setNote] = useState([]);

  const formHandler = (e) => {
    e.preventDefault();
    setHeading("");
    setDetails("");
    const copyNote = [...Note];
    const newnotes = { head: Heading, detail: Details };
    copyNote.push(newnotes);
    setNote(copyNote);
  };

  const deleteBtn = (idx) => {
    const deleteCopy = [...Note];
    deleteCopy.splice(idx, 1);
    setNote(deleteCopy);
  };

  return (
    <>
      <div className="inputs">
        <h1>Write Notes</h1>
        <form
          onSubmit={(e) => {
            formHandler(e);
          }}
        >
          <input
            type="text"
            value={Heading}
            onChange={(e) => {
              setHeading(e.target.value);
            }}
            placeholder="Enter Heading"
          />
          <textarea
            value={Details}
            onChange={(e) => {
              setDetails(e.target.value);
            }}
            placeholder="Enter Details"
          ></textarea>
          <button>Make Note</button>
        </form>
      </div>
      <div className="notes">
        {Note.map((elem, index) => {
          if (elem.head === "") {
            console.log("please enter details first");
            return null;
          } else {
            return (
              <div className="note" key={index}>
                <h1>{elem.head}</h1>
                <p>{elem.detail}</p>
                <button
                  id="deletebtn"
                  onClick={() => {
                    deleteBtn(index);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          }
        })}
      </div>
    </>
  );
};

export default App;
