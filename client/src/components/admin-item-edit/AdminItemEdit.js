import React, {useEffect, useState} from 'react';
import { useSelector, connect } from 'react-redux';

import AdminControl from '../admin-control/AdminControl';

import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';

import { firestore } from '../../firebase/firebase.utils';
import { fetchCollectionsStart } from '../../redux/actions/shop';
import { selectCollection } from '../../redux/selectors/shopSelector';

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

const AdminItemEdit = (props) => {

    const classes = useStyles();

    const { match } = props;

    const collection = useSelector(state => selectCollection(match.params.collection)(state));

    const [name, setName] = useState('props.item.name');
    const [price, setPrice] = useState('props.item.price');

    useEffect(() => {

        if (collection) {
            const item = collection.items.find(el => el.id == match.params.item);


            setName(item.name);
            setPrice(item.price)
        }
        
    }, [collection])


    const updateItem = async (collectionKey,  items, itemID, itemName, itemPrice, newObject) => {
        const collectionRef = firestore.doc(`/collections/${collectionKey}`);
    
        return collectionRef.update({
            items: items.map(item => {
                if (item.id == itemID) {
                    return { ...item, name: itemName, price: Number(itemPrice) }
                } else {
                    return item
                }
            })
        })
        .then((res) => {

            props.fetchCollectionsStart();

            props.history.push('/admin/items');
        })
        .catch(err => console.log(err))
    
    }

    const onSubmit = (e) => {

        e.preventDefault();

        if (name && price !== 0) {
            updateItem(collection.id, collection.items, match.params.item, name, price);

            // props.fetchCollectionsStart();

            // props.history.push('/admin/deleteitem');
        }

    }

    return (
        <div className='edit-item'>

            <AdminControl sectionTitle='Edit Item' where='/admin/items' />

            <form autoComplete='off' className={classes.form} onSubmit={onSubmit}>

                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="Item name" variant="outlined" value={name} onChange={e => setName(e.target.value)} />
                </FormControl>
                
                <FormControl className={classes.formControl}>
                    <TextField id="outlined-basic" label="Item price" variant="outlined" value={price} onChange={e => setPrice(e.target.value)} />
                </FormControl>

                <Button color='primary' type='submit'>Submit changes</Button>
            </form>
        </div>
    )
};

export default connect(null, { fetchCollectionsStart })(AdminItemEdit);