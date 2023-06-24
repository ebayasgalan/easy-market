'use client';

import styled from 'styled-components';

const InnerStyles = styled.div`
    max-width: var(--maxWidth);
    margin: 0 auto;
    padding: 0 2rem 2rem;
    @media (min-width: 768px){
        padding-top: 2rem;
    }
`;

export default InnerStyles;