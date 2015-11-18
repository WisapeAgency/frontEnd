/**
 * Created by pomy on 15/11/4.
 */
require('../css/base.less');
var React = require('react');
var config = require('../../config');

var Footer = React.createClass({
    render: function(){
        return (
            <div className="footer">
                <div className="w">
                    <ul  className="my-links">
                        <li><a href={'mailto:' + config.shareUrl.email} className="my-links-1"></a></li>
                        <li><a href={config.shareUrl.facebook} target="_blank"   className="my-links-2"></a></li>
                        <li><a href={config.shareUrl.twiter} target="_blank"   className="my-links-3"></a></li>
                        <li><a href={config.shareUrl.google} target="_blank"  className="my-links-4"></a></li>
                    </ul>
                    <ul className="links">
                        <li>
                            <a href={config.webroot + "/privacy.html?tabs=0"} target="_blank">Terms of Service</a>
                        </li>
                        <li>
                            <a href={config.webroot + "/privacy.html?tabs=1"} target="_blank">Privacy of Policy</a>
                        </li>
                        <li>
                            <a href={config.webroot + "/privacy.html?tabs=2"} target="_blank">Content Speacification</a>
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







