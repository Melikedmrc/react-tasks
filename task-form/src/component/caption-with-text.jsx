import { Form } from 'react-bootstrap';

export default function CaptionWithText(props){
    return(
        <Form.Group className='mb-3'>
                    <Form.Label className="text-start w-100">{props.label}</Form.Label>
                    <Form.Control 
                        type={props.text} 
                        placeholder={props.placeholder} 
                        name={props.name}
                        className='text-start' 
                        onChange={props.onChange} 
                        style={{ fontWeight: '100' }} 
                    />
                </Form.Group>
    );
}