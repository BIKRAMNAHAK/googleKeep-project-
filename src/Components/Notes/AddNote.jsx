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
import { addNoteAsync, loadImageAsync } from '../../services/Actions/noteActions'


function AddNote() {
    const dispatch = useDispatch()

    const [extend, setExtend] = useState(false)
    const [notes, setNotes] = useState({
        title: '',
        content: '',
        image : ''
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setNotes({ ...notes, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const { title, content } = notes
        if (title && content) {
            dispatch(addNoteAsync(notes))
        } else {
            alert('Please fill all the fields')
        }
        setNotes({
            title: '',
            content: ''
        })
        setExtend(false)
    }

    const handleimage = async(e)=>{
        const file = e.target.files[0]
        try{
            let url = dispatch(loadImageAsync(file))
            setNotes({ ...notes,image: url })
        } catch(err){
            console.log("image upload is faild",err)
        }
    }

    const handleAdd = () => {
        setExtend(true)
    }


    const onDoubleClickHandler = () => {
        setExtend(false)
    }
    return (
        <>

            {
                extend ?
                    <>
                        <div className="main_note" >
                            <form onSubmit={handleSubmit} onDoubleClick={onDoubleClickHandler} >
                                <input type="text" placeholder='Title' className='fw-bold text-black' name='title' value={notes.title} onChange={handleInput} />
                                <textarea rows="" column="5" placeholder='take a note' name='content' value={notes.content} onChange={handleInput} ></textarea>
                                <div className="d-flex justify-content-arround">
                                    <div className='col-10 d-flex   '>
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
                                                <label htmlFor="image-upload" style={{ cursor: "pointer" }} className='m-0'>
                                                    <MdOutlineImage />
                                                </label>
                                                <input
                                                    id="image-upload"
                                                    type="file"
                                                    accept="image/*"
                                                    name='image'
                                                    onChange={handleimage}
                                                    style={{ display: "none" }}
                                                />
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
                        <input type="text" placeholder='Take a note...' className='fw-bold' onClick={handleAdd} />
                        <div className='d-flex gap-4 fs-4 align-items-center'>
                            <div className='hover-rounded2'>
                                <GrCompliance />
                            </div>
                            <div className='hover-rounded2'>
                                <IoBrushOutline />
                            </div>
                            <div role='button' className='hover-rounded2'>
                                <label htmlFor="image-uplode" style={{ cursor: 'pointer' }}>
                                    <MdOutlineImage />
                                </label>
                                <input type="file" id="image-uplode" style={{display: 'none'}} />
                            </div>
                        </div>
                    </div>
            }
        </>
    )
}

export default AddNote
