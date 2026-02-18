import { useParams } from "react-router-dom"

export const ProductPreview = () =>{
    const params = useParams()
    console.log(params)
    return(
        <div>
            Product Preview Page : {params.id}
        </div>
    )
}