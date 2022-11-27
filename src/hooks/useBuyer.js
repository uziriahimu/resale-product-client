import { useEffect, useState } from "react"

const useBuyer = option => {
    const [isBuyer, setIsBuyer] = useState(false);
    const [isBuyerLoading, setIsBuyerLoading] = useState(true);
    useEffect(() => {
        if (option) {
            fetch(`http://localhost:5000/users/${option}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsBuyer(data.Buyer);
                    setIsBuyerLoading(false);
                })
        }
    }, [option])
    return [isBuyer, isBuyerLoading]
}

export default useBuyer;