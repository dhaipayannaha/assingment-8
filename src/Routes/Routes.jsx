import React from 'react';
import { createBrowserRouter } from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/Error/ErrorPage';
import Home from '../Pages/Home/Home';
import DoctorDetails from '../Pages/DoctorDetails/DoctorDetails';
import Bookings from '../Pages/Booking/Bookings';
import Blogs from '../Pages/Blog/Blogs';



export const router = createBrowserRouter([
    {
        path: "/",
        Component: Root,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                loader: async () => {
                    const res = await fetch('/doctorData.json');
                    if (!res.ok) throw new Error('Failed to fetch doctor data');
                    return res.json();
                },
                path: '/',
                Component: Home
            },
            {
                path: '/doctorDetails/:id',
                loader: async () => {
                    const res = await fetch('/doctorData.json');
                    if (!res.ok) throw new Error('Failed to fetch doctor data');
                    return res.json();
                },
                Component: DoctorDetails
            },
            {
                path: '/bookings',
                loader: async () => {
                    const res = await fetch('/doctorData.json');
                    if (!res.ok) throw new Error('Failed to fetch doctor data');
                    return res.json();
                },
                Component: Bookings
            },
            {
                path: '/blogs',
                loader: async () => {
                    const res = await fetch('/reactQuestion.json');
                    if (!res.ok) throw new Error('Failed to fetch doctor data');
                    return res.json();
                },
                Component: Blogs
            }
        ]
    }
])
