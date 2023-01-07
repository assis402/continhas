import React, { useState } from "react";
import { FlatList } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Button } from "../../components/Buttons/Button";
import { categories } from "../../utils/helper";
import { CategoryItem, Container, Footer, Icon, Name, Separator, Title } from "./styles";

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

    const [selectedCategory, setSelectedCategory] = useState(category)
    
    function handleCategorySelect(newSelectedCategory: string){
        setSelectedCategory(newSelectedCategory);
    }

    function handleConfirmSelect(){
        setCategory(selectedCategory)
        closeSelectCategory()
    }

    return(
        <Container>
            <ScrollView
                style={{ width: '100%' }}
            >
                {categories.map((item) =>
                    <>
                        <CategoryItem
                            onPress={() => handleCategorySelect(item.name)}
                            isActive={selectedCategory === item.name}
                        >
                            <Icon name={item.icon} isActive={category === item.name}/>
                            <Name isActive={selectedCategory === item.name}>{item.name}</Name>
                        </CategoryItem>
                        { item.name !== 'Estudos' && <Separator/> }
                    </>
                )}
            </ScrollView>
            <Footer>
                <Button
                    flex={1}
                    color=''
                    textColor=''
                    title="Selecionar"
                    onPress={handleConfirmSelect}
                />
            </Footer>
        </Container>
    )
}