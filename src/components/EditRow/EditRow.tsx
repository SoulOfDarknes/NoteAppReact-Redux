import React from "react";
import { DateSelector } from "../DatePicker/Date";

 const EditRow: React.FC = () => {
    const date: Date = new Date();
    const dateString: string = date.toLocaleString("eng", {
        month: "long",
        day: "numeric",
      year: "numeric",
    });
     return (
         
        <tr>
            <td> </td>
            <td>
                <input
                type="text"
                required
                placeholder="Enter the name...."
                name="nameNote"
            ></input>
            </td>
             <td>
                 {dateString}
             </td>
             <td>
                 <input
                type="text"
                required
                placeholder="Enter the content...."
                name="contentNote"
            ></input>
        </td>
             <td>
                 <DateSelector />
                 changed to
                 <DateSelector />
             </td>
         </tr>
    )
}

export default EditRow;