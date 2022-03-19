import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from '../services';
import CheckoutPage from "./checkout-page";
import HomePage from "./home-page";
import ServiceDetailsPage from "./service-details-page";
import ServicesPage from "./services-page";

const Pages = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={routes.service} element={<ServiceDetailsPage />} />
                <Route path={routes.checkout} element={<CheckoutPage />} />
                <Route path={routes.home} element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Pages;
