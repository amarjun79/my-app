import React from 'react';
import ListItem from './ListItem'
import Tools from '../Components/Tools'
import './List.css';
import * as data from '../data/products.json'

let arr=[];

/* <ListItem title={obj.title} desc={obj.description} active={obj.isActive} />
<ListItem title={title} desc={description} active={isActive} />
<ListItem title="Red Gear" desc="Computer accessories" active={true} /> */



class List extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            data: arr
        };
    }

    componentDidMount() {
       arr=data.default;
       this.setState({
        data: arr
       });
    }

    onListChange = (e) => {
        const selectedItem=e.target.value;
        const newLst = arr.filter((item) => {
            return ((selectedItem==='available')?item.isActive:((selectedItem==='unavailable')?!item.isActive:true));
        });
        this.setState({
            data: newLst
        });
    }

    render() {
        return  <Tools onAction={this.onListChange}>
                    <div className='app-list'>
                        {
                            this.state.data.map(function (lst, i) {
                                return <ListItem title={lst.title} desc={lst.description} active={lst.isActive} key={i} />;
                            })
                        }
                    </div>
                </Tools>;
    }
}

export default List;
