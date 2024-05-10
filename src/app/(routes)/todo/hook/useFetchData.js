import { useState, useEffect, useCallback } from 'react';
import toast from 'react-hot-toast';

const useFetchData = () => {
    const [data, setData] = useState(null);

    const fetchData = useCallback(async () => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/todo`, { method: 'GET' });
            const resData = await res.json();
            
            if (res.ok) {
                setData(resData);
            } else {
                toast.error('Data not found!', {
                    position: 'top-center',
                    duration: 1500,
                });
            }
        } catch (error) {
            console.error('Failed to fetch data:', error);
            toast.error('Error fetching data!', {
                position: 'top-center',
                duration: 1500,
            });
        }
    }, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return [data, fetchData];
};

export default useFetchData;