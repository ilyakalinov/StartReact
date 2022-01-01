import React, { Component } from "react";
import AppHeader from "../app-header/app-header";
import SearchPanel from "../search-panel/search-panel";
import PostStatusFilter from "../post-status-filter/post-status-filter";
import PostList from "../post-list/post-list";
import PostAddForm from "../post-add-form/post-add-form";

import styled from 'styled-components'

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [
                {label: "Going to learn React", important: true, like: false, id: 1},
                {label: "That is so good", important: false, like: false, id: 2},
                {label: "asdklsad", important: false, like: false, id: 3}
            ],
            term: '',
            filter: 'all'
        }
        this.maxId = 4;
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                data: newArr
            }
        })
    }

    searchPost = (items, term) => {
        if(term === 0) {
            return items
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1
        })
    }

    addItem = (body) => {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            return {
                data: newArr
            }
        })
    }

    onToggle = (id, status) => {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
        
            const old = data[index];
            // const before = data.slice(0, index);
            // const after = data.slice(index + 1);

            if(status === 'important') {
                const newItem = {...old, important: !old.important}
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

                return {
                    data: newArr
                }
            }
            if(status === 'like') {
                const newItem = {...old, like: !old.like}
                const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

                return {
                    data: newArr
                }
             }
        })
    }

    onUpdateSearch = (term) => {
       this.setState({term}) 
    }

    filterPosts = (items, filter) => {
       if(filter === 'like') {
           return items.filter(item => item.like)
       } else {
           return items
       }
    }

    onFilterSelect = (filter) => {
        this.setState({filter}) 
    }

    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;
        const visiblePosts = this.filterPosts(this.searchPost(data, term), filter)

        return(
            <AppBlock>
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}/>
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        filter={filter}
                        onFilterSelect={this.onFilterSelect}
                    />
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggle}
                    onToggleLiked={this.onToggle}
                    />
                <PostAddForm
                    onAdd={this.addItem}/>
            </AppBlock>
        )
    }
}