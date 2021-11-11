import { TextInput } from "react-native";
import styled from "styled-components/native";
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize'

export const Container = styled(TextInput)`
  width:100%;
  padding: ${RFValue(16)}px ${RFValue(18)}px;
  border-radius: ${RFValue(5)}px;
  margin-bottom: ${RFValue(8)}px;
  font-size: ${RFValue(15)}px;
  font-family: ${(props) => props.theme.fonts.recular};
  background-color: ${(props => props.theme.colors.shape)};
  color: ${(props => props.theme.colors.title_darck)};
`