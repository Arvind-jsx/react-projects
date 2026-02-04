import { useNavigate } from "react-router-dom";
import { ChevronLeft } from 'lucide-react';

const Navigation = () => {
    let navigate = useNavigate();
    return (
        <>
            <h1
                style={{
                    margin: "10px",
                    cursor: "pointer",
                    width: "50px",
                }}
            >
                <ChevronLeft
                    size={35}
                    strokeWidth={1.75}
                    onClick={() => {
                        navigate(-1);
                    }}
                />
            </h1>

        </>
    )
}

export default Navigation