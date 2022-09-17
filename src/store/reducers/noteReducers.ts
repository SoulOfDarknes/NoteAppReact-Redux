import {NoteActionType, NoteState, NoteAction} from '../../types/note'

const initialState = {
    note: [],
    loading: false,
    error: null
}

export const noteReducer = (state = initialState, action: NoteAction): NoteState => {
    switch (action.type) {
        case NoteActionType.FETCH_NOTE:
            return {loading: true, error: null, note: []}
        case NoteActionType.FETCH_NOTE_SUCCESS:
            return {loading: false, error: null, note: action.payload}
        case NoteActionType.FETCH_NOTE_ERROR:
            return { loading: false, error: action.payload , note: [] }
        default:
            return state
    }
}