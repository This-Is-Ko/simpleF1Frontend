import React from 'react';
import { Card, CardContent, Typography, TableContainer, Table, TableBody, TableRow, TableCell, Modal, Box } from '@mui/material';
import capitalise from '../util/table_data_handler';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1000,
    bgcolor: 'background.paper'
  };

function TrackInfo(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Card sx={{ boxShadow: 0 }}>
            <Typography variant="h4" component="div">
                <strong>Track</strong>
            </Typography>
            <CardContent>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={modalStyle}>
                        <img className="track-map-large" alt="Track map" src={props.trackInfo.mapUri}/>
                    </Box>
                </Modal>
                <img className="track-map" alt="Track map" src={props.trackInfo.mapUri} title={props.trackInfo.name + " Track Map"} onClick={handleOpen}/>
                <Typography variant="subtitle2" sx={{ color: "grey"}}>
                    Click map to expand
                </Typography>
                <Typography variant="h5" component="div">
                    {props.trackInfo.name}
                </Typography>
                <TableContainer component={Card} sx={{ boxShadow: 0, overflowY: "auto" }}>
                    <Table sx={{ minWidth: 300 }} stickyHeader size="small" aria-label="simple table">
                        <TableBody>
                            {Object.keys(props.trackInfo).map((key, index) => {
                                if (key !== "mapUri" && key !== "name") {
                                    return (
                                        <TableRow
                                            key={index}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 },}}
                                        >
                                            <TableCell align="left" component="th" scope="row" width="60%" sx={{paddingLeft:"25%"}}>
                                                <strong>{capitalise(key)}</strong>
                                            </TableCell>
                                            <TableCell align="left">
                                                {props.trackInfo[key]}
                                            </TableCell>
                                        </TableRow>
                                    )
                                }
                                return null;
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}

export default TrackInfo;