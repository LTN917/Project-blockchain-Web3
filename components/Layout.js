import React from 'react';
import Header from './Header';
import Head from 'next/head'
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react'

export default props => {
    return (
        <Container>
            <Head></Head>
            <Header/>
            {props.children}
        </Container>
    );
}