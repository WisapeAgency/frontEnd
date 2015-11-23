/**
 * Created by pomy on 15/11/4.
 */
require('../css/base.less');
require('../css/index.less');
var React = require('react');
var Footer = require('./footer');
var config = require('../../config');

var IndexHeader = React.createClass({
    render: function() {
        return (
            <div className="index-header">
                <div className="w">
                    <div className="info">
                        <a href="#" className="logo"></a>
                        <h3>Create and Share</h3>
                        <p>your stunning business story worldwide</p>
                        <div className="download">
                            <a href={config.downloadUrl.google} style={{"display":"none"}} className="btn-google">google play</a>
                            <a href={config.downloadUrl.apk}   className="btn-apk">apk</a>
                        </div>
                        <a  href={config.webroot + "/partner.html"} className="join">Join Global Parterners Plan</a>
                    </div>
                    <div className="phone"></div>
                </div>
            </div>
        );
    }
});

var IndexFeature = React.createClass({
    render: function(){
        return (
            <div className="feature">
                <div className="w">
                    <div className="item fore1">
                        <strong></strong>
                        <h3>Easy and Fast</h3>
                        <p>
                            With Wisape story APP anywhere anytime, just 5 minutes to create your stunning
                            business story. Click, choose, drag,
                            no technical skills required.
                        </p>
                    </div>
                    <div className="item fore2">
                        <strong></strong>
                        <h3>Inspire your creativity
                        </h3>
                        <p>
                            Wisape offers various templates as your options. Based on scene, select the
                            appropriate template and replaces them with your own content, it's done
                        </p>
                    </div>
                    <div className="item fore3">
                        <strong></strong>
                        <h3>Reach and Engage
                        </h3>
                        <p>
                            Spread your story on Facebook, Twitter, Instagram, LINE, and more channels. People even can scan your Wisape QR code wherever you want them to see!
                        </p>
                    </div>
                </div>
            </div>
        );
    }
});

var Variety = React.createClass({
    render: function(){
        return (
            <div className="variety">
                <div className="w">
                    <h3>Applicable to a variety of scenarios</h3>
                    <div className="cnt">
                        <div className="item">
                            <s className="ico-1"></s>
                            <p>Businuss Display</p>
                        </div>
                        <div className="item">
                            <s className="ico-2"></s>
                            <p>Create Post</p>
                        </div>
                        <div className="item">
                            <s className="ico-3"></s>
                            <p>Brand promotion</p>
                        </div>
                        <div className="item">
                            <s className="ico-4"></s>
                            <p>product promotion
                            </p>
                        </div>
                        <div className="item">
                            <s className="ico-5"></s>
                            <p>Customer Interaction</p>
                        </div>
                        <div className="item">
                            <s className="ico-6"></s>
                            <p>Activities invitation
                            </p>
                        </div>
                        <div className="item">
                            <s className="ico-7"></s>
                            <p>Festival Greetings
                            </p>
                        </div>
                        <div className="item">
                            <s className="ico-8"></s>
                            <p>Various channels promotion
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var Index = React.createClass({
    render: function(){
        return (
            <div className="Index">
                <IndexHeader />
                <IndexFeature />
                <Variety />
                <Footer />
            </div>
        );
    }
})



React.render(<Index />, document.body);






