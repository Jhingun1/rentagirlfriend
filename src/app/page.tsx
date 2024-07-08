// Assuming Hero is a component you want to use inside your page
import React from 'react';
import Hero from '@/components/hero'; // Adjust the import path as necessary

const Page = () => {
    return (
        <div>
            <Hero />
            {/* Other components */}
        </div>
    );
};

export default Page;