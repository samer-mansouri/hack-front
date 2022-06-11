import React from 'react'
import { useState } from 'react';
import StripeContainer from './StripeContainer';


function Pay() {

    const [showItem, setShowItem] = useState(false);

  return (
    <div>
        <h1>TEST</h1>
        {showItem ? (
            <StripeContainer />
        ) : (
            <>
                <h3>$10.00</h3>
                <h1>TEST</h1>
                <button onClick={() => setShowItem(true)}>Purchase Spatula</button>
            </>
        )}
    </div>
  )
}

export default Pay