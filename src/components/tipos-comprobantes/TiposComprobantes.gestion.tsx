import React, { useState } from "react";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowModel, GridRowModes } from "@mui/x-data-grid";
import { useCollection } from "react-firebase-hooks/firestore";
import { Button } from "@mui/material";
import AppToolbar from "../commons/AppToolbar";
import AppCircularProgress from "../commons/AppCircularProgress";
import AppGridHeader from "../commons/AppGridHeader";
import AppContent from "../commons/AppContent";
import TiposComprobantesFormulario from "./TiposComprobantes.formulario";
import ProductosService, { Producto } from "../../services/Productos.services";


function TiposComprobantesGestion() {
    const [values, loading, error] = useCollection(ProductosService.getAll());

    const rows = values?.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
    }) as GridRowModel[];

    const columns: GridColDef[] = [
        { field: "id", headerName: "Id", hide: true },
        { field: "nombre", headerName: "Nombre", width: 250 },
        { field: "descripcion", headerName: "Descripcion", width: 250 },
        { field: "actions", width: 150, headerName: " ", renderCell: renderBotonGrilla },
    ];
    const [openDialog, setOpenDialog] = useState(false);
    const [selectedRow, setRow] = useState<GridRowModel | undefined>(undefined);

    function renderBotonGrilla(params: GridRenderCellParams) {
        return (
            <Button
                variant="contained"
                color="primary"
                size="small"
                style={{ marginLeft: 16 }}
                onClick={() => handleEditarClick(params.row)}
            >
                Edit
            </Button>
        );
    }

    function handleNuevoClick() {
        setOpenDialog(true);


    }

    function handleEditarClick(row: GridRowModel) {
        setRow(row);
        setOpenDialog(true);

    }

    function handleClose() {
        setRow(undefined);
        setOpenDialog(false);

    }

    return (
        <>
            <AppToolbar titulo="Tipos de Comprobantes" />
            <AppContent >
                <AppGridHeader onClick={handleNuevoClick} />
                <TiposComprobantesFormulario
                    values={selectedRow as Producto}
                    handleClose={handleClose}
                    isOpen={Boolean(selectedRow)}
                />
                {loading && <AppCircularProgress />}
                {values &&
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={5}
                        rowsPerPageOptions={[5]}
                        loading={loading}
                        disableSelectionOnClick
                        autoHeight
                        pagination

                    />
                }
            </AppContent>
        </>
    );
}

export default TiposComprobantesGestion;
