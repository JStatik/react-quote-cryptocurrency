import Error from '../components/Error';
import Loading from '../components/Loading';
import Quotation from '../components/Quotation';

const showLoadingOrData = ( quotation, loading, error ) => {
    if( loading ) {
        return <Loading />
    } else {
        if( error ) {
            return <Error error="No se pudo obtener la cotización, intente nuevamente." height="250px" />
        } else {
            return <Quotation quotation={ quotation }/>
        }
    }
};

export default showLoadingOrData;
