import './App.css';
import InfoWithTabbedImages from "./InfoWithTabbedImages/InfoWithTabbedImages";
import GalleryWithAccordion from "./GalleryWithAccordion/GalleryWithAccordion";

function App() {
    const imageUrls = [
        `${process.env.PUBLIC_URL}/images/image-1.png`,
        `${process.env.PUBLIC_URL}/images/image-2.png`,
        `${process.env.PUBLIC_URL}/images/image-3.png`,
    ];

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
