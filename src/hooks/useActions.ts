import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import * as fetchNotes from "../store/action-creater/notes"


export const useActions = () => {
    const dispatch: any = useDispatch();
    return bindActionCreators(fetchNotes, dispatch);
}