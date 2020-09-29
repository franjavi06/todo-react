import React, {useState} from 'react';

const InputContainer = props => {

    const [enteredThing, setEnteredThing] = useState('');

    const handleChange = (e) => {
        setEnteredThing(e.target.value)
    }

    const handleClick = () => {
        props.onAddThing(enteredThing)
        setEnteredThing('')
    }

    return (
        <div className="row">
          <div className="col-sm-10">
            <input type="text" className="form-control" id="inputPassword2" value={enteredThing} onChange={handleChange} placeholder="Thing to do"/>
          </div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn-primary mb-2" onClick={handleClick}>Add to list</button>
          </div>          
        </div>
    )
}

export default InputContainer;