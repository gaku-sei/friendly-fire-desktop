/// <reference path="../../typings/tsd.d.ts" />
/// <reference path="../typings/router5.d.ts" />

import * as React from 'react';
import {Link} from 'app/router';

interface HelloProps {
  name: String
}

class Hello extends React.Component<HelloProps, void> {
  render(): JSX.Element {
    return <div>Hello {this.props.name}</div>;
  }
}

React.render((
  <div>
    <Hello name="World" />
    <Link routeName="home">Home</Link>
    <Link routeName="test">Test</Link>
  </div>
), document.getElementById('main'));
