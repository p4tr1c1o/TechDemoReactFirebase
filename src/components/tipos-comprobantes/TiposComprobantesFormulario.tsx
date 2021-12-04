import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import ProductosService, { Producto } from "../../services/Productos.services";


export interface Props {
    isOpen: boolean,
    handleClose: () => void,
}

function TiposComprobantesFormulario({ isOpen, handleClose }: Props) {

    const validation = yup.object().shape({
        nombre: yup
            .string()
            .min(6, "El nombdre debe tener almenos 6 caracteres")
            .required("Por favor ingrese un nombre"),
        descripcion: yup.string()
    });

    const formik = useFormik({
        initialValues: {
            nombre: "",
            descripcion: "",
        },
        validationSchema: validation,
        onSubmit: handleSubmit

    });


    function handleSubmit() {
        const values = formik.values;
        console.log("formik.values");
        // console.log(await validation.isValid(formik.values));

        // if (values.docId) {
        //     ProductosService.update(values);
        // } else {
        ProductosService.create(values);
        // }
    }

    return (
        <Dialog open={isOpen} onClose={handleClose} onBackdropClick={handleClose}>
            <DialogTitle>Tipos de Comprobantes</DialogTitle>
            <DialogContent sx={{ padding: 2, marginBottom: 2, minWidth: { md: 560 } }}>
                <form onSubmit={formik.handleSubmit} >
                    <TextField
                        fullWidth
                        id="nombre"
                        name="nombre"
                        label="Nombre"
                        margin="dense"
                        value={formik.values.nombre}
                        onChange={formik.handleChange}
                        error={formik.touched.nombre && Boolean(formik.errors.nombre)}
                        helperText={formik.touched.nombre && formik.errors.nombre}
                    />
                    <TextField
                        fullWidth
                        id="descripcion"
                        name="descripcion"
                        label="Descripcion"
                        margin="dense"
                        value={formik.values.descripcion}
                        onChange={formik.handleChange}
                        error={formik.touched.descripcion && Boolean(formik.errors.descripcion)}
                        helperText={formik.touched.descripcion && formik.errors.descripcion}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button
                    variant="contained"
                    type="submit"
                    onClick={formik.submitForm}
                    disabled={formik.isSubmitting} >
                    Guardar
                </Button>
            </DialogActions>
        </Dialog >
    );
}

export default TiposComprobantesFormulario;
