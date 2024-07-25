import { setDoc, doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import generateUniqueId from "generate-unique-id";
import { db } from "../../firebaseConfring";


const GetDataSuc = (notes) => {
    console.log("notes",notes);
    return {
        type: "GETDATASUC",
        payload: notes
    };
};


const deleteNoteSuccess = (noteId) => {
    return {
        type: "DELETENOTESUC",
        payload: noteId
    }
}

export const addNoteAsync = (note) => {
    return async (dispatch) => {
        try {
            note.id = generateUniqueId({
                length: 3,
                useLetters: false
            });
            await setDoc(doc(db, "note", `${note.id}`), note);
            dispatch(GetDataAsync());
        } catch (err) {
            console.log("error", err);
        }
    };
};

export const GetDataAsync = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, "note"));
            let notesdata = [];
            querySnapshot.forEach((doc) => {
                console.log(`doc${doc.id}`, doc);
                notesdata = [...notesdata, doc.data()];
            });
            dispatch(GetDataSuc(notesdata));
        } catch (err) {
            console.log("error", err);
        }
    };
};


export const deleteNoteAsync = (noteId) => {
    return async (dispatch) => {
        try {
            await deleteDoc(doc(db, "note", noteId))
            dispatch(deleteNoteSuccess(noteId))
        } catch (err) {
            console.log("Error deleting note:", err)
        }
    }
}

