import React, { Component, useState } from 'react'
// import Page  from './page/Page'
// import Page  from './page/hooks/useReducer'
// import Page  from './page/hooks/useCallback'
// import Page  from './page/hooks/useMemo'
import Page  from './page/hooks/useRefDemo'


export default  ()=> {
  const [text, setText] = useState(0)
  return (
    <div>
      <Page/>
    </div>
  )
}

