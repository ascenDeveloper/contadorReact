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
        font-size: medium;
        font-weight: bold;
        color: white;
        background-color: #242424;
        cursor: pointer;
        &:hover {
            background-color: white;
            color: #242424;
        }
    }
`