import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import  {RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

import { DataListProps } from './index'


export const Container = styled.View`
  flex:1;
  background-color:${(props) => props.theme.colors.background};
`;

export const Header = styled.View`
  width:100%;
  height:${RFValue(242)}px;
  background-color:${(props) => props.theme.colors.primary};
  justify-content:center;
  align-items:flex-start;
  flex-direction:row;

`
export const UserWapper = styled.View`
  width:100%;
  padding: 0 24px;
  flex-direction:row;
  justify-content:space-between;
  align-items:center;
  margin-top:${RFValue(48)}px;

`

export const UserInfo = styled.View`
  flex-direction:row;
  align-items:center;

`

export const Photo = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius:10px;

`
export const User = styled.View`
  margin-left:17px;
`

export const UserGreeting = styled.Text`
  color:${(props) => props.theme.colors.shape};
  font-family:${(props) => props.theme.fonts.recular};
  font-size:${RFValue(18)}px;
`

export const UserName = styled.Text`
  color:${(props) => props.theme.colors.shape};
  font-family:${(props) => props.theme.fonts.bold};
  font-size:${RFValue(18)}px;
`
export const Icon = styled(Feather)`
  color:${(props) => props.theme.colors.secondary};
  font-size:${RFValue(24)}px;
`
export const HighlightCards = styled.ScrollView.attrs({
  horizontal:true,
  showsHorizontalScrollIndicator:false,
  contentContainerStyle:{ paddingHorizontal:24}

})`

width:100%;
position: absolute;
margin-top:${RFPercentage(20)}px;
`;

export const Transactions = styled.View`
  flex:1;
  padding: 0 24px;
  margin-top:${RFPercentage(12)}px;
  
`

export const Title = styled.Text`
  color:${(props) => props.theme.colors.title};
  font-family:${(props) => props.theme.fonts.recular};
  font-size:${RFValue(18)}px;
  margin-bottom:16px;

`

export const TransactionList = styled(FlatList as new () => FlatList<DataListProps>).attrs({
  showsVerticalScrollIndicator:false
})``;