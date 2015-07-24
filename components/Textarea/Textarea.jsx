const React = require('react');

const filterProps = require('../filterProps');

const PropTypes = React.PropTypes;

const styles = require('./Textarea.less');

const PASS_PROPS = {
  disabled: true,
  rows: true,
  value: true,

  onChange: true,
};

const Textarea = React.createClass({
  propTypes: {
    disabled: PropTypes.bool,

    /**
     * Количество строк
     */
    rows: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    value: PropTypes.string,

    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),

    onChange: PropTypes.func,
  },

  getDefaultProps() {
    return {
      rows: '3',
    };
  },

  render() {
    const props = filterProps(this.props, PASS_PROPS);
    props.className = styles.root;
    props.style = {};

    if (this.props.width) {
      props.style.width = this.props.width;
    }

    return (
      <textarea {...props} />
    );
  },
});

module.exports = Textarea;