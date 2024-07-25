import React, { useState } from 'react'
import './addnote.css'
import { BiBellPlus } from 'react-icons/bi'
import { BsPersonPlus } from 'react-icons/bs'
import { IoBrushOutline, IoColorPaletteOutline } from 'react-icons/io5'
import { MdOutlineImage } from 'react-icons/md'
import { PiBoxArrowDown } from 'react-icons/pi'
import { HiDotsVertical } from 'react-icons/hi'
import { HiArrowUturnLeft, HiArrowUturnRight } from 'react-icons/hi2'
import { GrCompliance } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { addNoteAsync } from '../../services/Actions/noteActions'


function AddNote() {
    const dispatch = useDispatch()

    const [extend, setExtend] = useState(false)
    const [notes , setNotes] = useState({
        title: '',
        content: ''
    })

    const handleInput = (e)=>{
        const {name , value} = e.target
        setNotes({...notes, [name]: value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(addNoteAsync(notes))
        setExtend(false)
    }

    const handleAdd = () => {
        setExtend(true)
    }


    // const onDoubleClickHandler =()=>{
    //     setExtend(false)
    // }
    return (
        <>

            {
                extend ?
                    <>
                        <div className="main_note" >
                            <form onSubmit={handleSubmit} >
                                <input type="text" placeholder='Title' className='fw-bold text-black' name='title' value={notes.title} onChange={handleInput}   autoComplete='off' />
                                <textarea rows="" column="5" placeholder='take a note' name='content' value={notes.content} onChange={handleInput} ></textarea>
                                <div className="d-flex justify-content-arround">
                                    <div className='col-10 d-flex   '>
                                        <div className="col-1">
                                            <div className='hover-rounded'>
                                                <BiBellPlus />
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <div className='hover-rounded'>
                                                <BsPersonPlus />
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <div className='hover-rounded'>
                                                <IoColorPaletteOutline />
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <div className='hover-rounded'>
                                                <MdOutlineImage />

                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <div className='hover-rounded'>
                                                <PiBoxArrowDown />
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <div className='hover-rounded'>
                                                <HiDotsVertical />
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <div className='hover-rounded'>
                                                <HiArrowUturnLeft />
                                            </div>
                                        </div>
                                        <div className="col-1">
                                            <div className='hover-rounded'>
                                                <HiArrowUturnRight />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-2 d-flex justify-content-end'>
                                        <button className='addnote-btn' type='submit' >
                                            close
                                        </button>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </>

                    :
                    <div className="note_form d-flex">
                        <input type="text" placeholder='Take a note...' className='fw-bold' onClick={handleAdd}/>
                        <div className='d-flex gap-4 fs-4 align-items-center'>
                            <div className='hover-rounded2'>
                            <GrCompliance />
                            </div>
                            <div className='hover-rounded2'>
                            <IoBrushOutline />
                            </div>
                            <div className='hover-rounded2'>
                            <MdOutlineImage />
                            </div>
                        </div>
                    </div> 
            }
        </>
    )
}

export default AddNote
