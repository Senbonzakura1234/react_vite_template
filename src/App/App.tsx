import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import './../service/Intercepter.service'
import Header from './Header/Header';
import styles from "./theme/css/App.module.css";

const App = () => {
    return (
        <BrowserRouter>
            <Container className={`${styles.paddingWrapper} h-100 scrollAble`} fluid>
                <Header />
                <Row className="h-100 scrollAble">
                    <Col xs="12" className={styles.mainContentTest}>
                    </Col>
                </Row>
            </Container>
        </BrowserRouter>
    );
};

export default App;