import React from 'react';
import {withStyles} from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';
import {styles} from './QueryFilterStyle'


const Loader = () => (
    <div>
        <CircularProgress />
    </div>
);

export default withStyles(styles)(Loader);