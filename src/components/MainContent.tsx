import React from "react";
import { useRegionFilter } from "../hooks/useRegionFilter";

export function MainContent() {
    const { selectedProvince, selectedRegency, selectedDistrict } = useRegionFilter();

    return (
        <main className="flex-1 flex flex-col bg-white">
            {/* Top Bar: Breadcrumbs & User Profile */}
            <div className="h-20 border-b border-gray-100 flex items-center justify-between px-8 relative z-20">

                {/* Kiri: Breadcrumb */}
                <nav className="breadcrumb text-sm text-gray-400 flex items-center gap-2 font-medium">
                    <span>Indonesia</span>
                    {selectedProvince && (
                        <React.Fragment>
                            <span className="text-gray-300">›</span>
                            <span className="text-blue-500">{selectedProvince.name}</span>
                        </React.Fragment>
                    )}
                    {selectedRegency && (
                        <React.Fragment >
                            <span className="text-gray-300">›</span>
                            <span className="text-blue-500">{selectedRegency.name}</span>
                        </React.Fragment>
                    )}
                    {selectedDistrict && (
                        <React.Fragment>
                            <span className="text-gray-300">›</span>
                            <span className="text-blue-500">{selectedDistrict.name}</span>
                        </React.Fragment>
                    )}
                </nav>

                {/* Kanan: Profile Marker (Hoverable) */}
                <div className="flex items-center gap-3 group cursor-pointer relative">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                            Jamaludin Hakim
                        </p>
                        <p className="text-xs text-gray-400 font-medium tracking-wide">
                            Frontend Developer
                        </p>
                    </div>

                    {/* Avatar Initial */}
                    <div className="w-10 h-10 bg-linear-to-tr text-white font-bold rounded-full flex items-center justify-center border-2 border-white shadow-sm group-hover:shadow-md group-hover:scale-105 transition-all duration-300">
                        <img src="https://ohl6h4pfccuxujvz.public.blob.vercel-storage.com/assets/jd_logo_1024-55NCd59VtjrIiVx4yHYL4Qa3gCdoak.jpg" alt="Logo" className="w-full h-full object-cover rounded-full" />
                    </div>

                    {/* Hover Dropdown / Tooltip */}
                    <div className="absolute top-full right-0 mt-3 w-56 bg-white border border-gray-100 rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top-right scale-95 group-hover:scale-100 p-5 z-50 flex flex-col items-center text-center">
                        <div className="w-12 h-12 bg-blue-50 text-blue-600 font-bold text-lg rounded-full flex items-center justify-center mb-3">
                            <img src="https://ohl6h4pfccuxujvz.public.blob.vercel-storage.com/hero/20250406_080349_no_background-aKgZZvdK5IDeOKM9Y2kFCeac3eHFgm.png" alt="Avatar" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">
                            Assessment By
                        </p>
                        <p className="text-sm font-bold text-slate-800">
                            Jamaludin Hakim Harsoyo
                        </p>
                        <a href="https://www.jamesdev.my.id/" target="_blank" className="text-xs text-blue-500 mt-1 bg-blue-50 py-1 px-3 rounded-full">
                            jamesdev.my.id
                        </a>
                    </div>
                </div>
            </div>

            {/* Visual Content */}
            <div className="bg-gray-100 flex-1 flex flex-col items-center justify-center p-12 gap-12 text-center">
                {!selectedProvince ? (
                    <div className="text-gray-400 flex flex-col items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="mb-4 opacity-50"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" /></svg>
                        <p>Silakan pilih wilayah pada menu di samping.</p>
                    </div>
                ) : (
                    <React.Fragment>
                        <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                            <span className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-2">Provinsi</span>
                            <h2 className="text-5xl font-extrabold text-slate-800 tracking-tight">{selectedProvince.name}</h2>
                        </div>

                        {selectedRegency && (
                            <React.Fragment>
                                <div className="h-6 border-l border-dashed border-gray-300"></div>
                                <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <span className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-2">Kota / Kabupaten</span>
                                    <h2 className="text-4xl font-extrabold text-slate-800 tracking-tight">{selectedRegency.name}</h2>
                                </div>
                            </React.Fragment>
                        )}

                        {selectedDistrict && (
                            <React.Fragment>
                                <div className="h-6 border-l border-dashed border-gray-300"></div>
                                <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                                    <span className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-2">Kecamatan</span>
                                    <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">{selectedDistrict.name}</h2>
                                </div>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                )}
            </div>
        </main>
    );
}