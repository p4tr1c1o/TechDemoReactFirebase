import React from "react";
import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import { collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../App";
import { Button } from "@mui/material";
import AppToolbar from "../commons/AppToolbar";
import AppCircularProgress from "../commons/AppCircularProgress";
import AppGridHeader from "../commons/AppGridHeader";
import AppContent from "../commons/AppContent";


function TiposComprobantesGestion() {
    const query = collection(db, "productos");
    const [values, loading, error] = useCollection(query);
    const columns: GridColDef[] = [
        { field: "id", headerName: "ID", width: 85 },
        { field: "nombre", headerName: "Nombre", width: 250 },
        { field: "descripcion", headerName: "Descripcion", width: 250 },
        { field: "actions", width: 150, headerName: " ", renderCell: renderBotonGrilla },
    ];


    const rows = values?.docs.map(x => x.data()) as GridRowModel[];
    // console.table(rows);

    function renderBotonGrilla() {
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
            <AppContent >
                <AppGridHeader onClick={handleNuevoClick} />
                {loading && <AppCircularProgress />}
                {values &&
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        loading={loading}
                        autoHeight={true}
                    />
                }
            </AppContent>
        </>
    );
}

export default TiposComprobantesGestion;
