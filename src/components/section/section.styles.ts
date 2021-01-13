import styled from 'styled-components';

const SectionStyles = styled.div`
    position: relative;
    padding-bottom: 10px;
    margin-bottom: 80px;
    &:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        width: 50px;
        height: 2px;
        transform: translateX(-50%);
        background-color: rgba(255, 255, 255, 0.1);
    }
    h2 {
        color: #00cb9e;
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        line-height: 30px;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
    }
`;

export default SectionStyles;