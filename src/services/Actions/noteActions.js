import { setDoc, doc } from "firebase/firestore";
import generateUniqueId from "generate-unique-id";
import { db } from "./firebase"; // Adjust the import based on your project structure


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

// export const GetDataAsync = () => {
//     return async (dispatch) => {

//         const querySnapshot = await getDocs(collection(db, "note"));
//         const notesdata = [];
//         querySnapshot.forEach((doc) => {
//             console.log(`doc${doc.id}` ,doc);
//         });
//         dispatch(GetData(Dd));
//     };
// };