import React from 'react';
import Image from 'next/image';

const kott = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-8">
                    <Image src="/meat.jpg" alt="Meat" width={600} height={400} className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-semibold mb-2">Kött</h1>
                    <p className="text-gray-600 mb-4">Price: $40</p>
                    <p className="text-gray-800">På våra gårdar prioriterar vi våra djurs välbefinnande, vilket ger kött av exceptionell kvalitet. Genom att låta dem leva fritt och tillhandahålla näringsrik föda och rent vatten skapar vi en miljö där djuren trivs naturligt. Vårt noggrant utvalda djurbestånd uppfostras med omsorg och respekt för deras naturliga behov, vilket resulterar i kött av överlägsen kvalitet. Varje tugga av vårt kött återspeglar den omsorg och uppmärksamhet som lagts ned på deras uppfödning, och vi är stolta över att erbjuda våra kunder produkter från välmående djur.</p>
                </div>
            </div>
        </div>
    );
};

export default kott;
