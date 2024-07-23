import firebase from "../../config/firebase"
export const userSignup = (data, onComplete = () => {})=> () => {
    let { password, ...newdata } = data;
    let newData = {
        ...newdata,
        created_at: firebase.firestore.Timestamp.now()
    }
    firebase.auth().createUserWithEmailAndPassword(data.email, data.pass).then((data) => {
        firebase.firestore().collection("users").doc(data.user.uid).set(newData).then(() => {
            onComplete()
        })  

    })
}