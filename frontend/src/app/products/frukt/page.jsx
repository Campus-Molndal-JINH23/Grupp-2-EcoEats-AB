import React from 'react';
import Image from 'next/image';

const frukt = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-8">
                    <Image src="/fruits_vegetables.jpg" alt="Fruit" width={600} height={400} className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-semibold mb-2">Fruit</h1>
                    <p className="text-gray-600 mb-4">Price: $20</p>
                    <p className="text-gray-800">På våra gårdar odlar vi mångfaldiga grönsaker och frukter med omsorg och ekologiska principer. Varje gröda handplockas vid optimal mognad för att säkerställa smakrik och näringsrik kvalitet. Från solbelysta grönsaksland till fruktträdens dignande grenar erbjuder vi en färgsprakande mångfald av saftiga och aromatiska produkter. Varje tugga bär på kärleken och omsorgen som våra grödor har fått, och vi är stolta över att dela denna kvalitet med våra kunder.</p>
                </div>
            </div>
        </div>
    );
};

export default frukt;



















/*

import React from 'react';

export default function frukt() {
    return<h1>First product</h1>
}

 */