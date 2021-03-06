import React, { useState, useContext, useRef, useCallback } from 'react';
import useCarsFavorite from './hooks/useCarsFavorite';
import { LoginContext } from './providers/LoginProvider';
import { Grid, LinearProgress, Typography } from '@material-ui/core';
import Car from './Car';

const Favorite = (props) => {

    const [page, setPage] = useState(0);

    const { user } = useContext(LoginContext);

    const {
        loading,
        cars, hasMore
    } = useCarsFavorite(user?.uid, page);


    const observer = useRef();
    const lastCarElementRef = useCallback(node => {
        if (loading) {
            return;
        }
        if (observer.current) {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore) {
                setPage(prevPage => prevPage + 1);
            }
        });
        if (node) {
            observer.current.observe(node);
        }
    }, [loading, hasMore]);

    return (
        <div>
            {!loading &&
                <div>
                    {cars.length > 0 ?
                        <Grid container spacing={2}>
                            {cars.map((car, index) => {
                                return (
                                    <Grid ref={cars.length === index + 1 ? lastCarElementRef : null} item xs={12} md={6} lg={3} key={car.id}>
                                        <Car car={car.car} userId={user.uid} />
                                    </Grid>
                                );
                            })}
                        </Grid>
                        :
                        <Typography variant="body2">
                            Your favorites is empty, start adding some cars =)
                        </Typography>
                    }
                </div>
            }
            {loading && <LinearProgress />}
        </div>
    );

}

export default Favorite;