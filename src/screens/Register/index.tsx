import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Button } from '../../components/Forms/Button'
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton'
import { DateSelectButton } from '../../components/Forms/DateSelectButton'
import { TimeSelectButton } from '../../components/Forms/TimeSelectButton'
import { InputForm } from '../../components/Forms/InputForm'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { CategorySelectModal } from '../../modals/CategorySelectModal'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { showMessage } from "react-native-flash-message";

import {
    Buttons,
    Container,
    Fields,
    Footer,
    Form,
    Header,
    Title,
    DateTimeSelectors,
    Separator
} from './styles'
import { Transaction, TransactionFactory } from '../../classes/Transaction'
import { OutlinedButton } from '../../components/Forms/OutlinedButton'

interface FormData {
    title: string;
    amount: string;
}

const schema = Yup.object().shape({
    title: Yup.string().required('Nome é obrigatório'),
    amount: Yup
        .number()
        .typeError('Informe um valor numérico')
        .positive('O valor não pode ser negativo')
        .required('O valor é obrigatório')
})

export function Register(){
    const [transactionType, setTransactionType] = useState('')
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)
    const [dateModalOpen, setDateModalOpen] = useState(false)
    const [timeModalOpen, setTimeModalOpen] = useState(false)

    const [category, setCategory] = useState('Categoria')
    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState(new Date())
    
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    function handleDate(date: Date){
        setDate(date)
        handleCloseSelectDateModal()
    }

    function handleTime(date: Date){
        setTime(date)
        handleCloseSelectTimeModal()
    }

    function handleTransactionTypeSelect(type: 'income' | 'outcome'){
        setTransactionType(type)
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false)
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true)
    }

    function handleCloseSelectDateModal(){
        setDateModalOpen(false)
    }

    function handleOpenSelectDateModal(){
        setDateModalOpen(true)
    }

    function handleCloseSelectTimeModal(){
        setTimeModalOpen(false)
    }

    function handleOpenSelectTimeModal(){
        setTimeModalOpen(true)
    }

    function handleFormValidation(){
        if (errors.title && errors.title.message)
            showMessage({
                message: "Formulário incompleto!",
                type: "danger",
                icon: "warning",
                style: {
                    paddingTop: 50
                }
            });
    }

    async function handleRegister(form: FormData) {
        console.log('test')
        if (!transactionType)
            return Alert.alert('Selecione o tipo da transação')

        if (category === 'Categoria')
            return Alert.alert('Selecione a categoria da transação')

        const newTransaction = TransactionFactory.new(
            transactionType,
            form.title,
            form.amount,
            category,
        )

        try {
            const dataKey = '@continhas:transactions'

            const data = await AsyncStorage.getItem(dataKey)
            const currentData = data ? JSON.parse(data) as Transaction[] : []

            const dataFormatted = [
                ...currentData, newTransaction
            ]

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))

            reset()
            setTransactionType('')
            setCategory('Categoria')

            showMessage({
                message: "Transação adicionada!",
                type: "success",
                icon: "success",
                style: {
                    paddingTop: 50
                }
              });
        } catch (error) {
            console.log(error);
            Alert.alert("Não foi possível salvar");
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <Title>Nova transação</Title>
                </Header>
                <Form>
                    <Fields>
                        <InputForm 
                            name='title' 
                            control={control} 
                            placeholder='Identificação'
                            autoCapitalize='sentences'
                            autoCorrect={false}
                            error={errors.title && errors.title.message}
                        />
                        <InputForm 
                            name='amount' 
                            control={control}  
                            placeholder='Preço'
                            keyboardType='numeric'
                            error={errors.amount && errors.amount.message}
                        />

                        <Buttons>
                            <TransactionTypeButton 
                                type='income'
                                onPress={() => handleTransactionTypeSelect('income')}
                                isActive={transactionType === 'income'}
                            />
                            <TransactionTypeButton 
                                type='outcome'
                                onPress={() => handleTransactionTypeSelect('outcome')}
                                isActive={transactionType === 'outcome'}
                            />
                        </Buttons>

                        <CategorySelectButton 
                            title={category}
                            onPress={handleOpenSelectCategoryModal}
                        />
                        <DateTimeSelectors>
                            <DateSelectButton 
                                dateTime={date}
                                onPress={handleOpenSelectDateModal}
                            />
                            <TimeSelectButton 
                                dateTime={time}
                                onPress={handleOpenSelectTimeModal}
                            />
                        </DateTimeSelectors>
                    </Fields>
                    <Footer>
                        <OutlinedButton 
                            flex={1}
                            title='Limpar' 
                            onPress={() =>{
                                handleSubmit(handleRegister)
                                handleFormValidation()
                            }}
                        />
                        <Separator/>
                        <Button 
                            flex={2}
                            title='Adicionar' 
                            onPress={handleSubmit(handleRegister)}
                        />
                    </Footer>
                </Form>
                <CategorySelectModal
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                    categoryModalIsOpen={categoryModalOpen}
                />
                <DateTimePickerModal
                    isVisible={dateModalOpen}
                    mode="date"
                    onConfirm={handleDate}
                    onCancel={handleCloseSelectDateModal}
                />
                <DateTimePickerModal
                    isVisible={timeModalOpen}
                    mode="time"
                    onConfirm={handleTime}
                    onCancel={handleCloseSelectTimeModal}
                />
            </Container>
        </TouchableWithoutFeedback>
    )
}