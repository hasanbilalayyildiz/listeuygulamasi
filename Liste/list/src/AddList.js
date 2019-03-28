import React,{Component} from 'react';

class AddList extends Component {
    state={
        content :''

    }
handleChange = (e) =>{
    this.setState ({content :e.target.value
    })}
handleSubmit = (e)=>{

        e.preventDefault();
        this.props.addList(this.state);
        this.setState({
            content: ''
        })
    }
    render () {

        return (
        <div>

            <form onSubmit={this.handleSubmit}> <label>Listeye eleman ekleyin. Çıkarmak için üstüne dokunun. </label>  
            <input type="text" onChange ={this.handleChange} value={this.state.content}>
            </input>
              </form>
        </div> 
        )
    }
}
export default AddList