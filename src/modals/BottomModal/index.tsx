import React, { PropsWithChildren, RefObject, useRef } from "react"
import { Modalize } from "react-native-modalize"
import { IHandles } from "react-native-modalize/lib/options"

interface Props extends PropsWithChildren{
    modalize: RefObject<IHandles>
}

export function BottomModal({modalize, children} : Props){
    return(
        <>
            <Modalize ref={modalize} modalHeight={300} withReactModal withHandle={false} modalStyle={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}>
                {children}
            </Modalize>
        </>
    )
}