import React from 'react';

export const Notes = ({ notes }) => {
    return (
        <ul className="list-group">
            {notes.map(note => (
          <li
           className="list-group-item note"
           key={note.id}
           >
               <div className="row">
            <strong className="ml-4">{note.title}</strong>
            <small className="text-muted ml-4">{new Date().toLocaleDateString()}</small>
            </div>
           <button type="button" className="btn btn-outline-danger">&times;</button>
           </li>
            ))}
        </ul>
    )
}