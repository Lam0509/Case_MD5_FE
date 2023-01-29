import React from "react";

import { Container, Row, Col } from "reactstrap";

import styles from '../../../styles/user/category.module.css';

const categoryData = [
    {
        display: "Fastfood",
    },
    {
        display: "Pizza",
    },
    {
        display: "Asian Food",
    },
    {
        display: "Row Meat",
    },
];

const Category = () => {
    return (
        <Container>
            <Row>
                {categoryData.map((item, index) => (
                    <Col lg="3" md="4" sm="6" xs="6" className="mb-4">
                        <div className={`${styles.category__item} d-flex align-items-center gap-3`}>
                            <h6 className={styles.category__item__h6}>{item.display}</h6>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Category;