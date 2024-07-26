import { setDoc, doc, getDocs, collection, deleteDoc } from "firebase/firestore";
import generateUniqueId from "generate-unique-id";
import { auth, db } from "../../firebaseConfring";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const GetDataSuc = (notes) => {
    console.log("notes",notes);
    return {
        type: "GETDATASUC",
        payload: notes
    };
};

/*SignUp normal action */

const newuserSignUp = (newUser) =>{
    return {
        type: "NEWUSER",
        payload: newUser
    }
}

const signupErr = (err) =>{
    return {
        type: "SIGNUPERR",
        payload: err
    }
}

const userLogin = (existuser) =>{
    return {
        type: "USERLOGIN",
        payload : existuser,
    }
}

const loginErr = (loginerr)=>{
    return {
        type: "LOGINERR",
        payload: loginerr,
    }
}

const logOut = ()=>{
    return {
        type: "LOGOUT",
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
    console.log("dlee>>",noteId);
    return async (dispatch) => {
        try {
            await deleteDoc(doc(db, "note", noteId))
            dispatch(GetDataAsync());
        } catch (err) {
            console.log("Error deleting note:", err)
        }
    }
}

/*Signup form*/

export const newUserAsync = (user) =>{
    return async (dispatch) => {
       await createUserWithEmailAndPassword(auth,user.email , user.password).then((userCredential)=>{
          
            dispatch(newuserSignUp(userCredential))
        }).catch((err)=>{
            dispatch(signupErr(err))
        })
    }
}

export const userLoginAsync = (loginUser)=>{
    return async (dispatch) =>{
        await signInWithEmailAndPassword(auth,loginUser.email , loginUser.password).then((res)=>{
            dispatch(userLogin(res))
        }).catch((err)=>{
            dispatch(loginErr(err))
        })
    } 
}

export const logOutAsync = ()=>{
    return  (dispatch) =>{
        dispatch(logOut())
    }
}