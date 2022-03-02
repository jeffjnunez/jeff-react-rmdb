import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
    color: var(--white);

    a {
        color: var(--white);
        text-decoration: none;
    }

    .login-status {
        display: flex;
        align-items: center;
        margin-left: auto;
        margin-right: 20px;

        * {
            margin: 0 10px;
        }

        /* Shrinking Button dimensons to about 60% to look better in header */
        button {
            font-size: var(--fontSmall);
            width: 15%;
            min-width: 120px;
            height: 36px;
            border-radius: 18px;
        }
    }
`;

export const LogoImg = styled.img`
    width: 200px;

    @media screen and (max-width: 500px) {
        width: 150px;
    }
`;

export const TMDBLogoImg = styled.img`
    width: 100px;

    @media screen and (max-width: 500px) {
        width: 80px;
    }
`;