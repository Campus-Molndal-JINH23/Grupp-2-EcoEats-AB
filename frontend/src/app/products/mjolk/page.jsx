import React from 'react';
import Image from 'next/image';

const MjolkPage = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-8">
                    <Image src="/milk.jpg" alt="Milk" width={600} height={400} className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-semibold mb-2">Mjölk</h1>
                    <p className="text-gray-600 mb-4">Price: $50</p>
                    <p className="text-gray-800">På våra gårdar lever våra kor i harmoni med naturen, fritt att utforska gröna ängar och dricka friskt vatten. Deras välmående främjas både fysiskt och mentalt genom friheten att ströva och beta. Vi tror att vår omtanke och respekt för kor skapar en miljö där de trivs och producerar mjölk av högsta kvalitet. Varje droppe bär med sig den kärlek och omsorg vi investerar i våra djur, och vi är stolta över att erbjuda kunder mjölk med en smak som endast kommer från glada kor.</p>
                </div>
            </div>
        </div>
    );
};

export default MjolkPage;