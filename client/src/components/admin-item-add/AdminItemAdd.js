import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import uniqid from 'uniqid';

import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';


import './AdminItemAdd.scss';
import AdminControl from '../admin-control/AdminControl';

import { fetchCollectionsStart } from '../../redux/actions/shop';

import { selectCollections } from '../../redux/selectors/shopSelector';

import { firestore } from '../../firebase/firebase.utils';


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

const AdminItemAdd = props => {

    const classes = useStyles();

    const { match, history } = props;

    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [imageUrl, setImageUrl] = useState('');
    const [itemCollection, setItemCollection] =  useState('');

    const [snackbarSucces, setSnackbarSucces] = useState(false);

    console.log(price);
    console.log(typeof price);

    const addItem = async (collectionKey, name, price, imageUrl) => {
        const collectionRef = firestore.doc(`/collections/${collectionKey}`);
    
        const snapshot = await collectionRef.get();
    
        return collectionRef.update({
            items: [ ...snapshot.data().items, { id: uniqid(), name, price: Number(price), imageUrl }]
        })
        .then((res) => {

            setSnackbarSucces(true);

            props.fetchCollectionsStart();

            
        })
        .catch(err => console.log(err))
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setSnackbarSucces(false);
      };

    const submitAdd = (e) => {
        e.preventDefault();

        //https://media.gq.com/photos/5d93aa2c636d4800084025ae/4:3/w_1600%2Cc_limit/sneakers.jpg

        addItem(itemCollection, name, price, imageUrl).then(res => console.log(res)).catch(err => console.log(err));

        
    }

    return (
        <div className='admin-add'>
            
            <AdminControl sectionTitle='Add Items' />

            <form autoComplete='off' className={classes.form}>
                <FormControl className={classes.formControl}>
                    <InputLabel>Collection</InputLabel>
                    <Select
                        value={itemCollection}
                        onChange={e => setItemCollection(e.target.value)}
                    >
                        {
                            props.collections.map(el => {
                                return <MenuItem key={el.id} value={`${el.id}`} >{el.title}</MenuItem>
                            })
                        }
                    </Select>
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="Item name" variant="outlined" value={name} onChange={e => setName(e.target.value)} />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField type='number' id="outlined-basic" label="Item price" variant="outlined" value={price} onChange={e => setPrice(e.target.value)} />
                </FormControl>

                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="Item imageUrl" variant="outlined" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
                </FormControl>
                
                {/* <div>Item name</div>
                <input className='admin-input' type='text' name='name' autoComplete='off' value={name} onChange={e => setName(e.target.value)} /> */}

                {/* <div>Item price</div>
                <input type='text' name='price' autoComplete='off' value={price} onChange={e => setPrice(e.target.value)} />

                <div>Item image</div>
                <input type='text' name='imageUrl' autoComplete='off' value={imageUrl} onChange={e => setImageUrl(e.target.value)} /> */}

                <Button color='primary' onClick={submitAdd}>Add item</Button>
            </form>
            
            <Snackbar
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
                }}
                open={snackbarSucces}
                autoHideDuration={6000}
                onClose={handleClose}
                message="Succes"
                action={
                    <React.Fragment>
                      <Button className={classes.greenButton} size="small" onClick={() => props.history.push('/admin/items')}>
                        Go to items list
                      </Button>
                    </React.Fragment>
                  }
            />
            
        </div>
    )
};

const mapStateToProps = state => {
    return {
        collections: Object.values(selectCollections(state))
    }
}

export default withRouter(connect(mapStateToProps, { fetchCollectionsStart })(AdminItemAdd));