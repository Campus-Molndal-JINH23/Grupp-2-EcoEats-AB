import React from 'react';
import Image from 'next/image';

const eggs = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-8">
                    <Image src="/eggs.jpg" alt="Eggs" width={600} height={400} className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-semibold mb-2">Eggs</h1>
                    <p className="text-gray-600 mb-4">Price: $10</p>
                    <p className="text-gray-800">På våra gårdar lever glada hönor i harmoni, vars välbefinnande är högsta prioritet. Vi tar hand om dem med omsorg och uppmärksamhet, vilket resulterar i ägg av högsta kvalitet fyllda med smak och näringsämnen. Med fritt rörliga hönor, tillgång till näringsrik mat och friskt vatten, strävar vi efter att fortsätta vår tradition av omsorg och kvalitet på våra gårdar, välkomnar alla att smaka på skillnaden.</p>
                </div>
            </div>
        </div>
    );
};

export default eggs;















/*


import React from 'react';

export default function eggs() {
    return<h1>First product</h1>
}

 */