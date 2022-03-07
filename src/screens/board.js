import React from "react";
import { Stack, ListGroup } from 'react-bootstrap';
import { Collection } from '../components/collection';

class BoardPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: [
                { name: 'Ideas', tasks:[{title: 'Automate lead generation'}]},
                { name: 'Generate Leads', tasks: [{ title: 'From LinkedIn' }, { title: 'From references'}] },
                { name: 'Active Leads', tasks: [{ title: 'Samsung' }, { title: 'Tracer' }, { title: 'Panasonic' }] },
                { name: 'InActive Leads', tasks: [{ title: 'Alibaba' }] },
            ],
            name: 'Sales Pipelines',
            created_at: new Date()
        }
    }
    render () {
        return (
            <div>
                <h1> {this.name} </h1>
                <ListGroup horizontal >
                    {
                        this.state.collections.map(col =>
                            <ListGroup.Item key={col.name}>
                               <Collection col={col} key={col.name}/>
                            </ListGroup.Item>
                        )
                    }
                </ListGroup>
            </div>
        )
    }
}

export default BoardPage;