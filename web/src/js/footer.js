/**
 * Created by pomy on 15/11/4.
 */
require('../css/base.less');
var React = require('react');
var $ = require('jquery');
var config = require('../../config');
console.info(config.webroot);

var Footer = React.createClass({
    render: function(){
        //var linksData = ['Terms of Service','Privacy Policy','Content Specification'];
        //var links = linksData.map(function (item,v) {
        //    var selected = this.state.selected;
        //    return <a href="javascript:void(0)" data-order={v} className={(v === this.state.selected) ? 'selected' : ""} onClick={this.handleOnClick}>{item}</a>;
        //}, this);
        return (
            <div className="footer">
                <div className="w">
                    <ul  className="my-links">
                        <li><a href=""  className="my-links-1"></a></li>
                        <li><a href=""  className="my-links-2"></a></li>
                        <li><a href=""  className="my-links-3"></a></li>
                        <li><a href=""  className="my-links-4"></a></li>
                    </ul>
                    <ul className="links">
                        <li>
                            <a href={config.webroot + "/privacy.html?tabs=0"}>Terms of Service</a>
                        </li>
                        <li>
                            <a href={config.webroot + "/privacy.html?tabs=1"}>Privacy of Policy</a>
                        </li>
                        <li>
                            <a href={config.webroot + "/privacy.html?tabs=2"}>Content Speacification</a>
                        </li>
                    </ul>
                    <div className="cp">
                        <s></s>
                        <p>@2015 Wisape all rights reserved</p>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Footer;







