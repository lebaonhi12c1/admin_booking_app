import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './new.scss'
import AttachFileIcon from '@mui/icons-material/AttachFile';
function New() {
    const [file, setfile] = useState([])
    const location = useLocation()
    const getInputValue = ()=>{
        switch(location.pathname){
            case '/users/new':
                return [
                    {
                        lable: 'Name',
                        type: 'text',
                        placeholder: 'Type your name...',
                        
                    },
                    {
                        lable: 'Age',
                        type: 'number',
                        placeholder: 'Type your number...',
                        
                    },
                    {
                        lable: 'Address',
                        type: 'text',
                        placeholder: 'Type your address...',
                        
                    },
                ]
            case '/rooms/new':
                return [
                    {
                        lable: 'Id room',
                        type : 'text',
                        placeholder: 'Type your id room...'
                    },
                    {
                        lable: 'Description',
                        type : 'text',
                        placeholder: 'Type your description room...'
                    },
                ]
            default: 
                break
        }
    }
    const data = getInputValue()
    const handdleSetFile = e => {
        setfile([...file,URL.createObjectURL(e.target.files[0])])
    }
    const handleDeleteThum = indexValue =>{
        setfile(file.filter((item,index)=>{
            return index !== indexValue
        }))
    }
    console.log(file)
    return (
        <div className='new_container center_elemnt'>
            <div className='new'>
                <div className='img_box'>
                    <img src={`${file.length!==0 ? file[0]:'https://media.istockphoto.com/id/118307898/vector/sketchy-camera.jpg?s=612x612&w=0&k=20&c=TVjWvewgT_m7oHiiFCzmZOgRwGpwdDYDzVBHlBaKqVY='}`}alt="" />
                    <div className='thum_img'>
                        <div className='heading_thum'>
                            <label htmlFor="file_thum">Choose more image for your item</label>
                            <input type="file" name='file_thum' id='file_thum' style={{display: 'none'}} onChange={e=>handdleSetFile(e)}/>
                        </div>
                        <div className="thum_box_img">
                            {file?.map((item,index)=>{
                                return (
                                    <div className='thum_item' key={uuidv4()}>
                                        <img src={item} alt='thum_img' />
                                        <div className='btn_delete_thum'onClick={function(){handleDeleteThum(index)}}>
                                            &#10005; 
                                        </div>
                                    </div>
                                )
                            })}
                           
                        </div>
                    </div>
                </div>
                <div className='container_from'>
                   <div className='new_form'>
                     <div className='form_item choose_item'>
                            <label htmlFor='file' className="form_lable choose_img">
                                <AttachFileIcon className='icon'/>
                                Choose yout image
                                <input type='file' name='file' id='file'style={{display: 'none'}} className='form_inp' onChange={function(e){handdleSetFile(e)}}/>
                            </label> 
                         </div>
                        {data?.map(item =>
                            (
                                <div key={uuidv4()} className='form_item'>
                                    <label htmlFor={item.lable} className="form_lable">
                                        {item.lable}
                                    </label>
                                    <input type={item.type} className='form_inp' placeholder={item.placeholder} spellCheck = {false} />
                                </div>
                            )    
                        )}
                   </div>
                   <div className='btn_send'>Send</div>
                </div>
            </div>
        </div>
    );
}

export default New;