import axios from "axios"
import { Dispatch } from "react"
import { NoteAction, NoteActionType } from "../../types/note"


export const fetchNotes = () => {
    return async (dispatch: Dispatch<NoteAction>) => {
        try {
            dispatch({
                type: NoteActionType.FETCH_NOTE
            })
            const response = await axios.get("http://myjson.dit.upm.es/api/bins/39ri")
            
            // Eduard its just imitation of loading,  you like that?
            setTimeout(() => {
                            dispatch({ type: NoteActionType.FETCH_NOTE_SUCCESS, payload: response.data })
            }, 500)

        } catch (e) {
            dispatch({
                type: NoteActionType.FETCH_NOTE_ERROR, payload: "Виникла помилка при загрузці нотаток, Ед допоможи її вирішти! Пасхалка"
            })
        }
    }
}