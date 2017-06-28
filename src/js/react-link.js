/**
 * Created by esaron on 6/12/16.
 */

const React = require('react');
const PropTypes = React.PropTypes;
const ReactBootstrap = require('react-bootstrap');
const OverlayTrigger = ReactBootstrap.OverlayTrigger;
const Tooltip = ReactBootstrap.Tooltip;

var Link = React.createClass({
    propTypes: {
        id: PropTypes.string.isRequired,
        label: PropTypes.string,
        showLabel: PropTypes.bool,
        href: PropTypes.string,
        className: PropTypes.string,
        tooltip: PropTypes.string
    },

    getDefaultProps: function() {
        return {
            label: "",
            showLabel: false
        };
    },

    getInitialState: function() {
        var t = this;
        var onClick = t.props.onClick;
        if (!onClick) {
            onClick = function(e) {
                location.href=t.props.href;
            }
        }
        return {
            onClick: onClick
        };
    },

    render: function() {
        var label;
        if (this.props.showLabel) {
            label = <a className="linkLabel">{this.props.label}</a>;
        }
        var link = (
            <div className={"linkWrapper"} onClick={this.state.onClick}>
                <div id={this.props.id} className={this.props.className}></div>
                {label}
            </div>
        );
        if (!!this.props.tooltip) {
            let tooltip = <Tooltip id={this.props.id + "Tooltip"}>{this.props.tooltip}</Tooltip>;
            link = (
                <OverlayTrigger overlay={tooltip} placement="top" delayShow="300" delayHide="150">
                    {link}
                </OverlayTrigger>
            );
        }
        return link;
    }
});

module.exports = Link;
