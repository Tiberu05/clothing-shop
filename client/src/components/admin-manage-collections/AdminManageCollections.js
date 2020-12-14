import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { firestore } from '../../firebase/firebase.utils';

import AdminControl from '../admin-control/AdminControl';

import { makeStyles } from '@material-ui/core/styles';

import FormControl from '@material-ui/core/FormControl';

import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

const useStyles = makeStyles({
    formControl: {
        marginBottom: 10
    },
    form: {
        display: 'flex',
        flexDirection: 'column'
    },
    greenButton: {
        color: '#01FF70'
    }
})

const AdminManageCollections = props => {

    const classes = useStyles();

    const [collectionName, setCollectionName] = useState('');

    const collections = useSelector(state => Object.values(state.shop.collections));

    const addCollection = async () => {
        if (collectionName !== '') {
            const collectionRef = firestore.collection('/collections').doc(collectionName);

            const snapshot = await collectionRef.get();

            

            if (!snapshot.exists) {

                firestore.collection("collections").add({
                    title: collectionName.substring(0, 1).toUpperCase() + collectionName.substring(1, collectionName.length).toLowerCase(),
                    items: []
                })
                .then(docRef => {
                    console.log("Document written with ID: ", docRef.id);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });

            }
        }
    }

    return (
        <div>
            {/* Manage Collections
            {
                collections.map(el => {
                    return <div key={el.id}>
                                <div>{el.title}</div>
                            </div>
                })
            } */}

            <AdminControl sectionTitle='Add Collection' />
            <form autoComplete='off' className={classes.form}>
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="Collection Name" variant="outlined" value={collectionName} onChange={e => setCollectionName(e.target.value)} />
                </FormControl>
                <Button color='primary' onClick={addCollection}>Add a new collection</Button>
            </form>
            
        </div>
    )
};

export default AdminManageCollections;