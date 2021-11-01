import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface TypeProps {
  type: 'up' | 'down' | 'total';
}



export const Container = styled.View<TypeProps>`
  background-color:${(props) => props.type === 'total'
  ? props.theme.colors.secondary : props.theme.colors.shape
  };
  width:${RFValue(330)}px;
  height:${RFValue(160)}px;
  border-radius:5px;
  padding: 19px 23px;
  padding-bottom:${RFValue(42)}px;
  margin-right: 16px;
 `;

export const Header = styled.View`
  flex-direction:row;
  justify-content: space-between;
 
 `

export const Title = styled.Text<TypeProps>`
  font-family:${(props) => props.theme.fonts.recular};
  font-size:${RFValue(14)}px;
  color:${(props) => props.type === 'total'
  ? props.theme.colors.shape : props.theme.colors.title_darck
  };
 `

export const Icon = styled(Entypo)<TypeProps>`
  font-size:${RFValue(40)}px;
  color: ${(props) => props.type === 'up'
  ?  props.theme.colors.attention : props.type === 'down'
  ?  props.theme.colors.success : props.theme.colors.shape}
;

`

export const Footer = styled.View``

export const Amount = styled.Text<TypeProps>`
  font-family:${(props) => props.theme.fonts.medium};
  font-size:${RFValue(32)}px;
  color:${(props) => props.type === 'total'
  ? props.theme.colors.shape : props.theme.colors.title_darck
  };
 `

export const LastTransition = styled.Text<TypeProps>`
  font-family:${(props) => props.theme.fonts.recular};
  font-size:${RFValue(12)}px;
  color:${(props) => props.type === 'total'
  ? props.theme.colors.shape : props.theme.colors.text
  };
 
 `