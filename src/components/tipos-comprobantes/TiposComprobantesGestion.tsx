import React from "react";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../App";
import { Box } from "@mui/system";
import { Button, Paper } from "@mui/material";
import AppToolbar from "../commons/AppToolbar";
import AppCircularProgress from "../commons/AppCircularProgress";
import AppGridHeader from "../commons/AppGridHeader";

function TiposComprobantesGestion() {
    const query = collection(db, "productos");
    const [values, loading, error] = useCollection(query);
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 85 },
        { field: "nombre", headerName: "Nombre", width: 250 },
        { field: "descripcion", headerName: "Descripcion", width: 250 },
        { field: "actions", width: 150, headerName: " ", renderCell: buildGridButton },
    ];


    const rows = values?.docs.map(x => x.data()) as GridRowModel[];
    console.table(rows);

    function buildGridButton() {
        return (
            <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={handleEditarClick}
            >
                Edit
            </Button>
        );
    }

    function handleNuevoClick() {
        return;
    }

    function handleEditarClick() {
        return;
    }


    return (
        <>
            <AppToolbar titulo="Tipos de Comprobantes" />
            <Paper sx={{ width: "100%", maxWidth: 1200, minHeight: "419px", margin: "auto", overflow: "hidden" }}>
                <AppGridHeader onClick={handleNuevoClick} />
                {loading && <AppCircularProgress />}
                {values &&
                    <Box >
                        <DataGrid
                            rows={rows}
                            columns={columns}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            loading={loading}
                            autoHeight={true}
                        />
                    </Box>
                }
            </Paper >
        </>
    );
}

export default TiposComprobantesGestion;


    //     <AppToolbar titulo="Tipos de Comprobantes" />
    //     <Box component="main" sx={appTheme.main}>
    //         {loading && <AppCircularProgress />}
    //         {values &&
    //             <Paper sx={{ flex: 1, maxWidth: 1200 }}>
    //                 < Box sx={{ height: "100%" }}>
    //                     <AppBar
    //                         position="static"
    //                         color="default"
    //                         elevation={0}
    //                     >
    //                         <Toolbar>
    //                             <Grid container justifyContent="flex-end">
    //                                 <Button variant="contained" color="secondary" sx={{ mr: 1 }}>
    //                                     Add user
    //                                 </Button>
    //                             </Grid>
    //                         </Toolbar>
    //                     </AppBar>
    //                     <DataGrid
    //                         rows={rows}
    //                         columns={columns}
    //                         pageSize={5}
    //                         rowsPerPageOptions={[5]}
    //                         loading={loading}
    //                         checkboxSelection
    //                     />
    //                 </Box>
    //             </Paper>
    //         }

    //     </Box >
    // </ >



