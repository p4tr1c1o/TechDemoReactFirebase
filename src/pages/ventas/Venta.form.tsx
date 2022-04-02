import { DataGrid, GridColDef, GridRowModel } from "@mui/x-data-grid";
import React from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import AppCircularProgress from "../../components/commons/AppCircularProgress";
import AppContent from "../../components/commons/AppContent";
import AppGridHeader from "../../components/commons/AppGridHeader";
import AppToolbar from "../../components/commons/AppToolbar";
import VentasService from "../../services/Ventas.services";


function VentaForm() {
    const [values, loading, error] = useCollection(VentasService.getAll());
    const columns: GridColDef[] = [];
    const rows = values?.docs.map(doc => {
        return { id: doc.id, ...doc.data() };
    }) as GridRowModel[];

    function handleNuevoClick() { return; }
    return (
        <>
            <AppToolbar titulo="Tipos de Comprobantes" />
            <AppContent>head</AppContent>
            <AppContent >
                <AppGridHeader onClick={handleNuevoClick} />
                {/* <TiposComprobantesForm
                values={selectedRow as Producto}
                handleClose={handleClose}
                isOpen={openDialog}
            /> */}
                {loading && <AppCircularProgress />}
                {/* {values &&
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        loading={loading}
                        disableSelectionOnClick
                        autoHeight
                        pagination
                    />
                } */}
            </AppContent>
            <AppContent></AppContent>
        </>
    );
}

export default VentaForm;