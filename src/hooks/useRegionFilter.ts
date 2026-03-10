import { useLoaderData, useSearchParams } from 'react-router-dom'
import type { RegionData } from '../types'

export function useRegionFilter () {
  const data = useLoaderData() as RegionData
  const [searchParams, setSearchParams] = useSearchParams()

  // Membaca State dari URL
  const selectedProvinceId = searchParams.get('province') || ''
  const selectedRegencyId = searchParams.get('regency') || ''
  const selectedDistrictId = searchParams.get('district') || ''

  // Logika Pencarian & Filter (Cascading)
  const selectedProvince = data.provinces.find(
    p => p.id.toString() === selectedProvinceId
  )

  const filteredRegencies = selectedProvinceId
    ? data.regencies.filter(
        r => r.province_id.toString() === selectedProvinceId
      )
    : []
  const selectedRegency = filteredRegencies.find(
    r => r.id.toString() === selectedRegencyId
  )

  const filteredDistricts = selectedRegencyId
    ? data.districts.filter(d => d.regency_id.toString() === selectedRegencyId)
    : []
  const selectedDistrict = filteredDistricts.find(
    d => d.id.toString() === selectedDistrictId
  )

  // Universal Handler untuk meminimalisir repetisi kode
  const handleFilterChange = (
    key: 'province' | 'regency' | 'district',
    value: string
  ) => {
    const newParams = new URLSearchParams(searchParams)

    if (value) {
      newParams.set(key, value)
    } else {
      newParams.delete(key)
    }

    // Aturan Reset Child Dropdown
    if (key === 'province') {
      newParams.delete('regency')
      newParams.delete('district')
    } else if (key === 'regency') {
      newParams.delete('district')
    }

    setSearchParams(newParams)
  }

  const handleReset = () => {
    setSearchParams(new URLSearchParams())
  }

  return {
    data,
    selectedProvinceId,
    selectedRegencyId,
    selectedDistrictId,
    selectedProvince,
    selectedRegency,
    selectedDistrict,
    filteredRegencies,
    filteredDistricts,
    handleFilterChange,
    handleReset
  }
}
