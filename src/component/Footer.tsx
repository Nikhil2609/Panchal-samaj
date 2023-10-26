import * as React from 'react';
import { Typography } from '@material-ui/core';

export interface IFooterProps {
}

export interface IFooterState {
}

export default class Footer extends React.Component<IFooterProps, IFooterState> {
    constructor(props: IFooterProps) {
        super(props);

        this.state = {
        }
    }

    public render() {
        return (
            <div className='footer'>
                <hr />
                <Typography variant="h5" component="h5" style={{ color: "white" }}>
                    Copyright © 2023 શ્રી ધાન્ધાર પંચાલ સેવા સમાજ. All rights reserved.
                </Typography>
            </div>
        );
    }
}
