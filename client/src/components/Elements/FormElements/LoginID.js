import React from 'react';
import {withRouter} from 'react-router-dom'
import TextField from '@material-ui/core/TextField';


class OutlinedTextFields extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleChange(event) {
        this.setState({value: event.target.value});
      }

    handleSubmit(event) {
        event.preventDefault();
        
        let  isnum = /^\d+$/.test(this.state.value);

        console.log(event.target.value, isnum, this.state.value)

        if(isnum){
            this.props.history.push("/"+this.state.value)
        }
    }


  render() {
    console.log(this.props)
    return (
      <form className="" noValidate autoComplete="off" onSubmit={this.handleSubmit}>
        
        <TextField
            id="outlined-full-width"
            value={this.state.value}
            onChange={this.handleChange}
            label="ID"
            placeholder="Your ID"
            helperText="Helper Text!"
            fullWidth
            margin="normal"
            variant="outlined"
            InputLabelProps={{
                shrink: true,
            }}
        />

      </form>
    );
  }
}
export default withRouter(OutlinedTextFields)
