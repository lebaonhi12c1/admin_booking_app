import React from 'react';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import './new.scss'
function New() {
    const location = useLocation()
    const getInputValue = ()=>{
        switch(location.pathname){
            case '/users/new':
                return [
                    {
                        lable: 'Chose your image',
                        type: 'file',
                        
                    },
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
                        lable: 'Chose room image',
                        type : 'file',
                    },
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
    return (
        <div className='center_elemnt'>
            <div className='new'>
                <div className='img_box'>
                    <img src="https://media.istockphoto.com/id/118307898/vector/sketchy-camera.jpg?s=612x612&w=0&k=20&c=TVjWvewgT_m7oHiiFCzmZOgRwGpwdDYDzVBHlBaKqVY=" alt="" />
                </div>
                <div className='container_from'>
                   <div className='new_form'>
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