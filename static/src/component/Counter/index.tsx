import * as React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from 'mobx'

@observer
export default class Counter extends React.Component<any, any> {
    @observable count: number = 0 ;
    constructor() {
        super();
    }

    componentWillMount() {
        let { count } = this.props;
        count ? this.count = count : "" ;
    }

    render() {
        return (
            <div>
                Count: { this.count } <br/>
                <button onClick={ this.handleInc }>+</button>
                <button onClick={ this.handleDes }>-</button>
            </div>
        )
    }
    @action handleInc = ()=>{
        this.count++;
    }
    @action handleDes = ()=>{
        this.count--;
    }
}
