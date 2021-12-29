import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import ProductosService, { Producto } from "../../services/Productos.services";


export interface Props {
    handleClose: () => void,
    values?: Producto
}

function TiposComprobantesFormulario({ values, handleClose }: Props) {
    const isOpen = Boolean(values);
    const validation = yup.object().shape({
        nombre: yup
            .string()
            .min(6, "El nombdre debe tener almenos 6 letras")
            .required("Por favor ingrese un nombre"),
        descripcion: yup.string()
    });

    const formik = useFormik({
        initialValues: values ?? new Producto(),
        validationSchema: validation,
        onSubmit: handleSubmit

    });


    async function handleSubmit() {
        const value = formik.values;
        console.log(formik.values);
        // console.log(await validation.isValid(formik.values));

        try {
            if (value.id) {
                await ProductosService.update(value);
            } else {
                await ProductosService.create(value);
            }
        } catch (error) {
            console.log(error);

        } finally {
            formik.resetForm();
            handleClose();
        }
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
