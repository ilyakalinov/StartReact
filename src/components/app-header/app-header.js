import React from "react";


import styled from 'styled-components'

const AppHeaderBlock = styled.div`
    align-items: flex-end;
    justify-content: space-between;
    display: flex;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        :hover{
            color: blue;
        }
    }
    h2 {
        font-size: 1.2rem;
        color: grey;
    }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <AppHeaderBlock as='a'>
            <h1>Ilya Kalinov</h1>
            <h2>{allPosts} записей, из них понравилось {liked}</h2>
        </AppHeaderBlock>
    )
}

export default AppHeader;