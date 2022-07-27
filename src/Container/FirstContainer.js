import Home from '../Components/Home';
import { connect } from 'react-redux';
import {addTocart,removeTocart} from '../Services/Action/Action'

let mapState = state =>({
    dataOfcard:state.cardData
    // dataOfcard:state.cardData.Data
    // dataOfcard:state
})

let mapDispatch = dispatch => ({
    addTocartDatas:data=>dispatch(addTocart(data)),
    removeTocartDatas:data=>dispatch(removeTocart(data))
})
// export default Home;

export default connect(mapState,mapDispatch)(Home);
