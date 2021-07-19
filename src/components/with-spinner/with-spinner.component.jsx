// OVerlay ensures spinner is centered.
import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles.jsx';

/* const WithSpinner = (WrappedComponent) => ({ isLoading, ...otherProps}) => {
    return isLoading ? (
        <SpinnerOverlay>
            <SpinnerContainer />
        </SpinnerOverlay>
    ) : (
        <WrappedComponent { ...otherProps } />
    )
} */


// More explicit
const WithSpinner = (WrappedComponent)  => {
    const Spinner  = ({isLoading, ...otherProps}) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        ); 
    }
    return Spinner;
}

export default WithSpinner;