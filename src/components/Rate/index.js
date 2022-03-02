import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import API from '../../API';
// Styles
import { Wrapper } from './Rate.styles';
// Context
import { Context } from '../../context';

const Rate = ({ callback, movie }) => {
    const [user] = useContext(Context);

    const [value, setValue] = useState('5');
    const [ratingSubmitted, setRatingSubmitted] = useState(true);
    const [ratingValue, setRatingValue] = useState('');
    const [error, setError] = useState(false);

    useEffect(async () => {
        if (ratingSubmitted) {
            setRatingSubmitted(false);
        }
        else return;

        try {
            const accountStates = await API.getAccountStates(user.sessionId, movie.id);

            const newRatingValue = accountStates.rated.value ?? '(not rated)';

            setRatingValue(newRatingValue);
            if (typeof(newRatingValue) === 'number') {
                setValue(newRatingValue);
            }
        } catch (error) {
            setError(true);
        }

    }, [movie.id, ratingSubmitted]);

    return (
        <Wrapper>
            <div className='rate-movie'>
                <p>Rate Movie</p>
                <input
                    type='range'
                    min='1'
                    max='10'
                    value={value}
                    onChange={e => setValue(e.currentTarget.value)}
                />
                {value}
                <p>
                    <button onClick={() => {
                        callback(value);
                        setTimeout(() => {
                            setRatingSubmitted(true);
                        }, 500);
                    }}
                    >
                        Rate
                    </button>
                </p>
            </div>
            <div className='your-rating'>
                <p>Your Rating</p>
                <div className={`score ${typeof(ratingValue) !== 'number' ? 'not-rated' : ''}`}>{ratingValue}</div>
            </div>
        </Wrapper>
    );
};

Rate.propTypes = {
    callback: PropTypes.func,
    movie: PropTypes.object
}

export default Rate;