import React from 'react';
import {Grid, GridContainer} from "../Grid/Grid";
import './GalleryWithAccordion.css';
import ImageGallery from "../ImageGallery/ImageGallery";
import Counter from "../Counter/Counter";
import Accordion from "../Accordion/Accordion";


const GalleryWithAccordion = () => {
    const imageUrls = [
        "/images/rectangle-image.png",
        "/images/square-image-1.png",
        "/images/square-image-2.png"
    ];

    const accordion = [
        {
            heading: 'Bewirb dich bei uns massa',
            content: 'Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. ' +
                'In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condtum.'
        },
        {
            heading: 'Morbi amet aenean',
            content: 'Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. ' +
                'In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condtum.'
        },
        {
            heading: 'Nunc condimentum nis',
            content: 'Integer massa urna, senectus maecenas in dapibus urna amet hendrerit. ' +
                'In ipsum, morbi amet aenean. Iaculis donec sem nullam nunc condtum.'
        }
    ]

    return (
        <>
            <GridContainer style={{justifyContent:'center'}}>
                <Grid size={8}>
                    <div className="header-container">
                        <h1 className="header">Wissenswertes</h1>
                        <div className="header-background">01</div>
                    </div>
                    <p className={'content-body'}>
                        Integer massa urna, senectus maecenas in dapibus urna amet hendrerit.
                        In ipsum, morbi amet aenean.
                        Iaculis donec sem nullam nunc condimentum nisl non gravida in.
                    </p>
                </Grid>
            </GridContainer>
            <GridContainer>
                <Grid size={2} />
                <Grid size={4}>

                    <ImageGallery imageUrls={imageUrls} />
                </Grid>
                <Grid size={4}>
                    <div className={'accordion-and-counter-panel'}>
                        <div className={'counter-panel'}>
                            <Counter number={'3245'} desc={'Integer massa'} />
                            <Counter number={'1234'} desc={'Nisl non gravidl'} />
                        </div>
                        <Accordion accordionData={accordion} />
                    </div>
                </Grid>
                <Grid size={2} />
            </GridContainer>
        </>
    );
};

export default GalleryWithAccordion;
