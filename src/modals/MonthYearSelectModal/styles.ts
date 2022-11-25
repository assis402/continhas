import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons'

interface CategoryProps {
    isActive: boolean;
}

export const Container = styled.View`
    
`

export const InternalModal =  styled.View`
    background-color: ${({ theme }) => theme.colors.background};
    width: 80%;
    height: 45%;
    padding: 25px;
    border-radius: 45px;
    justify-content: space-between;
`

export const ExternalModal = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background_modal};
`

export const CategoryItem = styled.TouchableOpacity.attrs({
    activeOpacity: 0.4
})`
    width: 100%;
    padding: ${RFValue(15)}px;
    flex-direction: row;
    align-items: center;
`

export const Icon = styled(Feather)<CategoryProps>`
    font-size: ${RFValue(20)}px;
    margin-right: 16px;
    color: ${({ theme }) => theme.colors.title};

    opacity: ${({ isActive }) => 
        isActive ? 1 : 0.6
    };

    font-family: ${({ isActive, theme }) => 
        isActive ? theme.fonts.bold : theme.fonts.regular
    };
`

export const Name = styled.Text<CategoryProps>`
    font-size: ${RFValue(14)}px;
    line-height: 26px;
    color: ${({ theme }) => theme.colors.title};

    opacity: ${({ isActive }) => 
        isActive ? 1 : 0.6
    };

    font-family: ${({ isActive, theme }) => 
        isActive ? theme.fonts.bold : theme.fonts.regular
    };
`

export const Separator = styled.View`
    height: 1px;
    width: 100%;
    opacity: 0.3;
    background-color: ${({ theme }) => theme.colors.text_light};
`

export const Footer = styled.View`

`