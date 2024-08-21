import React, { useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box } from '@mui/material';
import FilesTable from './FilesTable'; // Assuming you've implemented the FilesTable component

const ViewDoc = () => {
    const [customerID, setCustomerID] = useState('');
    const [files, setFiles] = useState([]);

    const fetchFiles = async () => {
        if (!customerID) {
            alert("Please enter a Customer ID");
            return;
        }

        try {
            const response = await axios.get(`/files/${customerID}`);
            setFiles(response.data.files);
        } catch (error) {
            console.error("Error fetching files:", error);
        }
    };

    return (
        <Box>
            <TextField
                label="Customer ID"
                variant="outlined"
                value={customerID}
                onChange={(e) => setCustomerID(e.target.value)}
                style={{ marginRight: 10 }}
            />
            <Button variant="contained" color="primary" onClick={fetchFiles}>
                Fetch Files
            </Button>

            {files.length > 0 && <FilesTable files={files} />}
        </Box>
    );
};

export default FileList;
