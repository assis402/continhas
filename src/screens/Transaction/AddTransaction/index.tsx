import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, BackHandler } from 'react-native'
import { Button } from '../../../components/Buttons/Button'
import { CategorySelectButton } from '../../../components/Forms/CategorySelectButton'
import { DateSelectButton } from '../../../components/Forms/DateSelectButton'
import { TimeSelectButton } from '../../../components/Forms/TimeSelectButton'
import { InputForm } from '../../../components/Forms/InputForm'
import { TransactionTypeButton } from '../../../components/Forms/TransactionTypeButton'
import { CategorySelectModal } from '../../../modals/CategorySelectModal'
import DateTimePickerModal from "react-native-modal-datetime-picker";
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
import { Checkbox } from '../../../components/Forms/Checkbox'
import theme from '../../../global/styles/theme'
import { BackButton } from '../../../components/Buttons/BackButton'

import { LogBox } from 'react-native';

interface FormData {
    title: string
    amount: string
}

interface Props {
    navigation: any
    route: any
}

const schema = Yup.object().shape({
    title: Yup.string().required('Nome é obrigatório'),
    amount: Yup
        .number()
        .typeError('Informe um valor numérico')
        .positive('O valor não pode ser negativo')
        .required('O valor é obrigatório')
})

export function AddTransaction({ navigation, route }: Props){
    BackHandler.addEventListener('hardwareBackPress', handleBackButton);

    function handleBackButton(){
        navigation.navigate("Dashboard");
        return true;
    }

    const { reload, openLoading } = route.params;

    LogBox.ignoreLogs([
        'Non-serializable values were found in the navigation state',
      ]);

    const [categoryModalIsOpen, setCategoryModalIsOpen] = useState(false)
    const [dateModalIsOpen, setDateModalIsOpen] = useState(false)
    const [timeModalIsOpen, setTimeModalIsOpen] = useState(false)
    
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
        toggleDateModalIsOpen()
    }

    function handleTime(date: Date){
        setTime(date)
        toggleOpenSelectTimeModal()
    }

    function handleTransactionTypeSelect(type: 'income' | 'outcome'){
        setTransactionType(type)
    }

    function toggleCategoryModalIsOpen(){
        setCategoryModalIsOpen(!categoryModalIsOpen)
    }

    function toggleDateModalIsOpen(){
        setDateModalIsOpen(!dateModalIsOpen)
    }

    function toggleOpenSelectTimeModal(){
        setTimeModalIsOpen(!timeModalIsOpen)
    }

    function toggleFrequent(){
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
            openLoading()
            await TransactionService.create(newTransaction)
            handleBackButton()
            reload()
            notifySucccess("Lançamento adicionado!")
            handleResetForm()
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
                        <BackButton onPress={() => navigation.goBack()}/>
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
                            onPress={toggleCategoryModalIsOpen}
                        />
                        <DateTimeSelectors>
                            <DateSelectButton
                                dateTime={date}
                                onPress={toggleDateModalIsOpen}
                            />
                            <TimeSelectButton 
                                dateTime={time}
                                onPress={toggleOpenSelectTimeModal}
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
                            onPress={toggleFrequent}
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
                            color=''
                            textColor=''
                            flex={2}
                            title='Adicionar' 
                            onPress={(data) => {
                                handleSubmit(handleRegister, () => notifyError("Formulário incompleto!"))(data)
                            }}
                        />
                    </Footer>
                </Form>
                <CategorySelectModal
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={toggleCategoryModalIsOpen}
                    categoryModalIsOpen={categoryModalIsOpen}
                />
                <DateTimePickerModal
                    isVisible={dateModalIsOpen}
                    mode="date"
                    onConfirm={handleDate}
                    onCancel={toggleDateModalIsOpen}
                />
                <DateTimePickerModal
                    isVisible={timeModalIsOpen}
                    mode="time"
                    onConfirm={handleTime}
                    onCancel={toggleOpenSelectTimeModal}
                />
            </Container>
        </TouchableWithoutFeedback>
    )
}