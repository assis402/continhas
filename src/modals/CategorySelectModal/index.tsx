import React from "react";
import { FlatList, Modal } from "react-native";
import { Button } from "../../components/Forms/Button";
import { categories } from "../../utils/categories";
import { CategoryItem, Container, ExternalModal, Footer, Icon, InternalModal, Name, Separator, Title } from "./styles";

interface Props {
    category: string;
    setCategory: (category: string) => void;
    closeSelectCategory: () => void;
    categoryModalIsOpen: boolean;
}

export function CategorySelectModal({
    category,
    setCategory,
    closeSelectCategory,
    categoryModalIsOpen
} : Props){
    
    function handleCategorySelect(category: string){
        setCategory(category);
    }

    return(
        <Container>
            <Modal
                visible={categoryModalIsOpen}
                transparent={true}
                animationType='fade'
                statusBarTranslucent
            >
                <ExternalModal>
                    <InternalModal>
                        <FlatList
                            data={categories}
                            style={{ flex: 1, width: '100%' }}
                            keyExtractor={(item) => item.key}
                            renderItem={({ item }) => (
                                <CategoryItem
                                    onPress={() => handleCategorySelect(item.name)}
                                    isActive={category === item.name}
                                >
                                    <Icon name={item.icon} isActive={category === item.name}/>
                                    <Name isActive={category === item.name}>{item.name}</Name>
                                </CategoryItem>
                            )}
                            ItemSeparatorComponent={() => <Separator/>}
                        />
                        <Button 
                            title="Selecionar"
                            onPress={closeSelectCategory}
                        />
                    </InternalModal>
                </ExternalModal>
            </Modal>
        </Container>
    )
}