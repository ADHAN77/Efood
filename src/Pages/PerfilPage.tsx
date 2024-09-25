import React from 'react';
import PerfilHeader from '../components/PerfilHeader';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import ProductList from '../components/ProductList';


const PerfilPage: React.FC = () => {
    return (
        <>
            <PerfilHeader />
            <Banner categoria="Italiana" nomeRestaurante="La Dolce Vita Trattoria" />
            <ProductList />
            <Footer />
        </>
    );
};

export default PerfilPage;