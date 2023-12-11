import {useMemo} from "react";


export const useData = (items, search) => {
    
    const sortedAndSearchedPosts = useMemo(() => {
        if (search === "") {
            return items;
        } else {
            return items.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
        }
    }, [search, items])

    return sortedAndSearchedPosts;
}