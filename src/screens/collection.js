import React from "react";
import { connect } from "react-redux";
import Spinner from 'react-bootstrap/Spinner'
import { withRouter } from "react-router";
import { Stack, ListGroup } from 'react-bootstrap';
import { NewCollection } from '../components/newcollection';
import { Collection } from '../components/collection';
import {searchCollectionAction } from "../actions/searchAction";
import { getCollectionAction } from "../actions/collectionAction"

class CollectionPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            // collections: [
            //     { name: 'Ideas', "created_at": "2022-03-14T09:41:29.652825Z"},
            //     { name: 'Generate Leads', "created_at": "2022-03-14T09:41:29.652825Z" },
            //     { name: 'Active Leads', "created_at": "2022-03-14T09:41:29.652825Z"},
            //     { name: 'InActive Leads', "created_at": "2022-03-14T09:41:29.652825Z" },
            // ],
            // name: 'Sales Pipelines',
            // created_at: new Date(),
            search_query: ""
        }
    }

    // constructor ==> render ==> componentDidMount ==> API ==> Reducer ==> render
    componentDidMount = () => {
        // const board_id = 1
        // TODO : get board id from url
        // 
        const board_id = this.props.match.params.boardId
        console.log('board id===', board_id)
        this.props.getCollectionAction(board_id);
    }

    onSearchValueChange = (e) => {
        this.setState({search_query: e.target.value})
    }
    searchTask = () => {
        console.log('searchTask Button change', this.state.search_query)
        const board_id = this.props.match.params.boardId
        this.props.searchCollectionAction(board_id, this.state.search_query);
    }

    render () {
        const collectionData = this.props.collection.collectionData;
        console.log('collection data ==========',collectionData)
        const isLoading = this.props.collection.isLoading;
        return (
            <div>
                <h1> Harsh </h1>
                <input onChange={(e) => {this.onSearchValueChange(e)}}/>
                <button onClick={() => {this.searchTask()}}>Search</button>
                <ListGroup horizontal >
                    {
                        // this.state.collections.map(col =>
                        collectionData &&
                        collectionData.map(col =>
                            <ListGroup.Item>
                                {/* <NewCollection collection={col} /> */}
                                <Collection collection={col} />
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        collection: state.collectionReducer
    }
};

// export default CollectionPage;

export default connect(mapStateToProps,
    { getCollectionAction, searchCollectionAction }
)(withRouter(CollectionPage));