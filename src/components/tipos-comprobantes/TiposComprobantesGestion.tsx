import React from "react";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../App";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";
import appTheme from "../../paperbase/AppTheme";
import AppToolbar from "../../paperbase/AppToolbar";
import AppCircularProgress from "../../paperbase/AppCircularProgress";

function TiposComprobantesGestion() {
    const query = collection(db, "productos");
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 150 },
        { field: "nombre", headerName: "Nombre", width: 250 },
        { field: "descripcion", headerName: "Descripcion", width: 250 },
    ];
    const [values, loading, error] = useCollection(query);

    values?.docs.map(x => console.log(x.data()));
    const rows = values?.docs.map(x => x.data()) as GridRowModel[];


    return (
        <>
            <AppToolbar titulo="Tipos de Comprobantes" />
            <Box component="main" sx={appTheme.main}>
                <Paper sx={{ flex: 1 }}>
                    {loading && <AppCircularProgress />}
                    {values &&
                        <Box sx={{ flex: 1 }}>
                            <DataGrid
                                rows={rows}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                                loading={loading}
                                checkboxSelection
                            />
                        </Box>
                    }
                </Paper>
            </Box >
        </ >
    );
}

export default TiposComprobantesGestion;


