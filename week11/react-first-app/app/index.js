
import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {

  render(){
    return (
      <div>
        <HelloUser name="Edgy" />
        <HelloUser name="Theo" />
        <HelloUser name="Alice" />
        <hr />
        <FavouriteNumber favNum="42"/>
        <FavouriteNumber favNum="22"/>
        <FavouriteNumber favNum="1"/>
      </div>
    )
  }

} // HelloWorld

class FavouriteNumber extends React.Component {

  render(){
    return (
      <p>A favourite number is: { this.props.favNum }</p>
    )
  }

}

class HelloUser extends React.Component {

  render(){
    return (
      <div> Hello {this.props.name} </div>
    );
  }

} // HelloUser
//
// ReactDOM.render(
//   <HelloWorld />,
//   document.getElementById("app")
// );


class MovieList extends React.Component {
  render(){
    return (
      <div>
        <h3>Movies:</h3>
        <hr />
        <ShowMovie title="Satantango" stars="666" />
        <ShowMovie title="The Life Aquatic" stars="500" />
        <ShowMovie title="Grand Budapest" stars="400" />
        <ShowMovie title="Alien" stars="700" />
      </div>
    );
  }
}

class ShowMovie extends React.Component {
  render(){
    return (
      <div>
        <h4>Movie name: { this.props.title }</h4>
        <h4>Stars: { this.props.stars }</h4>
        <hr />
      </div>
    );
  }
}

// ReactDOM.render(
//   <MovieList />,
//   document.getElementById("app")
// );



class NewsFeed extends React.Component {

  constructor(){
    super();
    console.log('NewsFeed constructor running.');
    this.state = {
      completedLoading: false
    };
  }

  componentWillMount(){
    // compontent is going to mount,
    // so perform AJAX requests, etc

    console.log('NewsFeed ComponentWillMount running.');
    console.log('Current state:', this.state);
    window.setTimeout( () => {
      // load AJAX data
      this.setState({
        completedLoading: true
      });
      console.log('Fake AJAX callback', this.state);
    }, 3000 );

  }

  shouldComponentUpdate(nextProps, nextState){
    // if this method is defined, it will be called after any change to this.props or this.state,
    // and React will use its return value (truthiness) to decide whether or not to call the render() method
    console.log('shouldComponentUpdate:', nextProps, nextState);
    return nextState.completedLoading;
  }

  componentDidMount(){
    // trigger DOM-related actions once the component is loaded in to the DOM
    console.log('NewsFeed componentDidMount triggered.');
  }

  render(){
    console.log('%cDoing render...', 'color: red');
    if( this.state.completedLoading ){
      return (
        <div>
          <h1>News Feed</h1>
          <NewsItem title="Tragedy" />
          <NewsItem title="Cute puppies" recent={true}/>
        </div>
      );
    } else {
      return (
        <div>
          <h1>News Feed</h1>
          <em>Loading...</em><br />
          <img src="http://fillmurray.com/200/200" />
        </div>
      );
    }

  } // render
} // NewsFeed


class NewsItem extends React.Component {

  constructor(){
    super();
    console.log('NewsItem constructor running.');
  }

  componentWillMount(){
    console.log('NewsItem componentWillMount running.');
  }

  render(){
    return (
      <p>
        News Item: { this.props.title }
        { this.props.recent ? " (Recent)" : "" }
      </p>
    );
  }
}

NewsItem.propTypes = {
  // the title prop is required - causes an error in the console if missing
  title: React.PropTypes.string.isRequired
};

NewsItem.defaultProps = {
  // set a default value for this prop
  recent: false
}

//  ReactDOM.render(
//   <NewsFeed />,
//   document.getElementById("app")
// );


// Everything above here is just examples we moved through
//
// ====================================================
//
// To-Do List code follows



