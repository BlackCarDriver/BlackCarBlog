import React from 'react';
import { connect } from 'dva';

function MyPage() {
  return (
    <h1>OK</h1>
  );
}

MyPage.propTypes = {
};

export default connect()(MyPage);
