import { Button, Card, ListGroup } from 'react-bootstrap';

const Task = (props) => {
    return (
        <Card bg="info">
            <Card.Body> {props.task.title}</Card.Body>
        </Card>
    );
};

export const Collection = (props) => {
    return (
        <div style={{width: '300px'}}>
            <h2 className="text-center">
                {props.col.name}
            </h2>
            <ListGroup as="ul" variant='flush'>
                {
                    props.col.tasks.map(t => 
                        <ListGroup.Item key={t.title} as="li" action>
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