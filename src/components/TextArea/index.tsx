import { TextareaHTMLAttributes } from 'react';
import { TextAreaContainer } from "./styles"

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{}

export function TextArea({...rest}: TextAreaProps){
    return (
        <TextAreaContainer {...rest}></TextAreaContainer>
    )
}