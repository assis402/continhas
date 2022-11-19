import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Container, ChangeYear, Icon, Month, MonthList, Separator, Year, YearList } from './styles';
const months = [...Array(12).keys()].map(key => new Date(0, key).toLocaleString('en', { month: 'long' }))

export function MonthYearPicker(){
    const [year, setYear] = useState(new Date().getFullYear())

    function handleIncreaseSelectYear(){
        setYear(year + 1);
    }

    function handleDecreaseSelectYear(){
        setYear(year - 1);
    }

    return (
        <Container>
            <YearList>
                <ChangeYear onPress={handleDecreaseSelectYear}>
                    <Icon name='chevron-left'/>
                </ChangeYear>
                <Year>{year}</Year>
                <ChangeYear onPress={handleIncreaseSelectYear}>
                    <Icon name='chevron-right'/>
                </ChangeYear>
            </YearList>
            <MonthList>
                <FlatList
                    data={months}
                    keyExtractor={item => item}
                    numColumns={3} // Número de colunas
                    renderItem={({ item }) => (
                        <Month>{item}</Month>
                    )}
                    ItemSeparatorComponent={() => <Separator/>}
                />
            </MonthList>
        </Container>
    )
}