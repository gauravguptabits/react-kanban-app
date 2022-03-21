import React from "react";
import { connect } from "react-redux";
import Spinner from 'react-bootstrap/Spinner'
import { withRouter } from "react-router";
import { Stack, ListGroup } from 'react-bootstrap';
import { NewCollection } from '../components/newcollection';
import { getCollectionAction } from "../actions/collectionAction"

class CollectionPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: [
                { name: 'Ideas', "created_at": "2022-03-14T09:41:29.652825Z"},
                { name: 'Generate Leads', "created_at": "2022-03-14T09:41:29.652825Z" },
                { name: 'Active Leads', "created_at": "2022-03-14T09:41:29.652825Z"},
                { name: 'InActive Leads', "created_at": "2022-03-14T09:41:29.652825Z" },
            ],
            name: 'Sales Pipelines',
            created_at: new Date()
        }
    }

    // constructor ==> render ==> componentDidMount ==> API ==> Reducer ==> render
    componentDidMount = () => {
        this.props.getCollectionAction();
    }

    render () {
        const collectionData = this.props.collection.collectionData;
        console.log('collection data ==========',collectionData)
        const isLoading = this.props.collection.isLoading;
        return (
            <div>
                {/* <h1> {this.name} </h1> */}
                <ListGroup horizontal >
                    {
                        // this.state.collections.map(col =>
                        collectionData &&
                        collectionData.map(col =>
                            <ListGroup.Item>
                                <NewCollection collection={col} />
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
    { getCollectionAction }
)(withRouter(CollectionPage));