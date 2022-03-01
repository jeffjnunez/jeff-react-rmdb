import { useState, useEffect } from 'react';
// API
import API from '../API';
// Helpers
import { isPersistedState } from '../helpers';

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
};

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState(''); 
    const [state, setState] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [isLoadingMore, setIsLoadingMore] = useState(false);

    const sessionStorageKey = 'homeState';

    // console.log(searchTerm);

    const fetchMovies = async (page, searchTerm = '') => {
        try {
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);

            // Wrapping the {} in () denotes that we are returning
            // an object. Without the parentheses, the curly braces
            // would just denote a function scope.
            setState(prev => ({
                ...movies,
                results:
                    page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));

        } catch (error) {
            setError(true);
        }

        setLoading(false);
    };

    // Initial and search.
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState(sessionStorageKey);

            if (sessionState) {
                setState(sessionState);
                return;
            }
        }

        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    // Load more.
    useEffect(() => {
        if (!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false);
    }, [isLoadingMore, searchTerm, state.page]);

    // Write to sessionStorage.
    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem(sessionStorageKey, JSON.stringify(state));
    }, [searchTerm, state]);

    return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};