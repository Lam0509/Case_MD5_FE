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

const FoodDetail = ({children}) => {
    const [product, setProduct] = useState({
        name: "",
        price: 0,
        quantity: 0,
        image: '',
    });
    const [categories, setCategories] = useState([])
    const {id} = useParams();

    useEffect(() => {
        function fetchData() {
            axios.get(`http://localhost:8000/productDetail/${id}`)
                .then((res) => {
                    setProduct(res.data.product);
                    setCategories(res.data.categories);
                    console.log(res.data)
                }).catch((error) => console.log(error)
            )
        }

        fetchData()
    }, []);

    const [tab, setTab] = useState("desc");
    const [enteredName, setEnterName] = useState("");
    const [enteredEmail, setEnterEmail] = useState("");
    const [reviewMsg, setReviewMsg] = useState("");
    const dispatch = useDispatch();

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
                    <Container>
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
                                        {/*<img src={product.image} alt="" className="w-50" />*/}
                                        <img
                                            src='https://bepmina.vn/wp-content/uploads/2021/07/cach-lam-khoai-tay-chien-scaled.jpeg'
                                            alt="" className="w-50"/>
                                    </div>
                                </div>
                            </Col>
                            <Col md="4">
                                <div className="product__main-img">
                                    {/*<img src={image} alt="" className="w-100" />*/}
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
                                    <i>Address: 17T4 Hapulico - Thanh Xuân - Hà Nội</i>
                                    <BasicRating/>
                                    <span className="product__price">
                                    Price: <span>{price}</span>
                                    </span>
                                    <p className="category mb-2">
                                        Category:
                                        {categories.map(category => {
                                            return <span>{category.name}</span>
                                        })}
                                    </p>
                                    <p style={{color: '#6cc942'}}>Open: <AccessTimeIcon
                                        style={{fontSize: "small"}}/> 07:00 - 20:30</p>
                                    <hr/>
                                    <div className='row mb-4'>
                                        <div className='col-lg-3' style={{position: "relative"}}>
                                            <p style={{marginBottom: 0}}>Service Fee</p>
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
                                            <p style={{marginBottom: 0}}>Service By</p>
                                            <p style={{color: '#df2020', fontWeight: 'bold'}}>Tasty Treat</p>
                                        </div>
                                    </div>
                                    <button onClick={addItem} className="addToCart__btn">
                                        Add to Cart
                                    </button>
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
                                {/*{tab === "desc" ? (*/}
                                {/*  <div className="tab__content">*/}
                                {/*    /!*<p>{desc}</p>*!/*/}
                                {/*  </div>*/}
                                {/*) : (*/}
                                {/*  <div className="tab__form mb-5">*/}
                                {/*    <form className="form" onSubmit={submitHandle}>*/}
                                {/*      <div className="form__group">*/}
                                {/*        <input*/}
                                {/*          type="text"*/}
                                {/*          placeholder="Enter your name"*/}
                                {/*          onChange={(e) => setEnterName(e.target.value)}*/}
                                {/*          required*/}
                                {/*        />*/}
                                {/*      </div>*/}
                                {/*      <div className="form__group">*/}
                                {/*        <input*/}
                                {/*          type="text"*/}
                                {/*          placeholder="Enter your email"*/}
                                {/*          onChange={(e) => setEnterEmail(e.target.value)}*/}
                                {/*          required*/}
                                {/*        />*/}
                                {/*      </div>*/}
                                {/*      <div className="form__group">*/}
                                {/*        <textarea*/}
                                {/*          rows={5}*/}
                                {/*          type="text"*/}
                                {/*          placeholder="Write your review"*/}
                                {/*          onChange={(e) => setReviewMsg(e.target.value)}*/}
                                {/*          required*/}
                                {/*        ></textarea>*/}
                                {/*      </div>*/}
                                {/*      <button type="submit" className="addToCart__btn">*/}
                                {/*        Submit*/}
                                {/*      </button>*/}
                                {/*    </form>*/}
                                {/*  </div>*/}
                                {/*)}*/}
                            </Col>
                            {/*<Outlet/>*/}
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