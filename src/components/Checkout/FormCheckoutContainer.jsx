import React, { useContext, useState } from "react";
import FormCheckout from "./FormCheckout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { dataContext } from "../Context/DataContext";
import { db } from "../../firebaseConfig";
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

export const FormCheckoutContainer = () => {
  const { cart, clearCart, getTotalPrice } = useContext(dataContext);

  const [orderId, setOrderId] = useState(null);

  const checkoutFn = (data) => {
    let total = getTotalPrice();
    let dataOrder = {
      buyer: data,
      items: cart,
      total: total,
      date: serverTimestamp(),
    };

    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, dataOrder).then((res) => setOrderId(res.id));

    cart.map((product) =>
      updateDoc(doc(db, "products", product.id), {
        stock: product.stock - product.quantity,
      })
    );

    clearCart();
  };

  const {
    handleSubmit,
    handleChange,
    errors,
    values,
    touched,
    handleBlur,
  } = useFormik({
    initialValues: {
      nombre: "",
      email: "",
      confirmEmail: "",
      phone: null,
    },
    onSubmit: checkoutFn,
    validationSchema: Yup.object().shape({
          nombre: Yup.string()
            .required("Este campo es obligatorio")
            .min(3, "El nombre debe tener al menos 3 caracteres")
            .max(10, "El nombre no puede superar los 10 caracteres"),
          email: Yup.string()
            .email("El campo debe ser un email")
            .required("Este campo es obligatorio"),
          confirmEmail: Yup.string()
            .oneOf([Yup.ref("email"), null], "Los correos electrónicos deben coincidir")
            .required("Este campo es obligatorio"),
          phone: Yup.number().required("Este campo es obligatorio"),
        }),
      phone: Yup.number().required("Este campo es obligatorio"),
    validateOnChange: false,
  });

  return (
    <div>
      {orderId ? (
        <h3>
          Gracias por su compra, el número de compra es {orderId}, pronto lo contactaremos por correo electrónico.
        </h3>
      ) : (
        <FormCheckout
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          values={values}
        />
      )}
    </div>
  );
};

