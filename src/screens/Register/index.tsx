import React, { useState } from 'react'
import { TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import { Button } from '../../components/Forms/Button'
import { CategorySelectButton } from '../../components/Forms/CategorySelectButton'
import { InputForm } from '../../components/Forms/InputForm'
import { TransactionTypeButton } from '../../components/Forms/TransactionTypeButton'
import { CategorySelectModal } from '../../modals/CategorySelectModal'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

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
} from './styles'
import { Transaction, TransactionFactory } from '../../classes/Transaction'

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

    const [category, setCategory] = useState('Categoria')
    
    const {
        control,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm<FormData>({
        resolver: yupResolver(schema)
    });

    function handleTransactionTypeSelect(type: 'income' | 'outcome'){
        setTransactionType(type)
    }

    function handleCloseSelectCategoryModal(){
        setCategoryModalOpen(false)
    }

    function handleOpenSelectCategoryModal(){
        setCategoryModalOpen(true)
    }

    async function handleRegister(form: FormData) {
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
        <KeyboardAwareScrollView
            // contentContainerStyle={{
            //     flex: 1
            // }}
        >
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
                        </Fields>
                        <Footer>
                            <Button title='Adicionar' onPress={handleSubmit(handleRegister)}/>
                        </Footer>
                    </Form>
                    <CategorySelectModal
                        category={category}
                        setCategory={setCategory}
                        closeSelectCategory={handleCloseSelectCategoryModal}
                        categoryModalIsOpen={categoryModalOpen}
                    />
                </Container>
            </TouchableWithoutFeedback>
        </KeyboardAwareScrollView>
    )
}