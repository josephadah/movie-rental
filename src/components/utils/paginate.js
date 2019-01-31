
export function Paginate(currentPage, totalItems, pageSize) {
    const arrayIn = [...totalItems];
    const startIndex = (currentPage - 1) * pageSize;
    return arrayIn.splice(startIndex, pageSize);
}