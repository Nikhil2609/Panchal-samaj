import * as React from 'react';
import { Typography } from '@material-ui/core';

export interface IAppProps {
}

export interface IAppState {
}

export default class TopNav extends React.Component<IAppProps, IAppState> {
    constructor(props: IAppProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className='topnav'>
                <Typography className='title' variant="h3" component="h3">
                    Dhandhar Panchal 
                </Typography>
                <hr />
            </div>
        );
    }
}
