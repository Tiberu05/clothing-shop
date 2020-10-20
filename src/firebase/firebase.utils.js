import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAQ8uKwoegoLeip23ldr3nyX4r1lGIvabs",
    authDomain: "clothing-shopdb-aa350.firebaseapp.com",
    databaseURL: "https://clothing-shopdb-aa350.firebaseio.com",
    projectId: "clothing-shopdb-aa350",
    storageBucket: "clothing-shopdb-aa350.appspot.com",
    messagingSenderId: "179478571716",
    appId: "1:179478571716:web:b7daad3e16452a07663791",
    measurementId: "G-27WGCB6NC6"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, aditionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`/users/${userAuth.uid}`);

    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;

        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...aditionalData
            })
        } catch (err) {
            console.log('Error creating user: ' + err)
        }
    }

    return userRef;
}


export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);

    const batch = firestore.batch();

    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
    });

    return await batch.commit();
};

export const getCollections = async () => {
    const collectionsRef = firestore.collection('collections');

    const collectionsData = await collectionsRef.get();

    const collectionsDocs = await collectionsData.docs.map(doc => doc.data());

    const convertArrayToObject = (array, key) => {
        const initialValue = {};
        return array.reduce((obj, item) => {
          return {
            ...obj,
            [item[key]]: {...item, id: item.id, routeName: item[key].toLowerCase()},
          };
        }, initialValue);
      };

    const collections = convertArrayToObject(collectionsDocs, 'title');
    
    return collections;
};

export const convertCollectionsSnapshot = collections => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })

    return transformedCollection.reduce((acc, collection) => {
        acc[collection.title.toLowerCase()] = collection;
        return acc;
    }, {})
};


const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
