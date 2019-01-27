import React, { Component } from 'react';
import{
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import { Jumbotron } from 'reactstrap';

const slideItems = [
    {
        src: 'https:/images.contentstack.io/v3/assets/blt1b60905dd65bfb9b/blta79f93ab4a861966/5b05970038a12355738838e2/big-l-promo.jpg',
        id: 1,
        altText: '',
        caption: ''
    },
    {
        src:'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2018%2F07%2Fsade-new-album-coming-soon-1.jpg?q=75&w=800&cbr=1&fit=max',
        id: 2,
        altText: '',
        caption: 'Slide 2'
    },
    {
        id: 3,
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

class ArtCarousel extends Component{

    constructor(props){
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);   
    }
    

    onExiting(){
        this.animating = true;
    }

    onExited(){
        this.animating = false;
    }

    next(){
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === slideItems.length -1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous(){
        if(this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? slideItems.length -1 : this.state.activeIndex -1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex){
        if(this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render(){
        const { activeIndex } = this.state;

        const slides = slideItems.map((slide) =>{
            return (
                <CarouselItem 
                    className="custom-tag"
                    tag="div"
                    key={slide.id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >
                    <img src={slide.src} alt={slide.altText}/>
                    <CarouselCaption className="text-danger" captionText={slide.caption} captionHeader={slide.caption}/>
                </CarouselItem>
            );
        });

        return(
            <div>
            <Jumbotron>
                <style>
                    {
                        `.custom-tag{
                            max-width: 100%;
                            height: 450px;
                            background: black;
                        }`
                    }
                </style>
                <Carousel
                    activeIndex={activeIndex}
                    next={this.next}
                    previous={this.previous}
                >
                    <CarouselIndicators items={slideItems} activeIndex={activeIndex} onClickHandler={this.goToIndex}/>
                    {slides}
                    <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous}/>
                    <CarouselControl direction="next" directionText="Next" onClickHandler={this.next}/>
                </Carousel>
            </Jumbotron>
            </div>
        );
    }
}

export default ArtCarousel;
