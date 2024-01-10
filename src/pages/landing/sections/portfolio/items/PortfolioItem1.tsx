import React from 'react';

// Swiper Slider
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import servicesData from '../../../../../data/portfolio.json';
// Images
import item1 from '../../../../../assets/images//portfolio/items/bodsc.png';
import item2 from '../../../../../assets/images//portfolio/items/item2.jpg';
import item3 from '../../../../../assets/images//portfolio/items/item3.jpg';

// Styles
import './style.css';

// -------------------

function PortfolioItem1() {
  return (
    <div className="portfolio-item-wrapper">
      <div className="portfolio-content">
        <div className="image-slider-wrapper relative block-right">
          <Swiper
            pagination={{ clickable: true }}
            loop={true}
            modules={[Pagination]}
            className="portfolio-slider">
            <SwiperSlide>
              <img src={item1} alt="portfolio item 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item2} alt="portfolio item 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={item3} alt="portfolio item 1" />
            </SwiperSlide>
          </Swiper>
        </div>

        <h2 className="title">Body Scent</h2>

        <p className="section-des">
        A bespoke mobile app crafted for a boutique business specializing in artisanal oil fragrances.
        </p>

        <p className="content-670">
        For the UX project "Body Scent Oil Fragrance Mobile App," I employed a Lean UX approach to create a streamlined and engaging mobile shopping experience for a small business specializing in oil fragrances. This solo endeavor involved thoroughly understanding the business goals and user needs, developing a minimal viable product (MVP) for quick iterations based on user feedback, and focusing on a user-centered design. The process included continuous refinement through validated learning from user interactions and data analysis. As a solo project, it required balancing multiple roles, from design and development to user research and data analysis, ensuring a tailored, effective, and user-friendly app experience for fragrance enthusiasts.
        </p>
        <ul className="serv-link-cover block-right" data-jarallax-element="0 40">
        {servicesData.servicesLinks.map((link, i: number) => (
          <li key={'serv-link' + i}>
            <a href={link.to} target="_blank" >{link.text}</a>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default PortfolioItem1;
