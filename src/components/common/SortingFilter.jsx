const SortingFilter = ({ setSortConfig, setOrderConfig, setPage }) => {
    const handleSelectOption = (e) => {
        const value = e.target.value;
        setSortConfig(value);
        if (value === 'default') {
            setSortConfig(null);
            setOrderConfig(null);
        } else {
            const [sort, order] = value.split('-');
            setSortConfig(sort);
            setOrderConfig(order);
        }
        setPage(1)
    }

    return (
        <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                <span>Sort by:</span>
            </div>

            <div className="relative">
                <select
                    name="selectedSorting"
                    onChange={handleSelectOption}
                    className="appearance-none bg-white border border-gray-200 text-gray-700 py-2 px-4 pr-10 rounded-[8px] leading-tight focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all cursor-pointer text-sm font-semibold shadow-sm hover:shadow-md"
                >
                    <option value="default">Default</option>
                    <option value="rating-desc">Popularity</option>
                    <option value="id-desc">Latest</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-gray-400">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default SortingFilter
