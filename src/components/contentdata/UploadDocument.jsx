import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Input, MenuItem, Select, FormControl, InputLabel } from '@mui/material';

const UploadDocument = () => {
    const [file, setFile] = useState(null);
    const [customerID, setCustomerID] = useState('');
    const [version, setVersion] = useState('');
    const [state, setState] = useState('');
    const [bucketName, setBucketName] = useState('');

    // Example list of states
    const states = ['quoate', 'proposal', 'policy', 'amendQuoate','amendproposal','amendpolicy','customeridentity','custaddressproof'];

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file || !customerID || !version || !state || !bucketName) {
            alert("All fields are required!");
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('customerID', customerID);
        formData.append('version', version);
        formData.append('state', state);

        try {
            const response = await axios.post('http://localhost:8080/Upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('File uploaded successfully:', response.data);
        } catch (error) {
            console.error('Error uploading file:', error);
        }
    };

    return (
        <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, margin: 'auto' }}>
            <Typography variant="h6" gutterBottom>
                Upload Document
            </Typography>
            <TextField
                label="Bucket Name"
                value={bucketName}
                onChange={(e) => setBucketName(e.target.value)}
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Customer ID"
                value={customerID}
                onChange={(e) => setCustomerID(e.target.value)}
                fullWidth
                required
                margin="normal"
            />
            <TextField
                label="Version"
                value={version}
                onChange={(e) => setVersion(e.target.value)}
                fullWidth
                required
                margin="normal"
            />
            <FormControl fullWidth margin="normal">
                <InputLabel>State</InputLabel>
                <Select
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                    required
                >
                    {states.map((state) => (
                        <MenuItem key={state} value={state}>
                            {state}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Input
                type="file"
                onChange={handleFileChange}
                required
                fullWidth
                sx={{ marginTop: 2 }}
            />
            <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: 2 }}
            >
                Upload
            </Button>
        </Box>
    );
};

export default UploadDocument;
