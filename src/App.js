import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';

import {fetchData} from './api';

// import { Cards, Chart, CountryPicker } from './components';
import styles from './App_module.css';
class App extends React.Component {
  state = {
    data: {}, 
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  render() {
    const { data } = this.state;

    return(
      <div className="container">
        <Cards data={this.state.data}/>
        <CountryPicker />
        {/* <Chart /> */}
      </div>
    )
  }
}

export default App;