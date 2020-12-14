import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import uniqid from 'uniqid';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
                ...additionalData
            })
        } catch (err) {
            console.log('Error creating user: ' + err)
        }
    }

    return userRef;
}

export const addItem = async (collectionKey, name, price, imageUrl) => {
    const collectionRef = firestore.doc(`/collections/${collectionKey}`);

    const snapshot = await collectionRef.get();

    return collectionRef.update({
        items: [ ...snapshot.data().items, { id: uniqid(), name, price, imageUrl }]
    })
    .then((res) => console.log('Succes'))
    .catch(err => console.log(err))
};

export const updateItem = async (collectionKey,  items, itemID, itemName, itemPrice, newObject) => {
    const collectionRef = firestore.doc(`/collections/${collectionKey}`);

    return collectionRef.update({
        items: items.map(item => {
            if (item.id == itemID) {
                return { ...item, name: itemName, price: itemPrice }
            } else {
                return item
            }
        })
    })
    .then(() => console.log('Document succesfully updated'))
    .catch(err => console.log(err))

}

export const deleteItem = async (collectionKey, itemID) => {
    const collectionRef = firestore.doc(`/collections/${collectionKey}`);

    const snapshot = await collectionRef.get();

    return collectionRef.update({
        items: snapshot.data().items.filter(el => el.id !== itemID)
    })
    .then(() => console.log('Document succesfully deleted'))
    .catch(err => console.log(err))
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

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unusubscribe = auth.onAuthStateChanged(userAuth => {
            unusubscribe();
            resolve(userAuth);
        }, reject)
    })
}


export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
//export const signInWithGoogle = () => auth.signInWithPopup(provider);

 

export default firebase;
