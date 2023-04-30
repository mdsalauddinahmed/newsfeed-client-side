import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <Container>
            <h2>Terms and Conditions</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo earum neque exercitationem ut, unde quae quisquam, ducimus officiis dolor a vel molestias expedita, sunt beatae saepe nam. Deleniti, reprehenderit quis. Go back to<Link to="/register">Register</Link> </p>
        </Container>
    );
};

export default Terms;