import React from 'react';
import ReactDOM from 'react-dom';
import Comment from './comment';
import ApprovalCard from './approvalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui comments" style={{
      paddingTop: '10px',
      paddingLeft: '10px'
    }}>
      <ApprovalCard>
        <Comment name='Burak Alparslan'
                 timeAgo='2'
                 star='5'
                 avatar={faker.image.avatar()}
                 comment='Merhaba React' />
      </ApprovalCard>

      <ApprovalCard>
        <Comment name='Ali Alp'
                 timeAgo='3'
                 star='4'
                 avatar={faker.image.avatar()}
                 comment='Merhaba React 2' />
      </ApprovalCard>

      <ApprovalCard>
        <Comment name='Ayse Kaya'
                 timeAgo='1'
                 star='4.5'
                 avatar={faker.image.avatar()}
                 comment='Merhaba React 4' />
      </ApprovalCard>

      <ApprovalCard>
        Merhaba
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
