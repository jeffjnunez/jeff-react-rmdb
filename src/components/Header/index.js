import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// Components
import Button from '../Button';

import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdb_logo.svg';

import { Wrapper, Content, LogoImg, TMDBLogoImg } from './Header.styles';
// Context
import { Context } from '../../context';

const Header = () => {
    const [user, setUser] = useContext(Context);

    const handleLogOut = () => {
        setUser(null);
    }

    return (
        <Wrapper>
            <Content>
                <Link to='/'>
                    <LogoImg src={RMDBLogo} alt='rmdb-logo' />
                </Link>
                <div className='login-status'>
                {user ? (
                    <>
                        <span>Logged in as: {user.username}</span>
                        <Button text='Log Out' callback={handleLogOut} invertColors={true}></Button>
                    </>
                ) : (
                    <Link to='/login'>
                        <span className='log-in'>Log In</span>
                    </Link>
                )
                }
                </div>        
                <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
            </Content>
        </Wrapper>
    );
};

export default Header;