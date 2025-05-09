import React, { useState, useEffect } from 'react';
import { getComputerPartsCount, getComputerPartsCountByCategory } from '../../api/computerParts';
import './Pagination.css';

interface PaginationProps {
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	setPageSize: React.Dispatch<React.SetStateAction<number>>;
	currentPage: number;
	pageSize: number;
	searchValue?: string;
	category?: string;
}

const Pagination: React.FC<PaginationProps> = ({
	setCurrentPage,
	setPageSize,
	currentPage,
	pageSize,
	searchValue,
	category,
}) => {
	const [totalCount, setTotalCount] = useState(0);

	// Fetch total count of parts when the component mounts
	useEffect(() => {
		const fetchCount = async () => {
			const count = await getComputerPartsCount(searchValue); // Fetch total count from your API
			setTotalCount(count);
		};

		fetchCount();
	}, [searchValue]);

	useEffect(() => {
		const fetchCount = async () => {
			const count = await getComputerPartsCountByCategory(category); // Fetch total count from your API
			setTotalCount(count);
		};

		fetchCount();
	}, [category]);

	// Calculate total pages based on totalCount and pageSize
	const totalPages = Math.ceil(totalCount / pageSize);

	// Handlers for page change and page size change
	const handlePageChange = (page: number) => {
		if (page > 0 && page <= totalPages) {
			setCurrentPage(page);
		}
	};

	const handlePageSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		const size = parseInt(event.target.value);
		setPageSize(size);
		setCurrentPage(1); // Reset to the first page when page size changes
	};

	// Create pagination display logic
	const pageNumbers: (number | string)[] = [];
	const pageRange = 2;
	var start = 0;
	var end = 0;

	// Add first page
	pageNumbers.push(1);

	// Add "..." if there are skipped pages before the current page
	if (currentPage - pageRange > 1) {
		pageNumbers.push('...');
	}

	if (currentPage < 2) {
		start = 2;
		end = 3;
	} else if (currentPage > totalPages - 1) {
		start = totalPages - 1;
		end = totalPages - 1;
	} else {
		start = currentPage - pageRange;
		end = currentPage + pageRange;
	}

	// Add pages around the current page
	for (let i = start; i <= end; i++) {
		if (i > 1 && i < totalPages) {
			pageNumbers.push(i);
		}
	}

	// Add "..." if there are skipped pages after the current page
	if (currentPage + pageRange < totalPages - 2) {
		pageNumbers.push('...');
	}

	// Add last page
	if (totalPages > 1) {
		pageNumbers.push(totalPages);
	}

	return (
		<div>
			<div className='pagination'>
				<div>
					<button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} className='arrow'>
						&lt;
					</button>

					{pageNumbers.map((page, index) => (
						<button
							key={index}
							onClick={() => typeof page === 'number' && handlePageChange(page)}
							className={currentPage === page ? 'active' : ''}
						>
							{page}
						</button>
					))}

					<button
						onClick={() => handlePageChange(currentPage + 1)}
						disabled={currentPage === totalPages}
						className='arrow'
					>
						&gt;
					</button>
				</div>
			</div>

			<div className='pagination-info'>
				<div className='items-per-page'>
					<p>Puslapyje prekių:</p>
					<select value={pageSize} onChange={handlePageSizeChange}>
						<option value={40}>40</option>
						<option value={80}>80</option>
						<option value={160}>160</option>
					</select>
				</div>

				<div className='total-items'>
					<p>Rasta prekių: {totalCount}</p>
				</div>
			</div>
		</div>
	);
};

export default Pagination;
