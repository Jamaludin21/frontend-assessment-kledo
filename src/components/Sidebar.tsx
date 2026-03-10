import { Combobox } from "./Combobox";
import { useRegionFilter } from "../hooks/useRegionFilter";

export function Sidebar() {
    const {
        data,
        selectedProvinceId,
        selectedRegencyId,
        selectedDistrictId,
        filteredRegencies,
        filteredDistricts,
        handleFilterChange,
        handleReset,
    } = useRegionFilter();

    return (
        <aside className="w-72 bg-gray-100 border-r border-gray-200 flex flex-col p-6 shadow-sm z-10">
            <div className="flex items-center gap-3 mb-10">
                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center text-blue-600">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-world-map"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 8h-2a2 2 0 0 0 -2 2a2 2 0 1 1 -4 0v-1a2 2 0 0 0 -2 -2h-1a2 2 0 0 1 -2 -2v-.5" />
                        <path d="M3 12h3a2 2 0 0 1 2 2v.5a1.5 1.5 0 0 0 1.5 1.5a1.5 1.5 0 0 1 1.5 1.5v3.25" />
                        <path d="M15 20.5v-3.5a2 2 0 0 1 2 -2h3.5" />
                        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                    </svg>
                </div>
                <h1 className="font-bold text-lg">Frontend Assessment</h1>
            </div>

            <h2 className="text-xs font-bold text-gray-400 tracking-wider mb-4 uppercase">
                Filter Wilayah
            </h2>

            <div className="flex flex-col gap-5 flex-1">
                <Combobox
                    id="province"
                    name="province"
                    label="Provinsi"
                    value={selectedProvinceId}
                    options={data.provinces}
                    onChange={(val) => handleFilterChange("province", val)}
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
                            <line x1="9" x2="9" y1="3" y2="18" />
                            <line x1="15" x2="15" y1="6" y2="21" />
                        </svg>
                    }
                />
                <Combobox
                    id="regency"
                    name="regency"
                    label="Kota/Kabupaten"
                    value={selectedRegencyId}
                    options={filteredRegencies}
                    onChange={(val) => handleFilterChange("regency", val)}
                    disabled={!selectedProvinceId}
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
                            <path d="M9 22v-4h6v4" />
                            <path d="M8 6h.01" />
                            <path d="M16 6h.01" />
                            <path d="M12 6h.01" />
                            <path d="M12 10h.01" />
                            <path d="M12 14h.01" />
                            <path d="M16 10h.01" />
                            <path d="M16 14h.01" />
                            <path d="M8 10h.01" />
                            <path d="M8 14h.01" />
                        </svg>
                    }
                />
                <Combobox
                    id="district"
                    name="district"
                    label="Kecamatan"
                    value={selectedDistrictId}
                    options={filteredDistricts}
                    onChange={(val) => handleFilterChange("district", val)}
                    disabled={!selectedRegencyId}
                    icon={
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    }
                />
            </div>

            <button
                onClick={handleReset}
                className="mt-6 py-2.5 px-4 bg-blue-60 border-2 border-blue-200 font-semibold text-sm rounded-2xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="icon icon-tabler icons-tabler-outline icon-tabler-filter-off"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M8 4h12v2.172a2 2 0 0 1 -.586 1.414l-3.914 3.914m-.5 3.5v4l-6 2v-8.5l-4.48 -4.928a2 2 0 0 1 -.52 -1.345v-2.227" />
                    <path d="M3 3l18 18" />
                </svg>
                RESET
            </button>
        </aside>
    );
}
