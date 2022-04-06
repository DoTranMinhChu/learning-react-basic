import React from "react";
import { connect } from "react-redux";
import { toast } from "react-toastify";
class CreateUserRedux extends React.Component {
    state = {
        name: "",

    };

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    handleAdd = (event) => {
        event.preventDefault();
        console.log(">> Check props : ", this.props);
        if (!this.state.name) {
            toast.error(`Missing name's user!`);
            return;
        }
        let newId = "user" + this.getRandomInt(0, 1000);
        let newName = this.state.name;
        this.props.CreateUserRedux({
            id: newId,
            name: newName
        })
        this.setState({
            name: "",
        });
        toast.success(`Successful create new user!`);

    };
    handleChangeNewName = (event) => {
        this.setState({
            name: event.target.value,
        });
    };
    render() {
        return (
            <>
                <div className="add-todo">
                    <input
                        type="text"
                        value={this.state.name}
                        onChange={(event) => {
                            this.handleChangeNewName(event);
                        }}
                    />
                    <button
                        className="btn"
                        onClick={(event) => {
                            this.handleAdd(event);
                        }}
                    >
                        Create
                    </button>
                </div>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        CreateUserRedux: (newUser) => dispatch({ type: 'CREATE_USER', payload: newUser })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateUserRedux)