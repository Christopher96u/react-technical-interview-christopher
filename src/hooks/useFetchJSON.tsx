import { useEffect, useState } from "react";

const useFetchJSON = (filePath: string) => {
    const [data, setData] = useState<null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [hasError, setHasError] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(filePath);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setHasError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, [])

    return { loading, hasError, data }
}
export { useFetchJSON };