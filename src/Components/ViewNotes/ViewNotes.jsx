import React, { useEffect, useState } from 'react'
import './viewnotes.css'
import { Container, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { BiBellPlus } from 'react-icons/bi'
import { BsPersonPlus } from 'react-icons/bs'
import { IoColorPaletteOutline } from 'react-icons/io5'
import { MdDeleteOutline, MdOutlineImage } from 'react-icons/md'
import { PiBoxArrowDown } from 'react-icons/pi'
import { HiDotsVertical } from 'react-icons/hi'
import { deleteNoteAsync, GetDataAsync, updateNotesAsync } from '../../services/Actions/noteActions'
import { useNavigate } from 'react-router'

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom'
import { HiArrowUturnLeft, HiArrowUturnRight } from 'react-icons/hi2'



function ViewNotes() {
    const dispatch = useDispatch()
    const [show, setShow] = useState(false);
    const { notes } = useSelector(state => state.notes)
    const [editnote, setEditNote] = useState({
        title: '',
        contant: '',
    })
    console.log("Edit2222", editnote);

    const handleClose = () => setShow(false);

    useEffect(() => {
        dispatch(GetDataAsync())
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setEditNote({ ...editnote, [name]: value })
    }


    const handleDelete = (id) => {
        console.log("delete", id);
        dispatch(deleteNoteAsync(id))
    }

    const handleUpdate = (e) => {
        event.preventDefault()
        console.log("update", editnote);
        dispatch(updateNotesAsync(editnote))
        handleClose();
    }

    /*this function work for edit & show model */
    const handleShow = async (id) => {
        const note = notes.find(n => n.id === id);
        setEditNote(note);
        setShow(true);
    }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <Form onSubmit={handleUpdate}>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control
                                type="text"
                                name='title'
                                value={editnote.title || ''}
                                onChange={handleChange}
                                placeholder="Title"
                                autoFocus
                                className='fw-bold'
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Control as="textarea" name='content'
                                value={editnote.content || ''}
                                onChange={handleChange}
                                placeholder="take a note..."
                                rows={1} />
                        </Form.Group>
                        <Modal.Footer className='m-0 w-100'>
                            <Row>
                                <div className='col-10 d-flex justify-content-start gap-2'>
                                    <div className="col-1">
                                        <div role='button' className='hover-rounded'>
                                            <BiBellPlus />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div role='button' className='hover-rounded'>
                                            <BsPersonPlus />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div role='button' className='hover-rounded'>
                                            <IoColorPaletteOutline />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div role='button' className='hover-rounded'>
                                            <label htmlFor='image-uplode' style={{ cursor: 'pointer' }} className='p-0 m-0'>
                                                <MdOutlineImage />
                                            </label>
                                            <input type="file" id='image-uplode' style={{ display: 'none' }} />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div role='button' className='hover-rounded'>
                                            <PiBoxArrowDown />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div role='button' className='hover-rounded'>
                                            <HiDotsVertical />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div role='button' className='hover-rounded'>
                                            <HiArrowUturnLeft />
                                        </div>
                                    </div>
                                    <div className="col-1">
                                        <div role='button' className='hover-rounded'>
                                            <HiArrowUturnRight />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-2 m-0'>
                                    <button className='addnote-btn' type='submit' >
                                        Close
                                    </button>
                                </div>
                            </Row>
                        </Modal.Footer>
                    </Form>
                </Modal.Body>
            </Modal>

                <Row className='view'>
                    {
                        notes.map((data) => {
                            return (
                                <>
                                    <Col className="col-3  p-2 m-0" >
                                        <div className='main_card1'>

                                            <div className='' onClick={() => handleShow(data.id)}>
                                                <div className="card_header fw-bold">{data.title}</div>
                                                <div className="card_body">
                                                    {data.content}
                                                </div>
                                            </div>
                                            <div className="main_card " >
                                                <div className="overlay">
                                                    <div className="col-1">
                                                        <div role='button' className='hover-rounded'>
                                                            <BiBellPlus />
                                                        </div>
                                                    </div>
                                                    <div className="col-1">
                                                        <div role='button' className='hover-rounded'>
                                                            <BsPersonPlus />
                                                        </div>
                                                    </div>
                                                    <div className="col-1">
                                                        <div role='button' className='hover-rounded'>
                                                            <IoColorPaletteOutline />
                                                        </div>
                                                    </div>
                                                    <div className="col-1">
                                                        <div role='button' className='hover-rounded'>
                                                            <label htmlFor="image-uplode" style={{ cursor: 'pointer' }}>
                                                                <MdOutlineImage />
                                                            </label>
                                                            <input type="file" id='image-uplode' style={{display: 'none'}} />
                                                        </div>
                                                    </div>
                                                    <div className="col-1">
                                                        <div role='button' className='hover-rounded'>
                                                            <PiBoxArrowDown />
                                                        </div>
                                                    </div>
                                                    <div className="col-1">
                                                        <div role='button' className='hover-rounded'>
                                                            <MdDeleteOutline onClick={() => handleDelete(data.id)} />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>

                                    </Col>
                                </>
                            )
                        })
                    }
                </Row>
        </>

    )
}

export default ViewNotes
