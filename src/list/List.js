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
            data: arr,
            activeState: 'all'
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
        
        this.setState({
            activeState: selectedItem
        })
    }

    handleDelete = () => {
        console.log("Deleted");
    }

    render() {
        const {
            data,
            activeState
        } = this.state;

        const newLst = data.filter((item) => {
            return ((activeState==='available')?item.isActive:((activeState==='unavailable')?!item.isActive:true));
        });

        return  <Tools onAction={this.onListChange}>
                    <div className='app-list'>
                        {
                            newLst.map(function (lst, i) {
                                return <ListItem key={i} title={lst.title} desc={lst.description} active={lst.isActive} onDelete={this.handleDelete} />;
                            })
                        }
                    </div>
                </Tools>;
    }
}

export default List;
