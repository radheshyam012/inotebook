import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = "http://localhost:5000";
  const IniteNote = [];

  const [notes, setNotes] = useState(IniteNote);

  //Get all note
  const getAllNotes = async () => {
    //ToDo: api call
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYmIyNjg5OGM0MWYxY2MzM2FhNTdlIn0sImlhdCI6MTcxMjgxNTYyNn0.r_2WbmcRIvDeDojSPNJEgTdk56gDZ5yoJdjpyA83CXM",
      },
      // body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);
    setNotes(json);
  };
  const addNote = async (title, description, tag) => {
    //ToDo: api call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYmIyNjg5OGM0MWYxY2MzM2FhNTdlIn0sImlhdCI6MTcxMjgxNTYyNn0.r_2WbmcRIvDeDojSPNJEgTdk56gDZ5yoJdjpyA83CXM",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();
    console.log("Adding new note");
    console.log(json);
    const addnote = {
      _id: "660be4cbdd2ss83ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: title,
      description: description,
      tag: tag,
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    };
    setNotes(notes.concat(addnote));
  };

  //edit note
  const editNote = async (id, title, description, tag) => {
    // api call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYmIyNjg5OGM0MWYxY2MzM2FhNTdlIn0sImlhdCI6MTcxMjgxNTYyNn0.r_2WbmcRIvDeDojSPNJEgTdk56gDZ5yoJdjpyA83CXM",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = await response.json();
    console.log(json);

    const newNote = JSON.parse(JSON.stringify(notes));
    //edit note logic
    for (let index = 0; index < newNote.length; index++) {
      const element = newNote[index];
      if (element._id === id) {
        newNote[index].title = title;
        newNote[index].description = description;
        newNote[index].tag = tag;
        break;
      }
    }
    setNotes(newNote);
  };

  //Delete note
  const deleteNote = async (id) => {
    //api call
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjYwYmIyNjg5OGM0MWYxY2MzM2FhNTdlIn0sImlhdCI6MTcxMjgxNTYyNn0.r_2WbmcRIvDeDojSPNJEgTdk56gDZ5yoJdjpyA83CXM",
      },
    });
    const json = response.json();
    console.log("Deleting the note " + json);
    console.log("Deleting the note " + id);
    const newNote = notes.filter((n) => {
      return n._id !== id;
    });
    setNotes(newNote);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, editNote, deleteNote, getAllNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
