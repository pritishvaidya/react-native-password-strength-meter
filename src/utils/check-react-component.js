function isClassComponent(component) {
  return !!((
    typeof component === 'function'
    && !!component.prototype.isReactComponent
  ));
}

function isFunctionComponent(component) {
  return !!((
    typeof component === 'function'
    && String(component).includes('return React.createElement')
  ));
}

function isReactComponent(component) {
  return !!((
    isClassComponent(component)
    || isFunctionComponent(component)
  ));
}

export default isReactComponent;
