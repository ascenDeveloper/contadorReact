import React from 'react'
import styled from 'styled-components'

function Button({ value, cb }) {
    return (
        <Container>
            <button onClick={cb}>
                {value}
            </button>
        </Container>
    )
}

export default Button

const Container = styled.div`
    button{
        width: 12vw;
        height: 3vh;
        margin: 10px;
        border: none;
        &:hover {
            background-color: white
        }
    }
`