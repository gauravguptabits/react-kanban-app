import { Stack } from 'react-bootstrap';

export const AppHeader = (props) => {
    return (
        <div className="fixed-header">
            <Stack gap={3} direction="horizontal" className="container">
                <nav>
                    <a href="/">Trello</a>
                </nav>
                <div className="ms-auto">Welcome [GUEST]</div>
                <div className="">Logout</div>
            </Stack>
        </div>
    )
}