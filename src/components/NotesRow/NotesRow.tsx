import React from 'react';
import { Note } from "../../types/note";

const NotesRow: React.FC<Note> = (elem) =>  {
  
    return (
                      <tr key={elem.id}>
                <td>{elem.category }</td>
                <td >{elem.name}</td>
                <td >{elem.created}</td>
                <td >{elem.content}</td>
                <td >{elem.dates}</td>
                </tr>
    )
  }


export default NotesRow;
