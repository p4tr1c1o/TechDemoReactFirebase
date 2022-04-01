import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import ProductosService from "../../services/Productos.services";
import Producto from "../../models/Producto.model";

export interface Props {
    isOpen: boolean,
    handleClose: () => void,
    values?: Producto
}

function TiposComprobantesForm({ isOpen, values, handleClose }: Props) {

    const validation = yup.object().shape({
        nombre: yup
            .string()
            .min(6, "El nombdre debe tener almenos 6 letras")
            .required("Por favor ingrese un nombre"),
        descripcion: yup.string()
    });

    const formik = useFormik({
        initialValues: new Producto(values),
        enableReinitialize: true,
        validationSchema: validation,
        onSubmit: handleSubmit

    });

    async function handleSubmit() {

        try {
            if (formik.values.id) {
                await ProductosService.update(formik.values);
            } else {
                await ProductosService.create(formik.values);
            }
        } catch (error) {
            console.log(error);

        } finally {
            formik.resetForm();
            handleClose();
        }
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

export default TiposComprobantesForm;
