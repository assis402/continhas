import React from "react";
import { Category, Container, Icon, CategoryWrapper } from "./styles";
import { categories } from "../../../utils/helper";

interface Props {
    title: string;
    onPress: () => void;
}

export function CategorySelectButton({ title, onPress } : Props){
    const category = categories.find(x => x.name === title)

    return(
        <Container onPress={onPress}>
            <CategoryWrapper>
                {category !== undefined && <Icon name={category.icon}/>}
                <Category text={title}>
                    {title}
                </Category>
            </CategoryWrapper>
            <Icon name="chevron-down"/>
        </Container>
    )
}