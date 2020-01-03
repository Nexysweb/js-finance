import React from 'react';

import IsPrime from './is-prime';
import Compute from './compute';

export default props => {
  return <div className="row">
    <div className="col-md-6">
    <IsPrime/>
    </div>

    <div className="col-md-6">
    <Compute/>
    </div>

    <p><small>Note: the computation is carried out by your browser, no information is send to a server. Be careful when inputting large numbers as this may crash your browser!</small></p>
  </div>
}