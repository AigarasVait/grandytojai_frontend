import React, { useState, useEffect, useRef } from 'react';
import { ComputerPart } from '../../models/ComputerPart';
import { getComputerPartsByType } from '../../api/computerParts';
import { ComputerPartCard } from './computerPartCard';
import './computerPartList.css';
import Pagination from '../generic/Pagination';
import { useParams } from 'react-router-dom';
import Navbar from '../generic/navbar';
import { ComputerPartList } from './computerPartList';
import { getFilter, saveFilter } from '../../models/CookieUtils';

interface ComputerPartListProps {
	currentPage?: number;
	pageSize?: number;
}

export const ComputerPartPageByCategory: React.FC<ComputerPartListProps> = () => {
	const [computerParts, setComputerParts] = useState<ComputerPart[]>([]);
	const [error, setError] = useState<string | null>(null);
	const [currentPage, setCurrentPage] = useState(1);
	const [pageSize, setPageSize] = useState(40);
	const { category } = useParams();
	const [searchValue, setSearchValue] = useState<string>('');

	const useStickyState = (key, defaultValue) => {
		const [value, setValue] = useState(() => {
			const saved = localStorage.getItem(key);
			return saved !== null ? JSON.parse(saved) : defaultValue;
		});

		useEffect(() => {
			localStorage.setItem(key, JSON.stringify(value));
		}, [key, value]);

		return [value, setValue];
	};

	const [filter, setFilter] = useStickyState('filter', 'name ASC');

	const fetchComputerParts = async () => {
		try {
			const computerPartsResponse = await getComputerPartsByType<ComputerPart>(
				category!.toUpperCase(),
				pageSize,
				currentPage,
				'',
				filter
			);
			setComputerParts(computerPartsResponse);
		} catch (err: any) {
			setError(err.message);
		}
	};

	const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setFilter(event.target.value);
		window.location.reload();
	};

	useEffect(() => {
		setCurrentPage(1);
	}, [category]);

	useEffect(() => {
		setComputerParts([]);
		fetchComputerParts();
	}, [category, currentPage, pageSize]);

	return (
		<div className='computer-part-list'>
			{error && <p className='error-message'>{error}</p>}
			<Navbar setSearchValue={setSearchValue} />
			<Pagination
				currentPage={currentPage}
				pageSize={pageSize}
				searchValue={searchValue}
				setCurrentPage={setCurrentPage}
				setPageSize={setPageSize}
				category={category}
			/>
			<div className='sort'>
				<p>Rūšiavimas:</p>
				<select value={filter} onChange={handleFilterChange}>
					<option value={'name ASC'}>pagal abc</option>
					<option value={'price ASC'}>pigiausi viršuje</option>
					<option value={'price DESC'}>brangiausi viršuje</option>
				</select>
			</div>
			{searchValue && <ComputerPartList currentPage={currentPage} pageSize={pageSize} searchValue={searchValue} />}

			<div className='grid-container'>
				{computerParts.length > 0 && !searchValue ? (
					computerParts.map((computerPart) => (
						<ComputerPartCard key={`${computerPart.barcode}${computerPart.storeName}`} computerPart={computerPart} />
					))
				) : (
					<p>No parts found for this category.</p>
				)}
			</div>
			<Pagination
				currentPage={currentPage}
				pageSize={pageSize}
				searchValue={searchValue}
				setCurrentPage={setCurrentPage}
				setPageSize={setPageSize}
				category={category}
			/>
		</div>
	);
};
