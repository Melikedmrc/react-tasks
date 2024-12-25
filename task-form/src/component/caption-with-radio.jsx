import { Form } from 'react-bootstrap';

export default function CaptionWithRadio(props) {
    return (
        <div className="d-flex flex-row ms-0 me-3">
            <Form.Check 
                inline
                label={props.label}
                name={props.name}
                type="radio" 
                value={props.value} 
                onChange={props.onChange} 
            />
        </div>
    );
}
