import React, { Component } from 'react';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Breadcrumbs from 'react-breadcrumbs';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumbs
              wrapperElement="ol"
              wrapperClass="breadcrumb"
              itemClass="breadcrumb-item"
              separator=""
              routes={this.props.routes}
              params={this.props.params}
            />
            <div className="container-fluid">
              {this.props.children}
            </div>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
