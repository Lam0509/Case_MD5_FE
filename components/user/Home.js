import React from "react";
import Helmet from "../../components/user/shares/Helmet";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import heroImg from "../../assets/user/images/hero.png";
import styles1 from '../../styles/user/hero-section.module.css'
import Link from 'next/link'
import Category from ".././../components/user/UI/Category";
import styles from '../../styles/user/home.module.css'
import featureImg01 from "../../assets/user/images/service-01.png";
import featureImg02 from "../../assets/user/images/service-02.png";
import featureImg03 from "../../assets/user/images/service-03.png";
import products from "../../assets/user/fake-data/products.js";
import foodCategoryImg01 from "../../assets/user/images/hamburger.png";
import foodCategoryImg02 from "../../assets/user/images/pizza.png";
import foodCategoryImg03 from "../../assets/user/images/bread.png";
import ProductCard from "../../components/user/UI/ProductCard";
import { useEffect, useState } from "react";
import whyImg from "../../assets/user/images/location.png";
import networkImg from "../../assets/user/images/network.png";
import TestimonialSlider from "../../components/user/UI/TestimonialSlider";
import { reviuu } from "../../assets/user/fake-data/reviu";
import {useDispatch} from "react-redux";
import {loggedIn} from "../../features/auth/authSlice";



const featureData = [
    {
        title: "Quick Delivery",
        imgUrl: featureImg01,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, saepe?",
    },
    {
        title: "Super Dine In",
        imgUrl: featureImg02,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, saepe?",
    },
    {
        title: "Easy Pick Up",
        imgUrl: featureImg03,
        desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero, saepe?",
    },
];

