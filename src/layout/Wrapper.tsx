import React, {FunctionComponent} from 'react'


const Wrapper = (Components: FunctionComponent, idName: string) => function HOC() {
  return (
  <div id={idName} className={`app__container ${idName !== 'header' && ''}`}>
        <Components/>
    </div>
  )
}

export default Wrapper;