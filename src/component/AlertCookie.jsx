import React from 'react';
import { useState } from 'react';

function AlertCookie() {
    return (
        <div>
            <div className="alert mt-40">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
  <span>We use cookies for saving your information.</span>
  <div>
    <button className="btn btn-sm">Deny</button>
    <button className="btn btn-sm btn-primary">Accept</button>
  </div>
</div>
        </div>
    );
}

export default AlertCookie;