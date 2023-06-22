import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function Loading() {
    // return <p>'Loading...'</p>
    // Loading skeleton components
    return(
        <>
        <Skeleton /> 
        <Skeleton count={5} /> 
        </>
    )
}