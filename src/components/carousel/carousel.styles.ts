import styled from 'styled-components';

export const SwiperSlide = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
`;

const CarouselStyles = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

export const CarouselItem = styled.div`
    flex: 50% 0 0;
    width: 50%;
`;

export default CarouselStyles;