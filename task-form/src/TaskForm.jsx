import { useState } from 'react';
import { Form, Button, Container, Alert } from 'react-bootstrap';

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
                        <Form.Check inline label="Client" name='purpose' type='radio' value="Client" className="ms-0" onChange={handleChange} />
                        <Form.Check inline label="Group" name='purpose' type='radio' value="Group" className="ms-0" onChange={handleChange} />
                        <Form.Check inline label="Agent" name='purpose' type='radio' value="Agent" className="ms-0" onChange={handleChange} />
                    </div>
                </Form.Group>

                {/* Label */}
                <Form.Group className='mb-3'>
                    <Form.Label className="text-start w-100">Label:</Form.Label>
                    <Form.Control 
                        type='text' 
                        placeholder='Please write label to here' 
                        name='label' 
                        className='text-start' 
                        onChange={handleChange} 
                        style={{ fontWeight: '100' }} 
                    />
                </Form.Group>

                {/* Key */}
                <Form.Group className='mb-3'>
                    <Form.Label className="text-start w-100">Key:</Form.Label>
                    <Form.Control 
                        type='password' 
                        name='key' 
                        placeholder='Please write key to here' 
                        className='text-start' 
                        onChange={handleChange} 
                        style={{ fontWeight: '100' }} 
                    />
                </Form.Group>

                {/* Status: Radio Buttons */}
                <Form.Group className='mb-4'>
                    <Form.Label className="text-start w-100">Status:</Form.Label>
                    <div className='d-flex flex-row mb-3'>
                        <Form.Check inline label="Active" name="status" type="radio" value="Active" className='ms-0' onChange={handleChange} />
                        <Form.Check inline label="Passive" name="status" type="radio" value="Passive" className='ms-0' onChange={handleChange} />
                    </div>
                </Form.Group>

                {/* Button */}
                <Button variant='secondary' type='submit' className='w-100'>Save</Button>
            </Form>
        </Container>
    );
}

export default TaskForm;
