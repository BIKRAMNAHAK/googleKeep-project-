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
function AddNote() {
    const [extend, setExtend] = useState(false)

    const handleAdd = () => {
        setExtend(true)
    }

    const handledis = () => {
        setExtend(false)
    }

    const onDoubleClickHandler =()=>{
        setExtend(false)
    }
    return (
        <>

            {
                extend ?
                    <>
                        <div className="main_note" >
                            <form onDoubleClick={onDoubleClickHandler}>
                                <input type="text" placeholder='Title' className='fw-bold text-black' autoComplete='off' />
                                <textarea rows="" column="5" placeholder='take a note' ></textarea>
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
                                        <button className='addnote-btn' type='submit' onClick={handledis}>
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
