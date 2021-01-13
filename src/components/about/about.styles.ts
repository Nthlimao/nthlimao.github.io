import styled from "styled-components";

const AboutStyles = styled.div`
    margin-bottom: 120px;
`;

export const ContainerContent = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const ContainerResume = styled.div`
    padding-left: 40px;
    h3 {
        display: flex;
        align-items: center;
        color: #ffffff;
        font-family: "Montserrat", sans-serif;
        font-size: 24px;
        line-height: 30px;
        font-weight: bold;
        text-transform: lowercase;
        margin-bottom: 10px;
        svg {
            margin-right: 10px;
        }
    }
    p {
        color: #ffffff;
        font-size: 18px;
        line-height: 24px;
        font-weight: 300;
    }
`;

export const CardGame = styled.div`
    position: relative;
    padding: 15px 15px 10px;
    width: 400px;
    flex-shrink: 0;
    border-radius: 5px;
    background-color: #1a1a1f;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 50px;
        border-top-left-radius: 5px;
        border-top: 2px solid #4afad3;
        border-left: 2px solid #4afad3;
    }
    &:before {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 50px;
        height: 50px;
        border-bottom-right-radius: 5px;
        border-bottom: 2px solid #4afad3;
        border-right: 2px solid #4afad3;
    }
`;

export const CardPhoto = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 5px;
    margin-bottom: 10px;
`;

export const CardRole = styled.label`
    position: absolute;
    top: 15px;
    left: 15%;
    right: 15%;
    padding: 0 10px 5px;
    background-color: #1a1a1f;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #4afad3;
    font-family: "Montserrat", sans-serif;
    font-size: 12px;
    line-height: 18px;
    font-weight: bold;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.1px;
`;

export const CardTitle = styled.h4`
    display: flex;
    align-items: center;
    color: #ffffff;
    font-family: "Montserrat", sans-serif;
    font-size: 16px;
    line-height: 20px;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 10px;
    svg {
        margin-right: 10px;
    }
`;

export const SkillTable = styled.div`
    display: flex;
`;

interface SkillColumnProps {
    shrink?: number;
}

export const SkillColumn = styled.div<SkillColumnProps>`
    display: flex;
    flex-direction: column;
    ${(props) => props.shrink && `flex-shrink: ${props.shrink};`}
    width: 100%;
    padding: 0 10px;
    &:first-of-type {
        padding-left: 0;
    }
    &:last-of-type {
        padding-right: 0;
    }
`;

export const SkillRow = styled.div`
    display: flex;
    align-items: center;
    height: 20px;
    margin-bottom: 5px;
    p {
        color: rgba(255, 255, 255, 0.7);
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
        line-height: 18px;
        font-weight: bold;
        text-transform: uppercase;
    }
`;

export const Balloon = styled.div`
    position: absolute;
    bottom: 0;
    right: -20px;
    width: 300px;
    padding: 15px 20px;
    transform: translateY(80%);
    background-color: #ffffff;
    border-radius: 5px;
    box-sizing: border-box;
    &:after {
        content: "";
        position: absolute;
        width: 0; 
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid #ffffff;
        border-top: 20px solid transparent;
        border-bottom: 20px solid transparent;

        top: -20px;
        right: 0;
    }
    h4 {
        color: #00cb9e;
        font-family: "Montserrat", sans-serif;
        font-size: 12px;
        line-height: 18px;
        font-weight: bold;
        text-transform: uppercase;
    }
    p {
        font-size: 13px;
        line-height: 16px;
    }
`;

export default AboutStyles;
