import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Button } from '../Buttons/Button';
import { Container, ChangeYear, Icon, Month, MonthList, Year, YearList, MonthButton, Picker } from './styles';
import { monthArray, detachMonth, detachYear } from '../../utils/helper';

interface Props {
    monthYear: string;
    handleSelectFunction: (month: number, year: number) => void;
}

export function MonthYearPicker({ handleSelectFunction, monthYear }: Props){
    let initialMonth = detachMonth(monthYear)
    let initialYear = detachYear(monthYear)

    const [year, setYear] = useState(initialYear)
    const [month, setMonth] = useState(initialMonth)

    function handleIncreaseSelectYear(){
        setYear(year + 1);
    }

    function handleDecreaseSelectYear(){
        setYear(year - 1);
    }

    function handleSelectMonth(selectedMonth: string){
        setMonth(monthArray.indexOf(selectedMonth))
    }

    return (
        <Container>
            <Picker>
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
                        data={monthArray}
                        keyExtractor={item => item}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <MonthButton onPress={() => handleSelectMonth(item)}>
                                <Month active={item === monthArray[month]}>{item}</Month>
                            </MonthButton>
                        )}
                    />
                </MonthList>
                <Button 
                    title="Selecionar"
                    onPress={() => handleSelectFunction(month, year)}
                />
            </Picker>
        </Container>
    )
}