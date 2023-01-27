import styled from 'styled-components';

export const Title = styled.h1`
    margin-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.l};
`;

export const ContactTitle = styled.h2`
    margin-bottom: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes.l};
`;
export const Container = styled.div`
    padding: ${p => p.theme.space[5]}px;
`;