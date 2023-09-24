import React from "react";
import { BiSearch } from 'react-icons/bi';
import {BsPlusLg} from 'react-icons/bs'
import dummyNotes from '../dummy__notes.js';
import { Link } from "react-router-dom";
import NoteItem from '../components/NoteItem.jsx'
const Notes = () => {
  return (
    <section>
      <header className="notes__header">
        <h2>My Notes</h2>
        <input type="text" autoFocus placeholder="Keyword..." />
        <button className="btn"><BiSearch/></button>
      </header>

      <div className="notes__container">
        {
          dummyNotes.map(note => <NoteItem key={note.id} note={ note} />)
          }
      </div>
          <Link className="btn add__btn"><BsPlusLg/></Link>

    </section>
  )
}

export default Notes
