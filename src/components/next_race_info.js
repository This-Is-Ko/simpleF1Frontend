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
                // <CardContent>
                //     <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                //         {props.nextRaceInfo.country}
                //     </Typography>
                //     <Typography variant="h5" component="div">
                //         {props.nextRaceInfo.track}
                //     </Typography>
                //     <Typography color="text.secondary">
                //         Date: {date}
                //     </Typography>
                //     <Typography color="text.secondary">
                //         Lights out: {time}
                //     </Typography>
                //     <Typography variant="caption">
                //         Local: {userDateTime.toLocaleString()}
                //     </Typography>
                //     <Typography variant="body2">
                //         {props.nextRaceInfo.trackDescription}
                //     </Typography>
                // </CardContent>

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
                                            <TableCell component="th" scope="row">
                                                <strong>{capitalise(key)}</strong>
                                            </TableCell>
                                            <TableCell>
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
                                            <TableCell component="th" scope="row">
                                            <strong>{capitalise(key)}</strong>
                                            </TableCell>
                                            <TableCell>
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