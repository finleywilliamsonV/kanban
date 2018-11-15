import * as React from 'react';

export interface IHelloProps { compiler: string; framework: string; };

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<IHelloProps, {}> {
  render() {
    return <h1>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
  }
}

// SCF design
// export const Hello = (props: HelloProps) => <h1>Hello from {props.compiler} and {props.framework}!</h1>;
