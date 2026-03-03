import React from 'react';
import Categories from '../components/ui/Categories';
import BestSeller from '../components/ui/BestSeller';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className=''>
            <section className="relative h-[400px] md:h-[500px] w-full bg-cover bg-no-repeat bg-center flex items-center justify-center text-center" style={{ backgroundImage: "url('/banner.jpg')" }}>
                <div className="relative z-10 px-4">
                    <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase tracking-wider">
                        New Collection 2026
                    </h2>
                    <p className="text-white text-lg md:text-xl mb-8 max-w-lg mx-auto">
                        Discover the latest trends in tech and fashion with exclusive deals.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all transform hover:scale-105 shadow-lg">
                        <Link to="shop">Shop Now</Link>
                    </button>
                </div>
            </section>
            <Categories />
            <BestSeller />
        </div>
    )
}

export default Home
