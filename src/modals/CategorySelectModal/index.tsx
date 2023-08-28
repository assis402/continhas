import React, { useEffect, useRef, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "../../components/Buttons/Button";
import { categories } from "../../utils/helper";
import { CategoryItem, Container, Footer, Icon, Name, Separator } from "./styles";

interface Props {
    category: string;
    setCategory: (category: string) => void;
    closeSelectCategory: () => void;
}

export function CategorySelectModal({
    category,
    setCategory,
    closeSelectCategory,
} : Props){    
    const [categoryWasSelected, setCategoryWasSelected] = useState(false);

    function handleCategorySelect(newSelectedCategory: string) {
        setCategory(newSelectedCategory)
        setCategoryWasSelected(true)
    }

    useEffect(() => {
        if (categoryWasSelected) {
            closeSelectCategory()
            setCategoryWasSelected(false)
        }
    }, [categoryWasSelected])

    return(
        <Container>
            <ScrollView
                style={{ width: '100%'}}
            >
                {categories.map((item, index) =>
                        <CategoryItem
                            key={item.name}
                            onPress={() => handleCategorySelect(item.name)}
                            isActive={category === item.name}
                            isLastItem={index === categories.length - 1}
                        >
                            <Icon name={item.icon} isActive={category === item.name}/>
                            <Name isActive={category === item.name}>{item.name}</Name>
                        </CategoryItem>
                )}
            </ScrollView>
            {/* <Footer>
                <Button
                    flex={1}
                    color=''
                    textColor=''
                    title="Selecionar"
                    onPress={handleConfirmSelect}
                />
            </Footer> */}
        </Container>
    )
}