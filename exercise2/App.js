import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };

  } 
  
    addSomeCarrots = () => {
      this.setState({ items: [...this.state.items, {id:5, value: "Carrots", qty: 5}] });
  }

    addSomeSoda = () => {
      this.setState({ items: [...this.state.items, {id:5, value: "Soda", qty: 2}] });  
  }

    addSomeCandy = () => {
      this.setState({ items: [...this.state.items, {id:5, value: "Candy", qty: 10}] });  
  }

    addSomeOranges = () => {
      this.setState({ items: [...this.state.items, {id:5, value: "Oranges", qty: 7}] });  
  }

    addSomePotatoes = () => {
      this.setState({ items: [...this.state.items, {id:5, value: "Potatoes", qty: 4}] });  
  }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ () => this.addSomeCarrots('foobar') }>Some carrots?</button>
      <button onClick={ () => this.addSomeSoda('foobar') }>Some soda?</button>
      <button onClick={ () => this.addSomeCandy('foobar') }>Some candy?</button>
      <button onClick={ () => this.addSomeOranges('foobar') }>Some oranges?</button>
      <button onClick={ () => this.addSomePotatoes('foobar') }>Some potatoes?</button>
    </div>
    }
  }

export default App;
