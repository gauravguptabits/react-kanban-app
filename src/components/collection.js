import { Button, Card, ListGroup } from 'react-bootstrap';

const Task = (props) => {
    return (
        <Card bg="info">
            <Card.Body> {props.task.name}</Card.Body>
        </Card>
    );
};

export const Collection = (props) => {
    return (
        <div style={{width: '300px'}}>
            <h2 className="text-center">
                {props.collection.name}
            </h2>
            <ListGroup as="ul" variant='flush'>
                {
                    props.collection.tasks.map(t => 
                        <ListGroup.Item key={t.name} as="li" action>
                            <Task task={t} />
                        </ListGroup.Item>
                    )
                }
            </ListGroup>
            <div className="d-grid gap-2" >
                <Button variant="outline-primary">Add new Task</Button>
            </div>
        </div>
    );
}