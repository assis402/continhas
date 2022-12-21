import React from "react";
import { FlatList, TouchableWithoutFeedback, View } from "react-native";
import { Button } from "../../components/Buttons/Button";
import Modal from "react-native-modal";
import { categories } from "../../utils/helper";
import { CategoryItem, Container, Footer, Icon, Name, Separator, Title } from "./styles";

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
        <Modal
            statusBarTranslucent
            animationIn="fadeIn"
            animationOut="fadeOut"
            isVisible={categoryModalIsOpen}
            onBackdropPress={closeSelectCategory}
            onBackButtonPress={closeSelectCategory}
            useNativeDriver
            useNativeDriverForBackdrop
            style={{
                flex: 1,
                margin: 0,
                justifyContent: 'center',
                alignItems: 'center',
            }}
            customBackdrop={
                <TouchableWithoutFeedback onPress={closeSelectCategory}>
                    <View style={{ height: `110%`, backgroundColor: '#000'}} />
                </TouchableWithoutFeedback>
            }
        >
            <Container>
                <FlatList
                    data={categories}
                    style={{ width: '100%' }}
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
                <Footer>
                    <Button
                        flex={1}
                        color=''
                        textColor=''
                        title="Selecionar"
                        onPress={closeSelectCategory}
                    />
                </Footer>
            </Container>
        </Modal>
    )
}