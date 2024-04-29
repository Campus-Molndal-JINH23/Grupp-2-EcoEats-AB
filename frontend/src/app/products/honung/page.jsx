import React from 'react';
import Image from 'next/image';

const honung = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-8">
                    <Image src="/honey.jpg" alt="Honey" width={600} height={400} className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-semibold mb-2">Honung</h1>
                    <p className="text-gray-600 mb-4">Price: $30</p>
                    <p className="text-gray-800">På våra gårdar i det vackra svenska landskapet producerar vi med stolthet en av naturens mest älskade delikatesser - svensk honung. Genom vår passion för biodling och respekt för naturens processer strävar vi efter att erbjuda honung av högsta kvalitet, direkt från bikupan till ditt kök. Våra bin utforskar de blomstrande ängarna och skogarna runt gården, samlar nektar från svenska växter och blommor, från rapsfälten till lavendelbuskar och ängsblommor. Med noggrannhet och omsorg skördar vi vårt biologiska guld, bevarar dess naturliga smak och näringsämnen, utan tillsatser. Varje sked är fylld med svensk sommars härliga smak och kärlek från våra bikupor.</p>
                </div>
            </div>
        </div>
    );
};

export default honung;
