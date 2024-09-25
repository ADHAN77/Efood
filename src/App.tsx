import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './Pages/Home';
import PerfilPage from './Pages/PerfilPage';
import { GlogalCss } from './styles';


const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <>
                <Header />
                <Home />
                <Footer />
            </>
        ),
    },
    {
        path: '/Perfil',
        element: <PerfilPage />,
    },
]);

function App() {
    return (
        <>
            <GlogalCss />
            <RouterProvider router={router} />
        </>
    );
}

export default App;