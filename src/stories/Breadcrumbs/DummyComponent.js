import React from 'react';
import Breadcrumbs from 'components/Breadcrumbs/Breadcrumbs';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Text from 'components/Typography/Typography';

const Homepage = () => {
    return <Text variant='h2' >Home Page</Text>;
};

const Aboutpage = () => {
    return <Text variant='h2' >About Page</Text>;
};

const Servicespage = () => {
    return <Text variant='h2' >Services Page</Text>;
};

export default function DummyBreadCrumbs({ data }) {
    return (
        <BrowserRouter>
            <Breadcrumbs data={data} />
            <br />
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/about' element={<Aboutpage />} />
                <Route path='/about/services' element={<Servicespage />} />
                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />
            </Routes>
        </BrowserRouter>
    )
}