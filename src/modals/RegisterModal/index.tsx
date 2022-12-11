import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Button } from '../../components/Forms/Button'
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton'
import { DateSelectButton } from '../../components/Forms/DateSelectButton'
import { TimeSelectButton } from '../../components/Forms/TimeSelectButton'
import { InputForm } from '../../components/Forms/InputForm'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { CategorySelectModal } from '../CategorySelectModal'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Modal from "react-native-modal";
import AsyncStorage from '@react-native-async-storage/async-storage'
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Masks } from 'react-native-mask-input';

import {
    Buttons,
    Container,
    Fields,
    Footer,
    Form,
    Header,
    Title,
    DateTimeSelectors,
    Separator,
    HeaderButtons,
} from './styles'
import { Transaction } from '../../classes/Transaction'
import { OutlinedButton } from '../../components/Forms/OutlinedButton'
import { notifyError, notifySucccess } from '../../utils/notifications'
import { Checkbox } from '../../components/Forms/Checkbox'
import theme from '../../global/styles/theme'
import { BackButton } from '../../components/BackButton'

interface FormData {
    title: string
    amount: string
}

interface Props {
    closeModal: () => void
    modalIsOpen: boolean
}

const schema = Yup.object().shape({
    title: Yup.string().required('Nome é obrigatório'),
    amount: Yup
        .number()
        .typeError('Informe um valor numérico')
        .positive('O valor não pode ser negativo')
        .required('O valor é obrigatório')
})

export function RegisterModal({ closeModal, modalIsOpen }: Props){
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)
    const [dateModalOpen, setDateModalOpen] = useState(false)
    const [timeModalOpen, setTimeModalOpen] = useState(false)
    
    const [transactionType, setTransactionType] = useState('')
    const [category, setCategory] = useState('Categoria')

    const [date, setDate] = useState(new Date())
    const [time, setTime] = useState<Date>()

    const [isFrequent, setFrequent] = useState(false);
    
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

    function handleFrequent(){
        setFrequent(!isFrequent)
    }

    function handleResetForm(){
        setTime(undefined)
        setDate(new Date())
        setTransactionType('')
        setCategory('Categoria')
        setFrequent(false)
        reset()
    }

    async function handleRegister(form: FormData) {
        if (!transactionType)
            return notifyError('Selecione a categoria da transação')

        if (category === 'Categoria')
            return notifyError('Selecione a categoria da transação')

        const newTransaction = new Transaction(
            transactionType,
            form.title,
            form.amount,
            category,
            isFrequent
        )

        try {
            const dataKey = '@continhas:transactions'

            const data = await AsyncStorage.getItem(dataKey)
            const currentData = data ? JSON.parse(data) as Transaction[] : []

            const dataFormatted = [
                ...currentData, newTransaction
            ]

            await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted))

            handleResetForm()

            notifySucccess("Transação adicionada!")

        } catch (error) {
            console.log(error);
            notifyError("Não foi possível salvar")
        }
    }

    return (
        <Modal
            statusBarTranslucent
            isVisible={modalIsOpen}
            onBackButtonPress={closeModal}
            useNativeDriver
            useNativeDriverForBackdrop
            style={{
                margin: 0,
                marginTop: 110
            }}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <Container>
                    <Header>
                        <HeaderButtons>
                            <BackButton onPress={closeModal}/>
                        </HeaderButtons>
                        <Title>Novo lançamento</Title>
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
                                placeholder='Valor'
                                keyboardType='numeric'
                                error={errors.amount && errors.amount.message}
                                mask={Masks.BRL_CURRENCY}
                            />
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
                            <Checkbox
                                title='Lançamento frequente'
                                value={isFrequent}
                                onPress={handleFrequent}
                                color={isFrequent ? theme.colors.secondary_new : undefined}
                                containerStyle={{
                                    marginBottom: 120
                                }}
                            />
                        </Fields>
                        <Footer>
                            <OutlinedButton 
                                flex={1}
                                title='Limpar' 
                                onPress={handleResetForm}
                            />
                            <Separator/>
                            <Button 
                                flex={2}
                                title='Adicionar' 
                                onPress={(data) => {
                                    handleSubmit(handleRegister, () => notifyError("Formulário incompleto!"))(data)
                                    closeModal()
                                }}
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
        </Modal>
    )
}