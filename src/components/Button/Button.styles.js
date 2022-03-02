import styled from 'styled-components';

export const Wrapper = styled.button`
    display: block;
    /* background: var(--darkGrey); */
    background: ${props => props.invertColors ? '#fff' : '#1c1c1c'};
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    /* color: var(--white); */
    color: ${props => props.invertColors ? '#1c1c1c': '#fff'};
    border: 0;
    font-size: var(--fontBig);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;