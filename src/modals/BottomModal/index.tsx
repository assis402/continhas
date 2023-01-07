import React, { PropsWithChildren, RefObject, useRef } from "react"
import { Modalize } from "react-native-modalize"
import { IHandles } from "react-native-modalize/lib/options"

interface Props extends PropsWithChildren{
    modalize: RefObject<IHandles>
    height: number
}

export function BottomModal({ modalize, children, height } : Props){
    return(
        <Modalize ref={modalize}
                  modalHeight={height} 
                  withReactModal 
                  withHandle={false}
                  modalStyle={{ 
                    borderTopLeftRadius: 40, 
                    borderTopRightRadius: 40,
                    flex: 1,
                    margin: 0
                 }}
        >
            {children}
        </Modalize>
    )
}