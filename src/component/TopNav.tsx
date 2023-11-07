import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import vishvakarma_dada from '../assets/vishvakarma_dada.jpg'
// import vishvakarma_dada from './vishvakarma_dada.jpg'

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
                <Grid container justifyContent="center">
                    <Grid item md={3} style={{ textAlign: "center" }}>
                        <img src={vishvakarma_dada} style={{ height: "200px", width: "200px", margin: "15px 0" }} />
                    </Grid>
                    <Grid item md={9} style={{ margin: "auto", textAlign: "center", color: "white" }}>
                        <Typography variant="h4" component="h4">
                            Shree Dhandhar Panchal Seva Samaj
                        </Typography>
                        <Typography variant="h4" component="h4">
                            શ્રી ધાન્ધાર પંચાલ સેવા સમાજ
                        </Typography>
                    </Grid>
                </Grid>
                <hr />
            </div>
        );
    }
}
