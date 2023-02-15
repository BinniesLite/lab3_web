import React, {FunctionComponent} from 'react'


const Wrapper = (Components: FunctionComponent, idName: string) => function HOC() {
  return (
    <div id={idName} className="app__container app__margin">
        <Components/>
    </div>
  )
}

export default Wrapper;