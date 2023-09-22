import { DotSpinner } from "@uiball/loaders";
import './loaing.css'

const Loading = () => {
    return (
        <section className='loading__contenedor'>
            <DotSpinner size={40} speed={0.9} color='red' />
        </section>
    );
};

export default Loading;
