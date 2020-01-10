import React, { useState } from 'react';
import { Carousel, CarouselItem, CarouselControl} from 'reactstrap';
import ImgOrVid from './ImgOrVid';

const CarouselAlbum = props => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === props.carouselAlbum.children.data.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? props.carouselAlbum.children.data.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    return (
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
        >
            {props.carouselAlbum.children.data.map(carouselImage => {
                return (
                    <CarouselItem
                        onExiting={() => setAnimating(true)}
                        onExited={() => setAnimating(false)}
                        key={carouselImage.id}
                    >
                        <ImgOrVid img={carouselImage} />
        
                    </CarouselItem>
                )
            })}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        </Carousel>
    )

}

export default CarouselAlbum;