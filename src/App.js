import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "../src/components/header/header.component";
import Footer from "./components/footer/footer.component";
import Notes from "./components/notes/notes.component";
import Note from "./components/note/note.component";
import SearchBox from "./components/search-box/search-box.component";
import fire from "./firebase/firebase";
import Login from "./components/login/login.component";

function App() {
  // for adding the note , also notes consits of all the notes
  const [notes, setNotes] = useState([]);
  //for each note
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  // toggle the button to edit or not based on the state
  const [toggleSubmit, setToggleSubmit] = useState(true);
  //to get the selected item when we click on edit button in notes
  const [isEditItem, setIsEditItem] = useState(null);
  // for the search functionality
  const [searchField, setSearchField] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // for the firebase functionalities
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, sethasAccount] = useState(false); // for switching bw sign-in and sign-out

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const loginHandler = () => {
    clearErrors("");
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-diabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const signUpHandler = () => {
    clearErrors("");
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  // function to show all the notes
  const addNotes = (note) => {
    setNotes((prevData) => {
      return [...prevData, note];
    });
    //console.log(note);
  };
  const onDeleteHandler = (id) => {
    //console.log(id);
    // console.log(addNote);
    // the previous data is filtered according if the id and the index matches
    setNotes((prevData) =>
      prevData.filter((item, ind) => {
        return ind !== id;
      })
    );
  };

  const changeEdittedItemsInNotesHandler = (note) => {
    if (!toggleSubmit) {
      setNotes((prevData) =>
        prevData.map((item, ind) => {
          if (ind === isEditItem) {
            return { ...item, title: note.title, content: note.content };
          }
          return item;
        })
      );

      console.log(notes);
      setToggleSubmit(true);
    }
  };

  // for ediiting the inputs
  const onEditHandler = (id) => {
    // find which item we are trying to edit
    const newEditItem = notes.find((item, ind) => {
      return ind === id;
    });

    //console.log(newEditItem);

    //set the toggleSubmit to false to edit the note
    setToggleSubmit(false);

    //the setNotes contain the notes data need that particular note
    setNote((prevState) => {
      return {
        title: newEditItem.title,
        content: newEditItem.content,
      };
    });

    // setting the id to setIsItem to compare and change
    setIsEditItem(id);
  };

  // for searching the terms

  const searchHandler = (searchField) => {
    setSearchField(searchField);

    // console.log(searchField);
    // if our search term is not empty then
    if (searchField !== "") {
      const filteredSearchNotes = notes.filter((note) => {
        //console.log(Object.values(note));

        return Object.values(note)
          .join("")
          .toLowerCase()
          .includes(searchField.toLowerCase());
      });

      // once we have filtered , set the searchResults to the newNotes
      setSearchResults(filteredSearchNotes);
    } else {
      // if the search field is empty set it to notes array
      setSearchResults(notes);
    }
  };

  return (
    <div className="App">
      {user ? (
        <>
          <Header handleLogout={handleLogout} />

          <SearchBox searchField={searchField} searchHandler={searchHandler} />

          <Notes
            passNote={addNotes}
            setToggleSubmit={setToggleSubmit}
            toggleSubmit={toggleSubmit}
            note={note}
            setNote={setNote}
            editItemChange={changeEdittedItemsInNotesHandler}
          />
          <div className="notes">
            {notes.map((item, index) => {
              return (
                <Note
                  title={item.title}
                  content={item.content}
                  id={index} // for deletion purpose we need the id
                  key={index}
                  deleteItem={onDeleteHandler}
                  editItem={onEditHandler}
                />
              );
            })}
          </div>

          <Footer />
        </>
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          loginHandler={loginHandler}
          signUpHandler={signUpHandler}
          hasAccount={hasAccount}
          sethasAccount={sethasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  );
}

export default App;
