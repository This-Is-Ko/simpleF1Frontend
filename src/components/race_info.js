import React from 'react';
import { Card, CardContent, Typography, TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
import capitaliseWithSpacing from '../util/table_data_handler';

function RaceInfo(props) {

    var userDateTime = new Date(props.raceInfo.dateTimeUtc);
    var raceDateTime = (new Date(props.raceInfo.raceDateTime)).toLocaleString();
    var date = (raceDateTime.split(", "))[0];
    var time = (raceDateTime.split(", "))[1];
    var additionalData = {
        Date: date,
        Time: time,
        MyTime: userDateTime.toLocaleString()
    }

    return (
        <Card sx={{ boxShadow: 0, paddingBottom: 4 }}>
            <Typography variant="h4" component="div">
                <strong>Race</strong>
            </Typography>
            {("country" in props.raceInfo) ?
                <TableContainer component={Card} sx={{ boxShadow: 0, overflowY: "auto" }}>
                    <Table sx={{ minWidth: 300 }} stickyHeader size="small" aria-label="simple table">
                        <TableBody>
                            {Object.keys(props.raceInfo).map((key, index) => {
                                if (key !== "raceDateTime" && key !== "dateTimeUtc" && key !== "name") {
                                    return (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 },}}
                                        >
                                            <TableCell align="left" component="th" scope="row" width="50%" sx={{paddingLeft:"25%"}}>
                                                <strong>{capitaliseWithSpacing(key)}</strong>
                                            </TableCell>
                                            <TableCell align="left">
                                                {props.raceInfo[key]}
                                            </TableCell>
                                        </TableRow>
                                    )
                                }
                                return null;
                            })}
                            {Object.keys(additionalData).map((key, index) => {
                                if (key !== "raceDateTime" && key !== "dateTimeUtc") {
                                    return (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 },}}
                                        >
                                            <TableCell align="left" component="th" scope="row" width="50%" sx={{paddingLeft:"25%"}}>
                                                <strong>{capitaliseWithSpacing(key)}</strong>
                                            </TableCell>
                                            <TableCell align="left">
                                                {additionalData[key]}
                                            </TableCell>
                                        </TableRow>
                                    )
                                }
                                return null;
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
                : 
                <CardContent></CardContent>
            }
        </Card>
    )
}

export default RaceInfo;