import Link from 'next/link'
import React from 'react'

const about = () => {
    return (
        <div>
            <h2>About</h2>
            <Link href={'/'}><h5>Go Back home</h5></Link>
        </div>

    )
}

export default about