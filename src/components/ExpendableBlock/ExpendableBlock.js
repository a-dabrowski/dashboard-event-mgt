import React from 'react';
import styled from 'styled-components';

const ExpendableTitle = styled.h5`
  font-size: 18px;
  font-weight: 800;
`;

const ExpendableContent = styled.div`
  transition: all .5s ease-in-out;
  max-height: ${props => props.isActive ? '150px' : '0'};
  overflow: hidden;
`;

class ExpendableBlock extends React.Component {
state = {
  isActive: false
}
toggleActive() {
  this.setState({isActive: !this.state.isActive});
}
  render() {
  const { expandFunc, title, children } = this.props;
  return (
    <div onClick={this.toggleActive.bind(this)}>
      <ExpendableTitle>
        { title }
      </ExpendableTitle>
      <ExpendableContent isActive={this.state.isActive}>
        { children }
      </ExpendableContent>
    </div>
  );
  }
};

export default ExpendableBlock;