const Home = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    const [category, setCategory] = useState("ALL");
    const [allProducts, seeAllProducts] = useState(products);

    const [hotPizza, setHotPizza] = useState([]);

    useEffect(()=>{
        if(localStorage.getItem('token')){
            dispatch(loggedIn());
        }
    })


    useEffect(() => {
        const filterPizza = products.filter((item) => item.category === "Pizza");
        const slicePizza = filterPizza.slice(0, 4);
        setHotPizza(slicePizza);
    }, []);

    const [reviu, setReViu] = useState([]);
    useEffect(() => {
        const filterRiviu = reviuu.slice(0, 4);
        let arrRiviu = [];
        filterRiviu.forEach((item) => {
            let tem = {
                id: item.uuid,
                title: item.title,
                image01: item.comment_count,
                price: item.like_count,
            };
            arrRiviu.push(tem);
        });
        setReViu(arrRiviu);
    }, []);

    useEffect(() => {
        if (category === "ALL") {
            seeAllProducts(products);
        }

        if (category === "BURGER") {
            const filterProducts = products.filter(
                (item) => item.category === "Burger"
            );
            seeAllProducts(filterProducts);
            console.log("Burger active");
        }

        if (category === "PIZZA") {
            const filterProducts = products.filter(
                (item) => item.category === "Pizza"
            );
            seeAllProducts(filterProducts);
        }

        if (category === "BREAD") {
            const filterProducts = products.filter(
                (item) => item.category === "Bread"
            );
            seeAllProducts(filterProducts);
        }
    }, [category]);

    if (isLoading) {
        return <h1>Loading</h1>;
    }
    if (isError) {
        return <h1>Error</h1>;
    }

    return (
        <Helmet title="Home">
            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className={styles1.hero__content}>
                                <h5 className="mb-3">Easy way to make an order</h5>
                                <h1 className={`mb-4 ${styles1.hero__title}`}>
                                    <span className={styles1.hero__title__span}>HURRY?</span> Just wait <br /> food at
                                    <span className={styles1.hero__title__span}> your door</span>
                                </h1>
                                <p className={styles1.hero__content__p}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Earum consequuntur eligendi iure eaque!
                                </p>
                                <div className={`${styles.hero__btns} d-flex align-items-center gap-5 mt-4`}>
                                    <button className={`${styles1.hero__btns__button} ${styles1.order__btn} d-flex align-items-center justify-content-between`}>
                                        Order now <i className="ri-arrow-right-s-line"></i>
                                    </button>
                                    <button className={`${styles1.all__foods__btn} ${styles1.hero__btns__button}`}>
                                        <Link href="/foods">See all foods</Link>
                                    </button>
                                </div>
                            </div>
                            <div className="hero__service d-flex align-items-center gap-5 mt-5">
                                <p className={`${styles1.hero__service__p} d-flex align-items-center gap-2`}>
                  <span className="shipping__icon">
                    <i className={`${styles1.shipping__icon__i} ri-car-line`}></i>
                  </span>
                                    No shipping charge
                                </p>
                                <p className={`${styles1.hero__service__p} d-flex align-items-center gap-2`}>
                  <span className="shipping__icon">
                    <i className={`${styles1.shipping__icon__i} ri-shield-check-line`}></i>
                  </span>
                                    100% secure checkout
                                </p>
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <div className="hero__img">
                                <img src={heroImg.src} alt="hero-img" className="w-100" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Category />
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h5 className={`${styles.feature__subtitle} mb-4`}>What we serve</h5>
                            <h2 className="feature__title">Just sit back at home</h2>
                            <h2 className="feature__title">
                                We will <span className={styles.feature__title__span}>take care</span>
                            </h2>
                            <p className={`mb-1 mt-4 ${styles.feature__text}`}>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                Asperiores, quod!
                            </p>
                            <p className={styles.feature__text}>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                                Consequuntur, quia.
                            </p>
                        </Col>
                        {featureData.map((item, index) => (
                            <Col lg="4" md="6" sm="6" key={index} className="mt-5">
                                <div className={`${styles.feature__item} text-center px-5 py-3`}>
                                    <img
                                        className="w-25 mb-3"
                                        src={item.imgUrl.src}
                                        alt="feature-img"
                                    />
                                    <h5 className="fw-bold mb-3">{item.title}</h5>
                                    <p className={styles.feature__item__p}>{item.desc}</p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="12" className="text-center">
                            <h2>Popular Foods</h2>
                        </Col>

                        <Col lg="12">
                            <div className={`${styles.food__category} d-flex align-items-center gap-4 justify-content-center`}>
                                <button
                                    className={`${styles.food__category__button} all__btn ${
                                        category === "ALL" ? `${styles.foodBtnActive}` : ""
                                    }`}
                                    onClick={() => setCategory("ALL")}
                                >
                                    All
                                </button>
                                <button
                                    onClick={() => setCategory("BURGER")}
                                    className={`${styles.food__category__button} d-flex align-items-center gap-2 ${
                                        category === "BURGER" ? `${styles.foodBtnActive}` : ""
                                    }`}
                                >
                                    <img className={styles.food__category__button__img} src={foodCategoryImg01.src} alt="" />
                                    Burger
                                </button>
                                <button
                                    onClick={() => setCategory("PIZZA")}
                                    className={`${styles.food__category__button} d-flex align-items-center gap-2 ${
                                        category === "PIZZA" ? `${styles.foodBtnActive}` : ""
                                    }`}
                                >
                                    <img className={styles.food__category__button__img} src={foodCategoryImg02.src} alt="" />
                                    Pizza
                                </button>
                                <button
                                    onClick={() => setCategory("BREAD")}
                                    className={`${styles.food__category__button} d-flex align-items-center gap-2 ${
                                        category === "BREAD" ? `${styles.foodBtnActive}` : ""
                                    }`}
                                >
                                    <img className={styles.food__category__button__img} src={foodCategoryImg03.src} alt="" />
                                    Bread
                                </button>
                            </div>
                        </Col>
                        {allProducts.map((item) => (
                            <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section className={styles.why__choose__us}>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <img src={whyImg.src} alt="why-tasty-treat" className="w-100" />
                        </Col>
                        <Col lg="6" md="6">
                            <div className="why__tasty-treat">
                                <h2 className={`${styles.tasty__treat__title} mb-4`}>
                                    Why <span>Tasty Treat?</span>
                                </h2>
                                <p className={styles.testy__treat__desc}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia
                                    laboriosam fugiat, cupiditate ducimus alias vero amet facilis
                                    aspernatur laborum veniam nihil saepe natus odit explicabo
                                    accusamus repellat. Maxime, molestias sed?
                                </p>
                                <ListGroup className="mt-4">
                                    <ListGroupItem className="border-0 ps-0">
                                        <p className={`${styles.choose__us__title} d-flex align-items-center gap-2`}>
                                            <i className="ri-checkbox-circle-line"></i>
                                            Fresh and tasty foods
                                        </p>
                                        <p className={styles.choose__us__desc}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Illo, dicta?
                                        </p>
                                    </ListGroupItem>

                                    <ListGroupItem className="border-0 ps-0">
                                        <p className={`${styles.choose__us__title} d-flex align-items-center gap-2`}>
                                            <i className="ri-checkbox-circle-line"></i>
                                            Quality support
                                        </p>
                                        <p className={styles.choose__us__desc}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Illo, dicta?
                                        </p>
                                    </ListGroupItem>

                                    <ListGroupItem className="border-0 ps-0">
                                        <p className={`${styles.choose__us__title} d-flex align-items-center gap-2`}>
                                            <i className="ri-checkbox-circle-line"></i>
                                            Order from any location
                                        </p>
                                        <p className={styles.choose__us__desc}>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                            Illo, dicta?
                                        </p>
                                    </ListGroupItem>
                                </ListGroup>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="pt-0">
                <Container>
                    <Row>
                        <Col lg="12" className="text-center mb-5">
                            <h2>Hot Pizza</h2>
                        </Col>
                        {hotPizza.map((item) => (
                            <Col lg="3" md="4" key={item.id}>
                                <ProductCard item={item} />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>

            <section>
                <Container>
                    <Row>
                        <Col lg="6" md="6">
                            <div className="testimonial">
                                <h5 className={`${styles.testimonial__subtitle} mb-4`}>Testimonial</h5>
                                <h2 className={`${styles.testimonial__title} mb-4`}>
                                    What our <span>customers</span> are saying
                                </h2>
                                <p className={styles.testimonial__decs}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                                    Recusandae porro nisi officia labore soluta repudiandae
                                    quaerat cumque dolore quod dicta!
                                </p>

                                {/*<TestimonialSlider />*/}
                            </div>
                        </Col>
                        <Col lg="6" md="6">
                            <img src={networkImg.src} alt="network-img" className="w-100" />
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    );
};

export default Home;