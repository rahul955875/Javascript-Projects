class ErrorBoundry extends React.Component {
  state = { hasError: false };
  getDerivedStateFromError(){
return {hasError:true}
  }
  render() {

  }
}
