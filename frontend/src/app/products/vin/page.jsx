import React from 'react';
import Image from 'next/image'; // Import the Next.js Image component

const VinPage = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-8">
                    <Image src="/wine.jpg" alt="Wine" width={600} height={400} className="w-full h-48 object-cover rounded-lg" />
                </div>
                <div className="w-full md:w-1/2">
                    <h1 className="text-3xl font-semibold mb-2">Vin</h1>
                    <p className="text-gray-600 mb-4">Price: $60</p>
                    <p className="text-gray-800">På våra soliga vingårdar i det svenska landskapet skapas vita viner av exceptionell kvalitet och karaktär. Genom unika mikroklimat och expertis i lokala druvsorter framställs förbluffande viner med svensk prägel. Från skörd till buteljering övervakas varje steg med noggrannhet för att bevara druvornas naturliga smaker och aromer. Vårt svenska vita vin hyllar landskapet, klimatet och vår passion för vinodling, och varje glas är en smakresa genom det svenska landskapet.</p>
                </div>
            </div>
        </div>
    );
};

export default VinPage;