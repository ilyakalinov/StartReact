import React, { Component } from "react";
import {Button} from 'reactstrap'

import styled from 'styled-components'

const PostAddFormBlock = styled.form`
    margin-top: 20px;
    display: flex;
    .new-post-label {
        width: auto;
        flex-grow: 1;
        margin-right: 3px;
      }
`

export default class PostAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        }
    }

    onValueChange = (e) => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            text: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdd(this.state.text)
        this.setState({
            text:''
        })
    }

    render() {
        return (
            <PostAddFormBlock
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    placeholder="О чем вы думаете сейчас?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                    value={this.state.text}
                />
                <Button
                    type="submit">
                    Добавить    
                </Button>
            </PostAddFormBlock>
        )
    }
    
}