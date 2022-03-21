// import { Button, Card, ListGroup } from 'react-bootstrap';

// const Task = (props) => {
//     return (
//         <Card bg="info">
//             <Card.Body> {props.task.title}</Card.Body>
//         </Card>
//     );
// };

// export const NewCollection = (props) => {
//     return (
//         <div style={{width: '300px'}}>
//             <h2 className="text-center">
//                 {props.col.title}
//             </h2>
//             <ListGroup as="ul" variant='flush'>
//                 {
//                     props.col.description.map(t => 
//                         <ListGroup.Item key={t.title} as="li" action>
//                             <Task task={t} />
//                         </ListGroup.Item>
//                     )
//                 }
//             </ListGroup>
//             <div className="d-grid gap-2" >
//                 <Button variant="outline-primary">Add new Task</Button>
//             </div>
//         </div>
//     );
// }

import { Card } from "react-bootstrap";

export const NewCollection = (props) => {
    return (
        <Card bg="Light" border="primary" style={{ cursor: 'pointer'}} onClick={(e) => props.onBoardClicked(e, props.board)}>
            <Card.Header className="text-center">{props.collection.name}</Card.Header>
            <Card.Body>
                { props.collection.name }
                <p>{props.collection.created_at}</p>
            </Card.Body>
        </Card>
    );
}