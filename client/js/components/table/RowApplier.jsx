import { connect } from 'react-redux';

// @see - https://griddlegriddle.github.io/Griddle/examples/getDataFromRowIntoCell/

const rowDataSelector = (state, { griddleKey }) => {
  return state
    .get('data')
    .find(rowMap => rowMap.get('griddleKey') === griddleKey);
};

export default connect((state, props) => {
  return {
    rowData: rowDataSelector(state, props),
  };
});
