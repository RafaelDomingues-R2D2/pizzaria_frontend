import { styled } from "@stitches/react";

export const InputContainer = styled('input', {
    marginBottom: '1rem',
    height: '5px',
    borderRadius: '0.5rem',
    backgroundColor: '$dark900',
    color: '$white',
    padding: '1rem',
    border: '1px solid $gray100',

    '&::placeholder': {
        color: 'rgba(255, 255, 255, 0.8)',
    },
});