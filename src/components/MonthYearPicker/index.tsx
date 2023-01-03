import React, { useState } from 'react';
import { FlatList } from 'react-native';
import { Button } from '../Buttons/Button';
import { Container, ChangeYear, Icon, Month, MonthList, Year, YearList, MonthButton, Picker, Grid, GridLine } from './styles';
import { monthArray, detachMonth, detachYear } from '../../utils/helper';
import { ScrollView } from 'react-native-gesture-handler';

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

    function renderMonthsLine(start: number, end: number){
        return (
            <GridLine>
                {
                    monthArray.slice(start, end).map((item) => 
                        <MonthButton key={item} onPress={() => handleSelectMonth(item)}>
                            <Month active={item === monthArray[month]}>{item}</Month>
                        </MonthButton>)
                }
            </GridLine>
        )
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
                    {/* <FlatList
                        data={monthArray}
                        keyExtractor={item => item}
                        numColumns={3}
                        renderItem={({ item }) => (
                            <MonthButton onPress={() => handleSelectMonth(item)}>
                                <Month active={item === monthArray[month]}>{item}</Month>
                            </MonthButton>
                        )}
                    /> */}
                    <Grid>
                        {renderMonthsLine(0,3)}
                        {renderMonthsLine(3,6)}
                        {renderMonthsLine(6,9)}
                        {renderMonthsLine(9,12)}
                    </Grid>
                </MonthList>
                <Button 
                    color=''
                    textColor=''
                    flex={0.65}
                    title="Selecionar"
                    onPress={() => handleSelectFunction(month, year)}
                />
            </Picker>
        </Container>
    )
}