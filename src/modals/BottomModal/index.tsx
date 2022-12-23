import React, { PropsWithChildren, RefObject, useRef } from "react"
import { Modalize } from "react-native-modalize"
import { IHandles } from "react-native-modalize/lib/options"

interface Props extends PropsWithChildren{
    modalize: RefObject<IHandles>
    height: number
    onClosed: () => void
}

export function BottomModal({ modalize, children, height, onClosed } : Props){
    return(
        <Modalize ref={modalize}
                  modalHeight={height} 
                  withReactModal 
                  withHandle={false}
                  onClosed={onClosed}
                  velocity={100}
                  modalStyle={{ 
                    borderTopLeftRadius: 40, 
                    borderTopRightRadius: 40,
                    flex: 1 }}
        >
            {children}
        </Modalize>
    )
}