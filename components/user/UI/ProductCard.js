import React from "react";
import styles from '../../../styles/user/product-card.module.css'
import Link from 'next/link'
import {useDispatch, useSelector} from "react-redux";
import { cartActions } from "../../../features/shopping-cart/cartSlice";
import Snackbar from '@mui/material/Snackbar';
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import {useRouter} from "next/router";

const ProductCard = (props) => {
    const { id, name, image, price } = props.item;
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const auth = useSelector(state => state.auth)
    const router = useRouter()

    const addToCart = () => {
        if (auth.isLoggedIn) {
            dispatch(
                cartActions.addItem({
                    id,
                    name,
                    // image,
                    price,
                })
            );
            setOpen(true);
        } else {
            router.push('/login')
        }
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="warning" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );


    return (
        <div className={styles.product__item}>
            {/*<div className="product__img">*/}
            {/*    <img src={image} alt="product-img" className="w-50" />*/}
            {/*</div>*/}
            <div className="product__content">
                <h5 className={styles.product__content__h5}>
                    <Link href={`/foods/${id}`}>{name}</Link>
                </h5>
                <div className="d-flex align-items-center justify-content-between">
                    <span className={styles.product__price}>{price}</span>
                    <button className={styles.addToCart__btn} onClick={addToCart}>Add to Cart</button>
                </div>
            </div>
            <Snackbar
                open={open}
                autoHideDuration={2000}
                message="Add to cart successfully"
                onClose={handleClose}
                action={action}
            />
        </div>
    );
};

export default ProductCard;