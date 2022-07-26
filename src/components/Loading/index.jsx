import ReactLoading from 'react-loading';
import { Overlay } from "./style";
const Loading = () => (
    <Overlay>
        <ReactLoading type="balls" color="#ffd556" height={100} width={100} />
    </Overlay>
)

export default Loading;