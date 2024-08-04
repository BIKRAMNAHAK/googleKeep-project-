import { setDoc, doc, getDocs, collection, deleteDoc, } from "firebase/firestore";
import generateUniqueId from "generate-unique-id";
import { auth, db, storage } from "../../firebaseConfring";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
const provider = new GoogleAuthProvider();

const GetDataSuc = (notes) => {
    console.log("notes", notes);
    return {
        type: "GETDATASUC",
        payload: notes
    };
};

const deleteallnotes =(deletedata)=>{
    return{
        type: "DELETEALLNOTES",
        payload : deletedata
    }
}

const newuserSignUp = (newUser) => {
    return {
        type: "NEWUSER",
        payload: newUser
    }
}

const signupErr = (err) => {
    return {
        type: "SIGNUPERR",
        payload: err
    }
}

const userLogin = (existuser) => {
    return {
        type: "USERLOGIN",
        payload: existuser,
    }
}

const bygoogle = (res) => {
    return {
        type: "BYGOOGLE",
        payload: res
    }
}

const loginErr = (loginerr) => {
    return {
        type: "LOGINERR",
        payload: loginerr,
    }
}

const logOut = () => {
    return {
        type: "LOGOUT",
    }
}


/* notes */
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


export const updateNotesAsync = (updatenotes) => {
    return async (dispatch) => {
        try {
            await setDoc(doc(db, 'note', `${updatenotes.id}`), updatenotes)
            dispatch(GetDataAsync());
        } catch (err) {
            console.log("error", err)
        }
    }
}

export const deleteNoteAsync = (noteId) => {
    console.log("dlee>>", noteId);
    return async (dispatch) => {
        try {
            await deleteDoc(doc(db, "note", noteId))
            dispatch(GetDataAsync());
        } catch (err) {
            console.log("Error deleting note:", err)
        }
    }
}

export const deleteAllNoteAsync = () => {
    return async (dispatch) => {
        try {
            const querySnapshot = await getDocs(collection(db, "note"));
            let deletefile = querySnapshot.forEach((doc) => {
                deleteDoc(doc.ref);
            })
            dispatch(deleteallnotes(deletefile))
         } catch (err) {
            console.log("Error deleting all notes:", err)
        }
    }
}

export const loadImageAsync =(file)=>{
    return (dispatch)=>{
        const storageref = ref(storage , `imags/${file.name}`)
        return uploadBytes(storageref ,file).then((snapshort)=>{
           return getDownloadURL(snapshort.ref)
        }).then((url)=>{
            console.log("imagelink",url);
            return url
        }).catch((err)=>{
            console.log("this file can't be reached on page",err);
        })

    }
}

/*Signup form*/

export const newUserAsync = (user) => {
    return async (dispatch) => {
        await createUserWithEmailAndPassword(auth, user.email, user.password).then((userCredential) => {

            dispatch(newuserSignUp(userCredential))
        }).catch((err) => {
            dispatch(signupErr(err))
        })
    }
}

export const userLoginAsync = (loginUser) => {
    return async (dispatch) => {
        await signInWithEmailAndPassword(auth, loginUser.email, loginUser.password).then((res) => {
            dispatch(userLogin(res))
        }).catch((err) => {
            dispatch(loginErr(err))
        })
    }
}

export const conectWithGoogle = () => {
    return (dispatch) => {
        signInWithPopup(auth, provider).then((result) => {
            dispatch(bygoogle(result))
        }).catch((err) => {
            // dispatch(googlerr(err))
        })
    }
}

export const logOutAsync = () => {
    return (dispatch) => {
        dispatch(logOut())
    }
}