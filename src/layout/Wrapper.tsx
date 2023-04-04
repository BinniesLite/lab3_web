import React, { FunctionComponent, ReactNode } from 'react'

interface WrapperProps {
  data?: any;
  isLoading?: boolean;
}

// Define a type parameter T for the component that the Wrapper will wrap
const Wrapper = <T extends WrapperProps>(Component: FunctionComponent<T>, idName: string, componentClass?: string) => {
  return function HOC(props: T) {
    return (
      <div id={`${idName}`} className={`app__container ${idName !== 'header' && ''} ${componentClass}`}>
        <Component {...props} />
      </div>
    )
  }
}

export default Wrapper;