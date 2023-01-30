import React, {useState, useEffect} from "react";
import {Outlet, useParams} from "react-router-dom";
import Link from 'next/link'
import Helmet from "../../components/user/shares/Helmet";
import CommonSection from "../../components/user/UI/CommonSection";
import {Container, Row, Col} from "reactstrap";
import ProductCard from "../../components/user/UI/ProductCard";
import {useDispatch} from "react-redux";
import {cartActions} from "../../features/shopping-cart/cartSlice";
import axios from "axios";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BasicRating from "../../components/user/UI/Rating";
import CircleIcon from '@mui/icons-material/Circle';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Reviews from "./Review";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {loggedIn} from "../../features/auth/authSlice";

const FoodDetail = ({children, myProduct, myCategories, id}) => {
    const dispatch = useDispatch();

    useEffect(()=>{
        if(localStorage.getItem('token')){
            dispatch(loggedIn());
        }
    })

    const product = myProduct

    const [enteredName, setEnterName] = useState("");
    const [enteredEmail, setEnterEmail] = useState("");
    const [reviewMsg, setReviewMsg] = useState("");

    const {name, price, quantity, image} = product;
    const [previewImg, setPreviewImg] = useState(product.image);
    const [open, setOpen] = React.useState(false);
    const addItem = () => {
        dispatch(
            cartActions.addItem({
                name,
                price,
                quantity,
                image,
            })
        );
        setOpen(true);
    };

    const submitHandle = e => {
        e.preventDefault()
        console.log(enteredName, enteredEmail, reviewMsg);
    }
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small"/>
            </IconButton>
        </React.Fragment>
    );


    useEffect(() => {
        setPreviewImg(product.image);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    if (product) {
        return (
            <Helmet title="Product-details">
                <CommonSection title={name}/>

                <section>
                    <Container style={{marginTop:'30px'}}>
                        <Row>
                            <Col md="2">
                                <div className="product__images">
                                    <div
                                        className="img__item mb-2"
                                        onClick={() => setPreviewImg(product.image)}
                                    >
                                        {/*<img src={product.image} alt="" className="w-50" />*/}
                                        <img
                                            src='https://bepmina.vn/wp-content/uploads/2021/07/cach-lam-khoai-tay-chien-scaled.jpeg'
                                            alt="" className="w-50"/>
                                    </div>
                                    <div
                                        className="img__item mb-2"
                                        onClick={() => setPreviewImg(product.image)}
                                    >
                                        {/*<img src={product.image} alt="" className="w-50" />*/}
                                        <img
                                            src='https://bepmina.vn/wp-content/uploads/2021/07/cach-lam-khoai-tay-chien-scaled.jpeg'
                                            alt="" className="w-50"/>
                                    </div>
                                    <div
                                        className="img__item mb-2"
                                        onClick={() => setPreviewImg(product.image)}
                                    >
                                        <img
                                            src='https://bepmina.vn/wp-content/uploads/2021/07/cach-lam-khoai-tay-chien-scaled.jpeg'
                                            alt="" className="w-50"/>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="product__main-img">
                                    <img
                                        src='https://bepmina.vn/wp-content/uploads/2021/07/cach-lam-khoai-tay-chien-scaled.jpeg'
                                        alt="" className="w-100"/>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="single__product-content">
                                    <div style={{
                                        background: '#df2020',
                                        width: '70px',
                                        color: "white",
                                        padding: '2px 5px'
                                    }}><ThumbUpAltIcon style={{color: 'white', fontSize: 'medium'}}/> Liked
                                    </div>
                                    <h2 className="product__title mb-3">{name}</h2>
                                    <b>Address: </b><i>17T4 Hapulico - Thanh Xuân - Hà Nội</i>
                                    <BasicRating/>
                                    <span className="product__price">
                                    <b>Price:</b> <span>{price}</span>
                                    </span>
                                    <p  className="category mb-2">
                                        <b>Category:</b> {myCategories.map(category => {
                                            return <div>{category.name} </div>
                                        })}
                                    </p>
                                    <p style={{color: '#6cc942'}}><b>Open:</b> <AccessTimeIcon
                                        style={{fontSize: "small"}}/> 07:00 - 20:30</p>
                                    <hr/>
                                    <div className='row mb-4'>
                                        <div className='col-lg-3' style={{position: "relative"}}>
                                            <b style={{marginBottom: 0}}>Service Fee</b>
                                            <p style={{color: '#df2020', fontWeight: 'bold'}}>0,04% sFee</p>
                                            <span style={{
                                                width: '116px',
                                                height: '44px',
                                                position: "absolute",
                                                top: '15px',
                                                right: '8px',
                                                rotate: '-0.4deg',
                                                backgroundImage: "url('https://shopeefood.vn/app/assets/img/partner-vi.png?dec00ea8fc6f5429f18e83d16c3685f8')"
                                            }}></span>
                                        </div>
                                        <div className='col-lg-1'>
                                            |
                                        </div>
                                        <div className='col-lg-8'>
                                            <b style={{marginBottom: 0}}>Service By</b>
                                            <p style={{color: '#df2020', fontWeight: 'bold'}}>Tasty Treat</p>
                                        </div>
                                    </div>
                                    <Button onClick={addItem} variant="contained" color="error">
                                        Add to cart
                                    </Button>
                                </div>
                            </Col>
                            <Col lg="12">
                                <div className="tabs d-flex align-items-center gap-3 py-2">
                                    <h6>
                                        <Link style={{fontWeight: 'bold'}} href={`/foods/${id}/comments`}>
                                            Ratings and comments
                                        </Link>
                                    </h6>
                                    <Reviews/>
                                </div>
                            </Col>
                            {children}
                        </Row>
                    </Container>
                </section>
                <Snackbar
                    open={open}
                    autoHideDuration={2000}
                    onClose={handleClose}
                    message="Add to cart successfully"
                    action={action}
                />
            </Helmet>
        );
    } else {
        return <h1>Loading...</h1>
    }
};

export default FoodDetail;