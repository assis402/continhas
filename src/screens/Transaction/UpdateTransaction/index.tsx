import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, Alert, BackHandler } from 'react-native'
import { Button } from '../../../components/Buttons/Button'
import { CategorySelectButton } from '../../../components/Forms/CategorySelectButton'
import { DateSelectButton } from '../../../components/Forms/DateSelectButton'
import { TimeSelectButton } from '../../../components/Forms/TimeSelectButton'
import { InputForm } from '../../../components/Forms/InputForm'
import { TransactionTypeButton } from '../../../components/Forms/TransactionTypeButton'
import DateTimePickerModal from "react-native-modal-datetime-picker";

import Modal from "react-native-modal";
import TransactionService from '../../../services/Transaction';
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
import { Transaction } from '../../../classes/Transaction'
import { OutlinedButton } from '../../../components/Buttons/OutlinedButton'
import { notifyError, notifySucccess } from '../../../utils/notifications'
import { BackButton } from '../../../components/Buttons/BackButton'
import { CategorySelectModal } from '../../../modals/CategorySelectModal'

interface FormData {
    title: string;
    amount: string;
}

interface Props {
    transaction: Transaction
    reload: () => void
    navigation: any
    route: any
}

const schema = Yup.object().shape({
    title: Yup.string().required('Nome é obrigatório'),
    amount: Yup.number()
               .typeError('Informe um valor numérico')
               .positive('O valor não pode ser negativo')
               .required('O valor é obrigatório')
})

export function UpdateTransaction({ navigation, route }: Props){
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    function handleBackButton(){
        navigation.popToTop();
        return true;
    }

    const { reload, transaction } = route.params;
    const [categoryModalOpen, setCategoryModalOpen] = useState(false)
    const [dateModalOpen, setDateModalOpen] = useState(false)
    const [timeModalOpen, setTimeModalOpen] = useState(false)
    
    const [transactionType, setTransactionType] = useState(transaction.type)
    const [category, setCategory] = useState(transaction.category)

    const [date, setDate] = useState(new Date(transaction.date))
    const [time, setTime] = useState<Date>(new Date(transaction.date))

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

    function handleResetForm(){
        setTime(new Date(transaction.date))
        setDate(new Date(transaction.date))
        setTransactionType(transaction.type)
        setCategory(transaction.category)
        reset()
    }

    async function handleUpdate(form: FormData) {
        if (!transactionType)
            return notifyError('Selecione a categoria da transação')

        if (category === 'Categoria')
            return notifyError('Selecione a categoria da transação')

        let updatedTransaction = new Transaction(
            transactionType,
            form.title,
            form.amount,
            category,
            transaction.isFrequent
        )

        try {
            await TransactionService.update(updatedTransaction)
            reload()
            handleResetForm()
            notifySucccess("Lançamento atualizado!")

        } catch (error) {
            console.log(error);
            notifyError("Não foi possível salvar")
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Container>
                <Header>
                    <HeaderButtons>
                        <BackButton onPress={handleBackButton}/>
                    </HeaderButtons>
                    <Title>Editar lançamento</Title>
                </Header>
                <Form>
                    <Fields>
                        <InputForm 
                            name='title'
                            defaultValue={transaction.title}
                            control={control} 
                            placeholder='Identificação'
                            autoCapitalize='sentences'
                            autoCorrect={false}
                            error={errors.title && errors.title.message}
                        />
                        <InputForm 
                            name='amount'
                            defaultValue={String(transaction.amount)}
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
                    </Fields>
                    <Footer>
                        <OutlinedButton 
                            flex={1}
                            title='Resetar' 
                            onPress={handleResetForm}
                        />
                        <Separator/>
                        <Button 
                            color=''
                            textColor=''
                            flex={2}
                            title='Adicionar' 
                            onPress={(data) => {
                                handleSubmit(handleUpdate, () => notifyError("Formulário incompleto!"))(data)
                                handleBackButton()
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
    )
}