import React from "react";
import {useTypedSelector} from "../hooks/useTypeSelector"

const NoteList: React.FC = () => {
    const {note, error, loading} = useTypedSelector(state => state.note)
    console.log(note, error, loading);
    return (
        <div>
Hello
        </div>
    )
}

export default NoteList;