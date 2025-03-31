import urlJoin from 'url-join';
import apiClient from './apiClient';

import { API_COMPUTER_PART_ENDPOINT } from '../constants/api';
import { API_BEST_DEAL_ENDPOINT } from '../constants/api';

export const getComputerPartsCount = async (searchValue?: string): Promise<number> => {
    const response = await apiClient.get<number>(`${API_COMPUTER_PART_ENDPOINT}/count`, {
        params: { searchValue }
    })
    return response.data;
}

export const getComputerParts = async <ComputerPart>(limit: number, page: number, searchValue?: string): Promise<ComputerPart[]> => {
    const response = await apiClient.get<ComputerPart[]>(API_COMPUTER_PART_ENDPOINT, {
        params: { limit, page, searchValue }
    });
    return response.data;
}

export const getComputerPartsByType = async <ComputerPart>(partType: string, limit: number, page: number, searchValue?: string): Promise<ComputerPart[]>  => {
    const url = urlJoin(API_COMPUTER_PART_ENDPOINT, partType)
    const response = await apiClient.get<ComputerPart[]>(url, {
        params: { limit, page, searchValue }
    });
    return response.data; 
}

export const getComputerPartsDeals = async <ComputerPart>(limit: number, page: number): Promise<ComputerPart[]>  => {
    const response = await apiClient.get<ComputerPart[]>(API_BEST_DEAL_ENDPOINT, {
        params: { limit, page }
    });
    return response.data; 
}