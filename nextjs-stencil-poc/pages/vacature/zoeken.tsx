import type { NextPage } from 'next'
import React from "react";
import NvbHeaderB2c from "../../components/NvbHeaderB2c";

const Zoeken: NextPage = () => {
    return (
        <div>
            <NvbHeaderB2c isAuthenticated={false} />
        </div>
    )
}

export default Zoeken
