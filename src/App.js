import React, { useState, useEffect, useRef } from "react";

const useConfirm = (message, onConfirm, onCancel) => {
  if (!onConfirm && typeof onConfirm !== "function") {
    return;
  }

  if (!onCancel && typeof onCancel !== "function") {
    return;
  }

  const confirmAction = () => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};

const App = () => {
  const abort = () => console.log("Nope.");
  const deleteWorld = () => console.log("Deleting !!!!");
  const confirmDelete = useConfirm("Are u sure ?", deleteWorld, abort);

  return (
    <div className="App">
      <div>Hi !</div>
      <button onClick={confirmDelete}>Delete the world</button>
    </div>
  );
};
export default App;
