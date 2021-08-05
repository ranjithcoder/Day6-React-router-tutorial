import { useParams } from "react-router-dom";


export const Post = () => {

    const {id} = useParams();

    return (
        <h1>
            post id is {id}
        </h1>
    );
}
