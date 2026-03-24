import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8 mt-12">
            <div className="container mx-auto text-center">
                <h3 className="text-xl font-bold mb-4">ঋগ্বেদ - বেদের জ্ঞান</h3>
                <p className="mb-4">
                    এই প্ল্যাটফর্মটি ঋগ্বেদের শিক্ষা এবং গবেষণা প্রচারের জন্য নিবেদিত।
                </p>
                <div className="flex justify-center gap-4 mb-4">
                    <a href="#" className="hover:text-yellow-300 transition">সম্পর্কে</a>
                    <a href="#" className="hover:text-yellow-300 transition">যোগাযোগ</a>
                    <a href="#" className="hover:text-yellow-300 transition">গোপনীয়তা নীতি</a>
                </div>
                <p className="text-sm text-gray-400">
                    © 2026 ঋগ্বেদ সংরক্ষণ প্রকল্প। সর্বাধিকার সংরক্ষিত।
                </p>
            </div>
        </footer>
    );
};

export default Footer;