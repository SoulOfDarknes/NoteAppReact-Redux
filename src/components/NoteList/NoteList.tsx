import React, { useEffect } from "react";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypeSelector";
import { Note } from "../../types/note";


const NoteList: React.FC = () => {
    const { note, error, loading } = useTypedSelector(state => state.note)
     const {fetchNotes} = useActions()

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
                <tr key={elem.id}>
                <td>{elem.category }</td>
                <td >{elem.name}</td>
                <td >{elem.created}</td>
                <td >{elem.content}</td>
                <td >{elem.dates}</td>
                </tr>
      ))}
        </tbody>
    )
}

export default NoteList;