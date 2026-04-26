import { lazy, Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const WelcomePage = lazy(() => import('./pages/WelcomePage'));
const SchedulePage = lazy(() => import('./pages/SchedulePage'));
const AdminLoginPage = lazy(() => import('./pages/AdminLoginPage'));
const AdminDashboardPage = lazy(() => import('./pages/AdminDashboardPage'));

function SplashDismisser() {
    useEffect(() => {
        const splash = document.getElementById('splash');
        if (!splash) return;

        splash.classList.add('splash-out');
        const timer = setTimeout(() => splash.remove(), 450);
        return () => clearTimeout(timer);
    }, []);

    return null;
}

export default function App() {
    return (
        <Suspense fallback={null}>
            <SplashDismisser />
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/admin" element={<AdminLoginPage />} />
                <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
    );
}
