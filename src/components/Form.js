import React, { useState, useContext } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { FirebaseContext } from './../context/firebase/firebaseContext';


export const Form = () => {
  const [value, setValue] = useState('')

  const alert = useContext(AlertContext)

  const firebase = useContext(FirebaseContext)

  const submitHandler = event => {
    event.preventDefault();
    if(value.trim()) {
      firebase.addNote(value.trim()).then(() =>{ 
      alert.show('The note has been created', 'success')
      }).catch(() => {
        alert.show('Something gone wrong', 'danger')
      })
      setValue('')
    } else {
      alert.show('Enter the note text please')
    }    
  }

    return (
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label htmlFor="note">Insert any data</label>
            <input 
            type="text" 
            className="form-control" 
            id="note"
            value={value}
            onChange={e => setValue(e.target.value)}
            />
          </div>
        </form>
    )
}