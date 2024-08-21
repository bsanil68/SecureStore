import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const FilesTable = ({ files }) => {
    const handleView = (fileName) => {
        // Logic to view the file, e.g., navigating to a new route or opening a modal
        console.log(`Viewing file: ${fileName}`);
    };

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>File Name</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {files.map((file, index) => (
                        <TableRow key={index}>
                            <TableCell>{file}</TableCell>
                            <TableCell align="right">
                                <Button onClick={() => handleView(file)} color="primary">
                                    View
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default FilesTable;
