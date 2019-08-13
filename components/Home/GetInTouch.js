import React from 'react';
import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

import { trimQuotes } from '../../utils';

const GetInTouchWrapper = styled(Col)`
    margin-top: 50px;
`;

const GetInTouch = ({ data }) => {
    return (
        <Row className="pb-4">
            <GetInTouchWrapper md={12}>
                <a href="#contact" className="button__main">
                    {trimQuotes(data)}
                </a>
            </GetInTouchWrapper>
        </Row>
    );
};

export default GetInTouch;
