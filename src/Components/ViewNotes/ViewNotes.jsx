import React from 'react'
import './viewnotes.css'
import { Container, Row } from 'react-bootstrap'
function ViewNotes() {
    return (
        <>
            <Container>
                <Row >
                    <div className="col-4 p-2">
                        <div className="main_card p-2">
                            <div className="card_header">View Notes</div>
                            <div className="card_body ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                            </div>
                        </div>
                    </div>
                </Row>
            </Container>

        </>
    )
}

export default ViewNotes
