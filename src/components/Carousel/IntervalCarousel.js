import React from 'react';
import { Carousel } from 'react-bootstrap';

function IntervalCarousel(props) {
  return (
    <div className='playgroundContainer_TGbA'>
        <div className='playgroundHeader_qwyd'>Events</div>
        <div className='playgroundPreview_bb8I'>
            <div>
              <div className='bs-example'>

                                <Carousel>
                                  <div className='carousel-inner'>
                                  <Carousel.Item interval={1000}>
                                  <svg className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' width="800" height="400">
                                      <image href="anh1.jpg" alt="Slide 1" width="800" height="400" />
                                      
                                  </svg>
                                                                        
                                  </Carousel.Item>

                                  <Carousel.Item interval={1000}>
                                   <svg className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' width="800" height="400">
                                      <image href="anh2.jpg" alt="Slide 2" width="800" height="400" />
                                      
                                  </svg>
                                  </Carousel.Item>

                                  <Carousel.Item interval={1000}>
                                    <svg className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' width="800" height="400">
                                      <image href="anh3.jpg" alt="Slide 3" width="800" height="400" />
                                      
                                  </svg>
                                  </Carousel.Item>

                                  <Carousel.Item interval={1000}>
                                    <svg className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' width="800" height="400">
                                      <image href="anh8.jpg" alt="Slide 4" width="800" height="400" />
                                      
                                  </svg>
                                  </Carousel.Item>

                                  <Carousel.Item interval={1000}>
                                   <svg className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' width="800" height="400">
                                      <image href="anh5.jpg" alt="Slide 5" width="800" height="400" />
                                      
                                  </svg>
                                  </Carousel.Item>

                                  <Carousel.Item interval={1000}>
                                  <svg className='bd-placeholder-img bd-placeholder-img-lg d-block w-100' width="800" height="400">
                                      <image href="anh7.jpg" alt="Slide 1" width="800" height="400" />
                                      
                                  </svg>
                                  </Carousel.Item>
                                    </div>
                                </Carousel>
              </div>
            </div>
          </div>                             
    </div>
  );
}

export default IntervalCarousel;
