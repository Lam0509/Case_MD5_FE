import React from "react";
import { Container } from "reactstrap";
import styles from '../../../styles/user/common-section.module.css'

const CommonSection = (props) => {
    return <section className={styles.common__section}>
        <Container>
            <h2 className="text-white">{props.title}</h2>
        </Container>
    </section>;
};

export default CommonSection;