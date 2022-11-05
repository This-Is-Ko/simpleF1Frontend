import React from 'react';
import { Card, CardContent, Typography, TableContainer, Table, TableBody, TableRow, TableCell } from '@mui/material';
import capitalise from '../util/table_data_handler';

function NextRaceInfo(props) {
    var userDateTime = new Date(props.nextRaceInfo.dateTimeUtc);
    var raceDateTime = (new Date(props.nextRaceInfo.raceDateTime)).toLocaleString();
    var date = (raceDateTime.split(", "))[0]
    var time = (raceDateTime.split(", "))[1]
    var additionalData = {
        Date: date,
        Time: time,
        Local: userDateTime.toLocaleString()
    }

    return (
        <Card sx={{ boxShadow: 0 }}>
            <Typography variant="h4" component="div">
                <strong>Upcoming</strong>
            </Typography>
            {("country" in props.nextRaceInfo) ?
                <TableContainer component={Card} sx={{ boxShadow: 0, overflowY: "auto" }}>
                    <Table sx={{ minWidth: 300 }} stickyHeader size="small" aria-label="simple table">
                        <TableBody>
                            {Object.keys(props.nextRaceInfo).map((key, index) => {
                                if (key !== "raceDateTime" && key !== "dateTimeUtc") {
                                    return (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 },}}
                                        >
                                            <TableCell align="left" component="th" scope="row" width="50%" sx={{paddingLeft:"25%"}}>
                                                <strong>{capitalise(key)}</strong>
                                            </TableCell>
                                            <TableCell align="left" width="50%">
                                                {props.nextRaceInfo[key]}
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
                                                <strong>{capitalise(key)}</strong>
                                            </TableCell>
                                            <TableCell align="left" width="50%">
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

export default NextRaceInfo;