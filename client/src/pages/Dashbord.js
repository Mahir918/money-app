import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadTransactions, removeTransaction, updateTransaction } from '../store/actions/transactionActions'
import Create from '../components/CreateTransaction/Create'
import Update from '../components/CreateTransaction/Update'

class Dashboard extends Component {
    state = {
        createModalOpen: false,
        updateModalOpen: false,
        id: ''
    }

    openCreateModal = () => {
        this.setState({
            createModalOpen: true
        })
    }

    closeCreateModal = () => {
        this.setState({
            createModalOpen: false
        })
    }

    UpdateopenCreateModal = (id) => {
        this.setState({
            updateModalOpen: true,
            id
        })
    }

    UpdatecloseCreateModal = (id) => {
        this.setState({
            updateModalOpen: false,
            id: ''
        })
    }


    componentDidMount() {
        this.props.loadTransactions()
    }

    render() {
        let { auth, transactions } = this.props
        return (
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h1>Welcome {auth.user.name}</h1>
                    <p>Your Email Is: {auth.user.email}</p>

                    <button
                        onClick={this.openCreateModal}
                        className="btn btn-primary">
                        Create New Transaction
                    </button>

                    <Create
                        isOpen={this.state.createModalOpen}
                        close={this.closeCreateModal}
                    />
                    

                    <br />
                    <h1>Transactions :</h1>
                    <ul>
                        {
                            transactions.map(transaction => (
                                <li key={transaction._id}
                                    className="list-group-item"
                                >
                                    {
                                        this.state.id === transaction._id ?
                                        <Update 
                                        isOpen={this.state.updateModalOpen}
                                        close={this.UpdatecloseCreateModal}
                                        transaction={transaction}
                                        /> :
                                         null
                                    }

                                    <p>Type: {transaction.type}</p>
                                    <p>Amount: {transaction.amount}</p>
                                    <button
                                        onClick={() => this.props.removeTransaction(transaction._id)}
                                        className="btn btn-danger"> Remove</button>

                                    <button
                                        onClick={() => this.UpdateopenCreateModal(transaction._id)}
                                        className="btn btn-primary"> Update</button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    transactions: state.transactions
})

export default connect(mapStateToProps, { loadTransactions, removeTransaction, updateTransaction })(Dashboard)