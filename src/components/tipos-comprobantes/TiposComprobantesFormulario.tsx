import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Box } from "@mui/system";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";

export interface Props {
    isOpen: boolean,
    handleClose: () => void,
}

function TiposComprobantesFormulario({ isOpen, handleClose }: Props) {

    const validation = yup.object({
        nombre: yup
            .string()
            .min(6, "El nombdre debe tener almenos 6 caracteres")
            .required("Por favor ingrese un nombre"),
        descripcion: yup.string()

    });

    const formik = useFormik({
        initialValues: {
            nombre: null,
            descripcion: null,
        },
        validationSchema: validation,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Dialog open={isOpen} onClose={handleClose} onBackdropClick={handleClose}>
            <DialogTitle>Tipos de Comprobantes</DialogTitle>
            <DialogContent>
                <form onSubmit={formik.handleSubmit}>
                    <TextField
                        fullWidth
                        id="nombre"
                        name="nombre"
                        label="Nombre"
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
                        value={formik.values.descripcion}
                        onChange={formik.handleChange}
                        error={formik.touched.descripcion && Boolean(formik.errors.descripcion)}
                        helperText={formik.touched.descripcion && formik.errors.descripcion}
                    />
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={handleClose}>Subscribe</Button>
            </DialogActions>
        </Dialog>
    );
}

export default TiposComprobantesFormulario;
