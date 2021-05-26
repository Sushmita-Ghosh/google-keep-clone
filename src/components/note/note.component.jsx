import React, { useState } from "react";
import { MdDelete, MdModeEdit, MdColorLens } from "react-icons/md";

import "./note.styles.scss";

const Note = ({ title, content, deleteItem, id, editItem }) => {
  const colors = [
    {
      id: 1,
      name: "mediumpurple",
    },
    {
      id: 2,
      name: "mediumorchid",
    },

    {
      id: 3,
      name: "mediumseagreen",
    },

    {
      id: 4,
      name: "wheat",
    },
  ];

  // to check if color is present or not and render accordingly

  const [isColor, setIsColor] = useState(false);

  const [color, setColor] = useState({
    id: "",
    color: "",
  });

  const [background, setBackground] = useState(false);

  const deleteNote = () => {
    deleteItem(id);
  };

  const editNote = () => {
    editItem(id);
  };

  const displayDropdown = () => {
    // for toggling the value of color
    isColor ? setIsColor(false) : setIsColor(true);
  };

  const changeBackground = (e) => {
    var color_clicked = e.target.id;
    const colored = colors.find((item) => item.id === Number(color_clicked));
    // console.log(colored);

    //we will set the background variable to true
    setBackground(true);

    // setting the color variable to true
    setColor({
      id: colored.id,
      name: colored.name,
    });
  };

  return (
    <div
      className="note"
      style={{ backgroundColor: background ? color.name : "white" }}
    >
      <h3>{title}</h3>

      <br />
      <p>{content}</p>

      <div className="btn-container">
        <button className="button" onClick={deleteNote}>
          <MdDelete className="icon" />
        </button>
        <button className="button1" onClick={editNote}>
          <MdModeEdit className="icon1" />
        </button>

        <button className="button2" onClick={displayDropdown}>
          <MdColorLens className="icon3" />
        </button>

        {isColor ? (
          <div className="color-div">
            {colors.map((color) => {
              return (
                <div
                  key={color.id}
                  id={color.id}
                  style={{
                    backgroundColor: color.name,
                  }}
                  className="item-div"
                  onClick={changeBackground}
                ></div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Note;
