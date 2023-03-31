import React, {FunctionComponent} from 'react'


const Wrapper = (Components: FunctionComponent, idName: string, componentClass?: string) => function HOC() {
  return (
  <div id={`#${idName}`} className={`app__container ${idName !== 'header' && ''} ${componentClass}`}>
        <Components/>
    </div>
  )
}

export default Wrapper;