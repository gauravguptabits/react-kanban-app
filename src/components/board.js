import { Card } from "react-bootstrap";

export const Board = (props) => {
    return (
        <Card bg="Light" border="primary" style={{ cursor: 'pointer'}} onClick={(e) => props.onBoardClicked(e, props.board)}>
            <Card.Header className="text-center">{props.board.title}</Card.Header>
            <Card.Body>
                { props.board.description }
                <p>{props.board.created_at}</p>
            </Card.Body>
            <Card.Link onClick={(e)=> props.onBoardClicked(e, props.board)}>Open Board</Card.Link>
        </Card>
    );
}