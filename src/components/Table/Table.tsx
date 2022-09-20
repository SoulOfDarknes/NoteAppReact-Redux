import React from "react";
import NoteList from "../NoteList/NoteList";
import { ReactComponent as archiveSvg } from "../../img/archive.svg";

import "./Table.scss";

const Table: React.FC = () => {
  console.log(archiveSvg)
    const headers = [
        { key: "category", label: " " },
        { key: "name", label: "Name" },
        { key: "created", label: "Created" },
        { key: "content", label: "Content" },
        { key: "dates", label: "Dates" },
        { key: "edit", label: "" },
        { key: "delete", label: "" },
        { key: "archived", label: "" },
         
    ]
    return (
        <div className="note">
            <table className="note__table data">
                <thead>
                    <tr>
                        {headers.map((row) => {
                          return <th key={row.key}>
                            {row.label}
                            </th>
            })}
                    </tr>
                </thead>
               <NoteList /> 
                
                
                <tbody>
    <tr>
      <td className="data">John Doe</td>
      <td className="data">johndoe@john.com</td>
      <td className="data">666-666-666</td>
      <td>
        <button className="save">Save</button>
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </td>
    </tr>
    <tr>
      <td className="data">John Doe</td>
      <td className="data">johndoe@john.com</td>
      <td className="data">666-666-666</td>
      <td>
        <button className="save">Save</button>
        <button className="edit">Edit</button>
        <button className="delete">Delete</button>
      </td>
    </tr>
  </tbody>
                </table>
                </div>
    );
}

export default Table;