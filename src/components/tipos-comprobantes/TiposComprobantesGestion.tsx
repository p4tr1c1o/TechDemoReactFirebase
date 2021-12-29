import React, { useState } from "react";
import { DataGrid, GridColDef, GridRenderCellParams, GridRowModel, GridRowModes } from "@mui/x-data-grid";
import { useCollection } from "react-firebase-hooks/firestore";
import { Button } from "@mui/material";
import AppToolbar from "../commons/AppToolbar";
import AppCircularProgress from "../commons/AppCircularProgress";
import AppGridHeader from "../commons/AppGridHeader";
import AppContent from "../commons/AppContent";
import TiposComprobantesFormulario from "./TiposComprobantesFormulario";
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
    const [isOpen, setIsOpen] = useState(false);
    const [selectedRow, setRow] = useState({} as GridRowModel);

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
        setIsOpen(true);


    }

    function handleEditarClick(row: GridRowModel) {
        setRow(row);
        setIsOpen(true);

    }

    function handleClose() {
        setIsOpen(false);
    }

    return (
        <>
            <AppToolbar titulo="Tipos de Comprobantes" />
            <AppContent >
                <AppGridHeader onClick={handleNuevoClick} />
                <TiposComprobantesFormulario
                    values={selectedRow as Producto}
                    handleClose={handleClose}
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
