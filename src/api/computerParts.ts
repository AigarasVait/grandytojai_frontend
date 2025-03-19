import urlJoin from 'url-join';
import apiClient from './apiClient';

import { API_COMPUTER_PART_ENDPOINT } from '../constants/api';
import { API_BEST_DEAL_ENDPOINT } from '../constants/api';

export const getComputerParts = async <ComputerPart>(): Promise<ComputerPart[]> => {
    const response = await apiClient.get<ComputerPart[]>(API_COMPUTER_PART_ENDPOINT);
    return response.data;
}

export const getComputerPartsByType = async <ComputerPart>(partType: string): Promise<ComputerPart[]>  => {
    const url = urlJoin(API_COMPUTER_PART_ENDPOINT, partType)
    const response = await apiClient.get<ComputerPart[]>(url);
    return response.data; 
}

export const getComputerPartsDeals = async <ComputerPart>(): Promise<ComputerPart[]>  => {
    const response = await apiClient.get<ComputerPart[]>(API_BEST_DEAL_ENDPOINT);
    return response.data; 
}