import React, {useEffect, useState} from 'react';
import {Grid, GridContainer} from "../Grid/Grid";
import Button from "../Button/Button";
import Tabs from "../Tabs/Tabs";
import './InfoWithTabbedImages.css';


const InfoWithTabbedImages = ({imageUrls}) => {

    const [currentImage, setCurrentImage] = useState(imageUrls[0]);
    const [currentTab, setCurrentTab] = useState(0);

    const handleTabClick = (index) => {
        setCurrentTab(index);
        setCurrentImage(imageUrls[index]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTab((prevTab) => {
                const newTab = (prevTab + 1) % imageUrls.length;
                setCurrentImage(imageUrls[newTab]);
                return newTab;
            });
        }, 3000); // Change the interval duration (in milliseconds) as needed

        return () => {
            clearInterval(interval);
        };
    }, [imageUrls]);

    return (
        <GridContainer>
            <Grid size={2} />
            <Grid size={4}>
                <div className={'text-content-container'}>
                    <p className={'header-eyebrow'}>Lorem ipsum dolor</p>
                    <h1 className={'header'}>Lorem ipsum dolor sit amet, est mollis evertitur ut, </h1>
                    <p className={'content-body'}> Lorem ipsum dolor sit amet, est mollis evertitur ut, clita utinam quaeque ad sed,
                        an legere concludaturque eum. Duo omnis solet dissentiet te, ea sed quis erat reprehendunt,
                        cetero consetetur philosophia mel in.
                    </p>
                    <div className={'button-container'}>
                        <Button>Learn More</Button>
                    </div>
                </div>


            </Grid>
            <Grid size={4}>
                <div className={'image-container'}>
                    <img className={"image"} alt='Main' src={currentImage} />
                </div>
            </Grid>
            <Grid size={1} />
            <Grid size={1}>
                <div className={'tabs-container'}>
                    <Tabs
                        labels={['01', '02', '03']}
                        onTabClick={handleTabClick}
                        activeTabIndex={currentTab}
                    />
                </div>
            </Grid>
        </GridContainer>
    );
};

export default InfoWithTabbedImages;
