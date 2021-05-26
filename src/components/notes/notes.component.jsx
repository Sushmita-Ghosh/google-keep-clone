import React, { useState } from "react";
import "./notes.styles.scss";
import { MdAdd, MdModeEdit } from "react-icons/md";

const Notes = (props) => {
  const formHandler = (event) => {
    event.preventDefault();
  };

  const setInputHandler = (event) => {
    const { name, value } = event.target;

    props.setNote((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const addTriggerHandler = () => {
    props.passNote(props.note);

    props.setNote({
      title: "",
      content: "",
    });
  };

  const editTriggerHandler = () => {
    props.editItemChange(props.note);

    props.setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className="notes-container">
      <div className="form">
        <input
          type="text"
          name="title"
          value={props.note.title}
          onChange={setInputHandler}
          placeholder="Title"
          autoComplete="off"
        />
        <textarea
          rows=""
          cols=""
          name="content"
          value={props.note.content}
          onChange={setInputHandler}
          placeholder="Take a note.."
        />

        {props.toggleSubmit ? (
          <button className="button" onClick={addTriggerHandler}>
            <MdAdd className="icon" />
          </button>
        ) : (
          <button className="button" onClick={editTriggerHandler}>
            <MdModeEdit className="icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Notes;
