import type { ReactNode } from "react";

interface Option {
    id: number;
    name: string;
}

interface ComboboxProps {
    id: string;
    name: string;
    label: string;
    value: string;
    options: Option[];
    onChange: (value: string) => void;
    disabled?: boolean;
    placeholder?: string;
    icon?: ReactNode;
}

export function Combobox({ id, name, label, value, options, onChange, disabled, placeholder, icon }: ComboboxProps) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor={id} className="text-xs font-semibold text-gray-500 uppercase flex items-center gap-2">
                {icon && <span className="text-gray-400">{icon}</span>}
                {label}
            </label>
            <select
                id={id}
                name={name}
                value={value}
                onChange={(e) => onChange(e.target.value)}
                disabled={disabled}
                className="p-2.5 bg-white border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-100 focus:border-blue-400 outline-none transition-all cursor-pointer disabled:bg-gray-100 disabled:cursor-not-allowed"
            >
                <option value="">{placeholder || `Pilih ${label}`}</option>
                {options.map((opt) => (
                    <option key={opt.id} value={opt.id}>
                        {opt.name}
                    </option>
                ))}
            </select>
        </div>
    );
}