/*

// Here's the TodoList with the form and all its handlers crammed into it,
// before we refactored and moved most of the add form into TodoListAdd

class TodoList extends React.Component {
  constructor(){
    super();
    this.state = {
      text: '',  // for storing the current value of the text input field
      tasks: [
        { task: 'Wash the cat',    completed: false },
        { task: 'Eat the rug',     completed: true  },
        { task: 'Polish the lawn', completed: true  }
      ]
    }
  }

  // this method is called by our button because of its "onClick={this.onAddClick.bind(this)}" attrib
  onAddClick(e) {
    console.log('clicked!');
    this.setState({
      // new value of 'tasks' array is the old value, with the new task added (via .concat) to the end
      tasks: this.state.tasks.concat({
        task: this.state.text,
        completed: false
       })
    });
  }

  // this method is called after any change to our input text field, because of
  // its "onChange={this.onInputChange.bind(this)}" attrib
  onInputChange(e) {
    this.setState({
      text: e.target.value  // set 'text' property of state to be the current contents of the input field
    });
  }


  render() {
    return (
      <div>
        <h2>Here are all my todos</h2>
        <hr />
        {
          // See refactored TodoList component below for an explanation of this
          this.state.tasks.map( item => (
            <TodoListItem task={item.task} completed={item.completed} />
          ))
        }
        <hr />
        <div className="container">
        {
          // Why do we do "value={this.state.text}" for this input?
          // So when we want to clear it in our onAddClick method above, we can just do
          // this.setState({ text: ''}) and the input will automatically update to reflect this.
          // You're not supposed to do random DOM access in React, everything should happen via updating state...
        }
         <input type="text" value={this.state.text} onChange={this.onInputChange.bind(this)} />
         <button onClick={this.onAddClick.bind(this)}>Add</button>
        </div>
      </div>
    );
  }

}

 ******************* end of bulkier but more understandable TodoList component **************************/



// Refactored! Add form moved to TodoListAdd, but we need to pass a handler to TodoListAdd as a prop
// so it knows how to ask this component (TodoList) to add a new task
class TodoList extends React.Component {

  constructor(){
    super();
    this.state = {
      tasks: [
        { task: 'Wash the cat', completed: false   },
        { task: 'Eat the rug', completed: true     },
        { task: 'Polish the lawn', completed: true }
      ]
    };
  }

  //
  addTask( title ){
    this.setState({
      tasks: this.state.tasks.concat({
        task: title,
        completed: false
      }),
    });
  }

  render(){

    // Your grandpa's way of rendering from an array:
    //
    // let taskList = [];
    // for (let i = 0; i < this.state.tasks.length; i++) {
    //   let t = this.state.tasks[i];
    //   taskList.push((
    //     <li key={i}>{ t.task }</li>
    //   ));
    // }

    return (
      <div>
        <h2>Here is your Todo List</h2>
        <hr />
        <ul>
          {
            // Here comes the React/ES6/2017 way:
            // Run .map over the array of tasks in this.state, which will return an array of
            // the <TodoListItem> JSX elements; this array will automatically
            // be rendered as if it were a hand-written series of lines of JSX tags
            this.state.tasks.map( item => (
              <TodoListItem task={item.task} completed={item.completed}/>
            ))
          }
        </ul>
        <hr />
        {
          // We ask the TodoListAdd component to render here, and we pass
          // it the "addTask" method defined above as a prop, so it knows exactly how to
          // ask this parent component (TodoList) to create a new task; so, inside
          // TodoListAdd this method will be called "this.props.addItemHandler"
        }
        <TodoListAdd addItemHandler={ this.addTask.bind(this) } />
      </div>
    );
  }

} // TodoList

class TodoListAdd extends React.Component {

  constructor(){
    super();
    // it's THIS component's responsibility now to keep track of the contents
    // of the text input field
    this.state = {
      text: ''
    };
  }

  onInputChange(e){
    // change 'text' state to be contents of input text field as each letter is typed
    this.setState({ text: e.target.value });
  }

  onAddClick(){
    // The confusing magic: call the method passed in to us from TodoList (in TodoList it's called addTask
    // but it's been passed to us as a prop called addItemHandler;
    // if we call it, giving as an argument the contents of the text input field which we stored
    // in our state, TodoList will add a new task to its own this.state.tasks array via this.setState(),
    // .... which will trigger a re-render of the DOM, causing the new todo task to appear on the page!
    //
    // IT'S THAT SIMPLE AHAHAHAHAHAHAHAHAHAHHAHHAAAAAAAAAAAAAAAA%$%^$

    this.props.addItemHandler( this.state.text );
  }

  render(){
    return (
      <div className="container">
        {
          // You DO NOT want to know why we have to do a god damned ".bind(this)" for
          // every one of these event handlers
        }
        <input type="text" onChange={this.onInputChange.bind(this)} value={this.state.text} />
        <button onClick={ this.onAddClick.bind(this) }>Add Item</button>
      </div>
    );
  }

}


class TodoListItem extends React.Component {

  render(){

    if( this.props.completed ){
      return (
        <li>{ this.props.task } - DONE!</li>
      );
    } else {
      return (
        <li>{ this.props.task }</li>
      );
    }

    /*
      // Shorter version: use a '&&' to avoid the if/else blocks,
      // i.e. "- DONE!" will be returned from this expression if this.props.completed is true:

    return (
      <li>{ this.props.task }{ this.props.completed && "- DONE!" }</li>
    );

    */
  }
}

ReactDOM.render(
  <TodoList />,
  document.getElementById("app")
);
