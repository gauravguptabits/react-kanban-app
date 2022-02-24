import { Card } from "react-bootstrap";

export const BoardCard = (props) => {
    return (
        <Card border="primary" style={{ width: '18rem', backgroundColor: 'red', cursor: 'pointer'}} onClick={(e) => props.onBoardClicked(e, props.board)}>
            <Card.Header>{props.board.name}</Card.Header>
            <div>
                <div>Last Updated - {props.board.createdOn.toUTCString()} </div>
                <div>#Cards - {props.board.cardCount}</div>
            </div>
        </Card>
    );
}