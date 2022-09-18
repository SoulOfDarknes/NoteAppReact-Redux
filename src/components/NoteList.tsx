import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../hooks/useTypeSelector";
import { fetchNotes } from "../store/action-creater/notes";
import { Note } from "../types/note";


const NoteList: React.FC = () => {
    const { note, error, loading } = useTypedSelector(state => state.note)
     const dispatch: any = useDispatch()

    useEffect( () => {
        dispatch(fetchNotes())
    }, [])

    if (loading) {
        return <h1>Loadnig, wait a second...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }
    return (
        <div>
            {(note as Note[]).map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
        </div>
    )
}

export default NoteList;