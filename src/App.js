import './App.css';
import {useMemo} from "react";
import InfoWithTabbedImages from "./InfoWithTabbedImages/InfoWithTabbedImages";
import GalleryWithAccordion from "./GalleryWithAccordion/GalleryWithAccordion";

function App() {
    const imageUrls = useMemo(() => [
        '/images/image-1.png',
        '/images/image-2.png',
        '/images/image-3.png',
    ], []);



    return (
    <div className="App">

        <section className={'section-1'}>
            <InfoWithTabbedImages imageUrls={imageUrls} />
        </section>
        <section className={'section-2'}>
            <GalleryWithAccordion />
        </section>

    </div>
  );
}

export default App;
