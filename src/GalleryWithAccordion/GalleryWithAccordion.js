import React from 'react';
import {Grid, GridContainer} from "../Grid/grid";
import './GalleryWithAccordion.css';


const GalleryWithAccordion = () => {
    return (
        <>
            <GridContainer style={{justifyContent: 'center'}}>
                <Grid size={8}>
                    <div className="header-container">
                        <div className="header-background">01</div>
                        <h1 className="header">Wissenswertes</h1>
                    </div>

                    {/*<h1 className={'header'}>Wissenswertes </h1>*/}
                </Grid>
            </GridContainer>
            <GridContainer>
                <Grid size={2} />
                <Grid size={4}>
                    gallery
                </Grid>
                <Grid size={4}>
                    text
                </Grid>
                <Grid size={2} />
            </GridContainer>
        </>
    );
};

export default GalleryWithAccordion;
