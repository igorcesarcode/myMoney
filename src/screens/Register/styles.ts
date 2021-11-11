import styled from "styled-components/native";
import  {RFPercentage, RFValue } from 'react-native-responsive-fontsize';
export const Container = styled.View`
flex:1;
align-items:center;
background-color:${(props) => props.theme.colors.background};
`
export const Header = styled.View`
width:100%;
height: ${RFValue(113)}px ;
background-color:${(props) => props.theme.colors.primary};
align-items:center;
justify-content:flex-end;
`

export const Title = styled.Text`
font-size:${RFValue(18)}px;
font-family:${(props) => props.theme.fonts.recular};
padding-bottom:${RFValue(13)}px;
color:${(props) => props.theme.colors.shape};
font-family: ${(props) => props.theme.fonts.recular};
`
export const Form = styled.View`
  width:100%;
  flex:1;
  padding: ${RFValue(24)}px;
`