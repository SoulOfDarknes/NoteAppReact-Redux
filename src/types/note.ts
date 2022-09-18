export type Note = {
  id: number;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  archived: boolean;
};

export enum NoteActionType {
    FETCH_NOTE = 'FETCH_NOTE',
    FETCH_NOTE_SUCCESS = 'FETCH_NOTE_',
    FETCH_NOTE_ERROR = 'FETCH_NOTE_ERROR'
}

export interface NoteState {
    note: any[];
    loading: boolean;
    error: null | string;
}

export type NoteAction = FetchNoteAction | FetchNoteErrorAction | FetchNoteSuccessAction;

interface FetchNoteAction {
    type: NoteActionType.FETCH_NOTE;
}
interface FetchNoteSuccessAction {
    type: NoteActionType.FETCH_NOTE_SUCCESS;
    payload: any[];
}
interface FetchNoteErrorAction {
    type: NoteActionType.FETCH_NOTE_ERROR;
    payload: string;
}


