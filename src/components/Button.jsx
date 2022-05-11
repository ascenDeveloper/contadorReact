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
        width: 10vw;
        margin: 10px;
    }
`