import { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import CaptionWithRadio from '../caption-with-radio';
import CaptionWithText from '../caption-with-text';

function TaskForm() {
    const [formData, setFormData] = useState({
        purpose: '',
        label: '',
        key: '',
        status: ''
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isSuccess = formData.label && formData.purpose && formData.status;

        if (isSuccess) {
            setMessage('Operation successful!');
            console.log('Form Data:', formData);
        } else {
            setMessage('Operation failed. Please make sure all fields are filled out.');
        }

        setTimeout(() => {
            setMessage('');
        }, 3000);
    };

    return (
        <Container
            className="bg-light p-4 rounded shadow-sm"
            style={{
                maxWidth: '600px',
                margin: 'auto',
                backgroundColor: '#FFFDEC',
                fontFamily: 'Roboto, sans-serif',
            }}
        >
            {/* Message */}
            {message && <Alert variant={message === 'Operation successful!' ? 'success' : 'danger'}>{message}</Alert>}

            <Form onSubmit={handleSubmit}>
                {/* Purpose*/}
                <Form.Group className='mb-3'>
                    <Form.Label className="text-start w-100">Purpose:</Form.Label>
                    <div className="d-flex flex-row">
                        <CaptionWithRadio label="Client" name='purpose' value="Client" onChange={handleChange} />
                        <CaptionWithRadio label="Group" name='purpose' value="Group" onChange={handleChange} />
                        <CaptionWithRadio label="Agent" name='purpose' value="Agent" onChange={handleChange} />
                    </div>
                </Form.Group>

                {/* Label */}
                <CaptionWithText
                    label="Label:"
                    type='text'
                    placeholder='Please write label to here'
                    name='label'
                    onChange={handleChange}
                />
                
                {/* Key */}
                <CaptionWithText
                    label="Key:"
                    type='password'
                    placeholder='Please write key to here'
                    name='key'
                    onChange={handleChange}
                />

                {/* Status: Radio Buttons */}
                <Form.Group className='mb-4'>
                    <Form.Label className="text-start w-100">Status:</Form.Label>
                    <div className='d-flex flex-row'>
                        <CaptionWithRadio label="Active" name="status" value="Active" onChange={handleChange} />
                        <CaptionWithRadio label="Passive" name="status" value="Passive" onChange={handleChange} />
                    </div>
                </Form.Group>

                {/* Button */}
                <Button variant='secondary' type='submit' className='w-100'>Save</Button>
            </Form>
        </Container>
    );
}

export default TaskForm;
