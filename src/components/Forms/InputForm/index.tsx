import React from "react";
import { Container, InputWrapper, Error, Icon } from "./styles";
import { Input } from '../Input';
import { MaskInputProps } from "react-native-mask-input";
import { Control, Controller } from "react-hook-form";

interface FormData {
    title: string;
    amount: string;
}

interface Props extends MaskInputProps {
    control: Control<FormData>;
    name: 'title' | 'amount';
    error?: string;
}

export function InputForm({control, name, defaultValue, error, ...rest}: Props){

    return(
        <Container>
            <Controller
                control={control}
                defaultValue={defaultValue}
                render={({ field: { onChange, onBlur, value }}) => (
                    <InputWrapper>
                        <Input
                            onChangeText={(masked, unmasked) => {
                                onChange(unmasked)
                            }}
                            value={value ?? defaultValue}
                            {...rest}
                        />
                        {
                            error &&
                            <Error>
                                <Icon name="alert-circle"/>
                            </Error>
                        }
                    </InputWrapper>
                )}
                name={name}    
            />
        </Container>
    )
}