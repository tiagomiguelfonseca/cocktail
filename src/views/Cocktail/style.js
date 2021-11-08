import styled from 'styled-components';
import { Section } from '../../containers/Layout/styles';

export const CustomFlexContainer = styled.div`
display: grid;
grid-template-columns: 35% 60%;
column-gap: 30px;
`;

export const ImageContainer = styled.img`
    max-width: 100%;
`;

export const ImageIngredient = styled.img`
    max-width: 80%;
`;

export const FlexColumn = styled.div`
display: flex;
flex-direction: column;
text-align: center;
align-items: center;
`;

export const FlexRow = styled.div`
margin-top: 35px;
`;

export const GridRow = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
`;


export const Tag = styled.a`
color: #777;
font: 12px verdana;
text-transform: uppercase;
transition: border-color .218s;
background: #f4f4f4;
background: -webkit-gradient(linear, 0% 40%, 0% 70%, from(#F5F5F5), to(#F1F1F1));
display: inline-block;
text-shadow: 0 1px 0 #fff;
-webkit-transition: border-color .218s;
-moz-transition: border .218s;
-o-transition: border-color .218s;
transition: border-color .218s;
background: #f3f3f3;
background: -webkit-gradient(linear, 0% 40%, 0% 70%, from(#F5F5F5), to(#F1F1F1));
background: -moz-linear-gradient(linear, 0% 40%, 0% 70%, from(#F5F5F5), to(#F1F1F1));
border: solid 1px #ccc;
border-radius: 2px;
-webkit-border-radius: 2px;
-moz-border-radius: 2px;
margin: 0 4px 4px 0;
padding: 3px 5px;
text-decoration: none;
`;

export const CustomSection = styled(Section)`
text-align: center;
padding: 100px 200px;
`;