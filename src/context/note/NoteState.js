import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const note = [
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new update",
      description: "new update",
      tag: "New learn",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
    {
      _id: "660be4cbdd283ca68b111c86",
      user: "660bb26898c41f1cc33aa57e",
      title: "new ",
      description: " update",
      tag: "New ",
      date: "2024-04-02T10:58:19.304Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(note);

  return (
    <NoteContext.Provider value={{ notes, setNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
