/**
 * Created by pomy on 15/11/4.
 */
require('../css/base.less');
require('../css/partner.less');
var React = require('react');
var Footer = require('./footer');
var $ = require('jquery');

var PartnerHeader = React.createClass({
    render: function() {
        return (
            <div className="partner-header">
                <div className="w">
                    <div className="logo"></div>
                    <h3>Global Wisape Partner Plan</h3>
                    <h4>Success lies in cooperation</h4>
                    <a href="" className="btn-join">Join now</a>
                </div>
            </div>
        );
    }
});

var PartnerCooperation = React.createClass({
    render: function(){
        return (
            <div className="cooperation">
                <div className="w">
                    <h3>Win-win cooperation all over the world</h3>
                    <div className="line"></div>
                    <p>
                        Wisape Global Partner Plan committed to provide SBOs(Small businessowers) with<br/>
                        all-in-one mobile marketing solution by cooperating with global agencies,<br/>
                        resellers and marketers from webmasters tobloggers to newsletters &amp; companies selling to SMBs.
                    </p>
                </div>
            </div>
        );
    }
});

var PartnerVip = React.createClass({
    render: function(){
        return (
            <div className="vip">
                <div className="w">
                    <h3>VIP 100% commission</h3>
                    <p>
                        Yes, that's right, 100% commission. That means all of the sales revenue is yours!<br/>
                        We aim to be the top of the industry.
                    </p>
                    <h4>To get VIP Partner rights of 100% commission, you just need two simple steps:</h4>

                    <div className="step-box">
                        <div className="item">
                            <strong>Step1</strong>
                            <p>Submit your application on our website</p>
                            <a href="">Submit</a>
                        </div>
                        <div className="item">
                            <strong>Step2</strong>
                            <p>Invite over 100 users to join our Beta FREE version</p>
                        </div>
                    </div>

                    <p>
                        Complete the steps above, you will be one of Wisape VIP partners, and get VIP Partner rights of 100%<br/>
                        commission for 3 months to sale PRO version. After that, you still have rights of more<br/>
                        preferential policies which only for you (VIP partner).

                    </p>
                </div>
            </div>
        );
    }
});

var PartnerImg = React.createClass({
    render: function(){
        return (
            <div className="img-text">
                <div className="item">
                    <div className="img-box">
                        <img src="./assets/img/vip-pic1.png" />
                    </div>
                    <div className="text-box">
                        <img src="./assets/img/vip-pic1.png" />
                        <div className="info">
                            <h3>How to invite</h3>
                            <p className="p-1">An email of your exclusive download link address will be sent to you when Beta FREE version <br/>
                                being published .</p>
                            <br />
                            <p>
                                Just invite others to click your link to download and install the Wisape Beta FREE APP (Android)<br/> without extra work for you.Wisape will record every effective download and install from your link,<br/> when the number to 100, Wisape will automatcaly send you email, to congratulate you to become one of Wisape VIP partners.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="item">
                    <div className="text-box">
                        <img src="./assets/img/vip-pic2.png" />
                        <div className="info">
                            <h3>More than 100% commission</h3>
                            <p className="p-1">The sky’s the limit! Drive as much traffic as you can, you will get recurring and stable income for every your
                                customer recharge monthly.</p>
                            <br />
                            <p>
                                Finally, achieve financial freedom with Wisape is not just a dream.
                            </p>
                        </div>
                    </div>
                    <div className="img-box">
                        <img src="./assets/img/vip-pic2.png" />
                    </div>
                </div>
                <div className="item">
                    <div className="img-box">
                        <img src="./assets/img/vip-pic3.png" />
                    </div>
                    <div className="text-box">
                        <img src="./assets/img/vip-pic3.png" />
                        <div className="info">
                            <h3>More inviting way</h3>
                            <p className="p-1">In order to help you to get VIP  Partner rights easily, you can following the ways:</p>
                            <br />
                            <p>
                                1,Send your wisape exclusive download link to your friends or family, invite them to try.<br/>
                                2,Post your wisape exclusive download link on your Facebook, Twitter or Blog.<br/>
                                Let more audiences get it.<br/>
                                3,Promote your wisape exclusive download link through your personal marketing channels.

                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

var PartnerAddition = React.createClass({
    render: function(){
        return (
            <div className="addition">
                <div className="w">
                    <h3>In addition</h3>
                    <strong></strong>
                    <p>
                        If you haven't invited more than 100 users to join Beta FREE version, you still will get rights to earn <br/>more than 50% per sale of PRO version.
                    </p>
                    <p>
                        Of course, you will get recurring and stable income for every your customer recharge monthly.
                    </p>
                </div>
            </div>
        );
    }
});

var PartnerJoin = React.createClass({
    render: function(){
        return (
            <div className="join">
                <div className="w">
                    <h3>Join Beta Here for FREE</h3>
                    <div className="line"></div>
                    <p>
                        Please input your email below, we will make you being one of first users once we release the beta version.
                    </p>
                </div>
            </div>
        );
    }
});

var Partner = React.createClass({
    render: function(){
        return (
            <div className="Partner">
                <PartnerHeader />
                <PartnerCooperation />
                <PartnerVip />
                <PartnerImg />
                <PartnerAddition />
                <PartnerJoin />
                <Footer />
            </div>
        );
    }
});

React.render(<Partner />, document.body);






