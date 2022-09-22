import React, { useEffect, Fragment, useState } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { Note } from "../../types/note";
import EditRow from "../EditRow/EditRow";
import NotesRow from "../NotesRow/NotesRow";


const NoteList: React.FC = () => {
    const { note, error, loading } = useTypedSelector(state => state.note)
    const { fetchNotes } = useActions();
    const [editNotesId, setEditNotesId] = useState(1);

    const handleEditClick = (event: any, note: Note ) =>  {
        event.preventDefault();
        setEditNotesId(note.id);
    } 
    useEffect( () => {
        fetchNotes()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (loading) {
        return <h1>Loadnig, wait a second...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <tbody>
            {(note as Note[]).map((elem) => (
                <Fragment>
                    {editNotesId === elem.id ? <EditRow /> : <NotesRow {...elem}
                        handleEditClick={handleEditClick} />}
                    
                    
                </Fragment>
      ))}
        </tbody>
    )
}

export default NoteList;