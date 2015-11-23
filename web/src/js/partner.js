/**
 * Created by pomy on 15/11/4.
 */
require('../css/base.less');
require('../css/partner.less');
var React = require('react');
var Footer = require('./footer');
var config = require('../../config');
var $ = require('jquery');

var PartnerHeader = React.createClass({
    render: function() {
        return (
            <div className="partner-header">
                <div className="w">
                    <a href={config.webroot} className="logo"></a>
                    <h3>Global Wisape Partner Plan</h3>
                    <h4>Success lies in cooperation</h4>
                    <a href="#join" className="btn-join">Join now</a>
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
    getInitialState: function() {
        return {tip: []}
    },
    handleClickSubmit: function () {
        this.setState({tip: <Tips tipType="errow" clickCallback={this.handleClickCloseCb} tipTitle="Sorry!" tipCnt="Submission failed, please try again." />});
    },
    handleClickCloseCb: function(){
        this.setState({tip: []});
    },
    render: function(){
        var tip = this.state.tip;
        return (
            <div className="join" id="join" ref="join">
                <div className="w">
                    <h3>Join Beta Here for FREE</h3>
                    <div className="line"></div>
                    <p>
                        Please input your email below, we will make you being one of first users once we release the beta version.
                    </p>

                    <div className="form-box">
                        <form action="">
                            <div className="form-box-l">
                                <div className="dt">Required</div>
                                <div className="dd">
                                    <ul>
                                        <li className="fore1">
                                            <div className="ipt f-fl"><s className="ico-people"></s><input type="text" placeholder="Firsrt Name" name="first-name"/></div>
                                             <div className="ipt f-fr"><s classNameico-people></s><input type="text" placeholder="Last Name" name="last-name"/></div>
                                        </li>
                                        <li>
                                            <div className="ipt"><s className="ico-company"></s><input type="text" name="company" placeholder="Company Name"/></div>
                                        </li>
                                        <li>
                                            <div className="select-box">
                                                <s className="ico-earth"></s>
                                                <select name="country" id="Request_country"><option value="">Please Select A Country</option><option value="Afghanistan">Afghanistan</option><option value="Albania">Albania</option><option value="Algeria">Algeria</option><option value="American Samoa">American Samoa</option><option value="Andorra">Andorra</option><option value="Angola">Angola</option><option value="Anguilla">Anguilla</option><option value="Antarctica">Antarctica</option><option value="Antigua and Barbuda">Antigua and Barbuda</option><option value="Argentina">Argentina</option><option value="Armenia">Armenia</option><option value="Aruba">Aruba</option><option value="Australia">Australia</option><option value="Austria">Austria</option><option value="Azerbaijan">Azerbaijan</option><option value="Bahamas">Bahamas</option><option value="Bahrain">Bahrain</option><option value="Bangladesh">Bangladesh</option><option value="Barbados">Barbados</option><option value="Belarus">Belarus</option><option value="Belgium">Belgium</option><option value="Belize">Belize</option><option value="Benin">Benin</option><option value="Bermuda">Bermuda</option><option value="Bhutan">Bhutan</option><option value="Bolivia">Bolivia</option><option value="Bosnia and Herzegowina">Bosnia and Herzegowina</option><option value="Botswana">Botswana</option><option value="Bouvet Island">Bouvet Island</option><option value="Brazil">Brazil</option><option value="British Indian Ocean Territory">British Indian Ocean Territory</option><option value="Brunei Darussalam">Brunei Darussalam</option><option value="Bulgaria">Bulgaria</option><option value="Burkina Faso">Burkina Faso</option><option value="Burundi">Burundi</option><option value="Cambodia">Cambodia</option><option value="Cameroon">Cameroon</option><option value="Canada">Canada</option><option value="Cape Verde">Cape Verde</option><option value="Cayman Islands">Cayman Islands</option><option value="Central African Republic">Central African Republic</option><option value="Chad">Chad</option><option value="Chile">Chile</option><option value="China">China</option><option value="Christmas Island">Christmas Island</option><option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option><option value="Colombia">Colombia</option><option value="Comoros">Comoros</option><option value="Congo">Congo</option><option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option><option value="Cook Islands">Cook Islands</option><option value="Costa Rica">Costa Rica</option><option value="Cote d'Ivoire">Cote d'Ivoire</option><option value="Croatia (Hrvatska)">Croatia (Hrvatska)</option><option value="Cuba">Cuba</option><option value="Cyprus">Cyprus</option><option value="Czech Republic">Czech Republic</option><option value="Denmark">Denmark</option><option value="Djibouti">Djibouti</option><option value="Dominica">Dominica</option><option value="Dominican Republic">Dominican Republic</option><option value="East Timor">East Timor</option><option value="Ecuador">Ecuador</option><option value="Egypt">Egypt</option><option value="El Salvador">El Salvador</option><option value="Equatorial Guinea">Equatorial Guinea</option><option value="Eritrea">Eritrea</option><option value="Estonia">Estonia</option><option value="Ethiopia">Ethiopia</option><option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option><option value="Faroe Islands">Faroe Islands</option><option value="Fiji">Fiji</option><option value="Finland">Finland</option><option value="France">France</option><option value="France, Metropolitan">France, Metropolitan</option><option value="French Guiana">French Guiana</option><option value="French Polynesia">French Polynesia</option><option value="French Southern Territories">French Southern Territories</option><option value="Gabon">Gabon</option><option value="Gambia">Gambia</option><option value="Georgia">Georgia</option><option value="Germany">Germany</option><option value="Ghana">Ghana</option><option value="Gibraltar">Gibraltar</option><option value="Greece">Greece</option><option value="Greenland">Greenland</option><option value="Grenada">Grenada</option><option value="Guadeloupe">Guadeloupe</option><option value="Guam">Guam</option><option value="Guatemala">Guatemala</option><option value="Guinea">Guinea</option><option value="Guinea-Bissau">Guinea-Bissau</option><option value="Guyana">Guyana</option><option value="Haiti">Haiti</option><option value="Heard and Mc Donald Islands">Heard and Mc Donald Islands</option><option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option><option value="Honduras">Honduras</option><option value="Hong Kong">Hong Kong</option><option value="Hungary">Hungary</option><option value="Iceland">Iceland</option><option value="India">India</option><option value="Indonesia">Indonesia</option><option value="Iran (Islamic Republic of)">Iran (Islamic Republic of)</option><option value="Iraq">Iraq</option><option value="Ireland">Ireland</option><option value="Israel">Israel</option><option value="Italy">Italy</option><option value="Jamaica">Jamaica</option><option value="Japan">Japan</option><option value="Jordan">Jordan</option><option value="Kazakhstan">Kazakhstan</option><option value="Kenya">Kenya</option><option value="Kiribati">Kiribati</option><option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option><option value="Korea, Republic of">Korea, Republic of</option><option value="Kuwait">Kuwait</option><option value="Kyrgyzstan">Kyrgyzstan</option><option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option><option value="Latvia">Latvia</option><option value="Lebanon">Lebanon</option><option value="Lesotho">Lesotho</option><option value="Liberia">Liberia</option><option value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option><option value="Liechtenstein">Liechtenstein</option><option value="Lithuania">Lithuania</option><option value="Luxembourg">Luxembourg</option><option value="Macau">Macau</option><option value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option><option value="Madagascar">Madagascar</option><option value="Malawi">Malawi</option><option value="Malaysia">Malaysia</option><option value="Maldives">Maldives</option><option value="Mali">Mali</option><option value="Malta">Malta</option><option value="Marshall Islands">Marshall Islands</option><option value="Martinique">Martinique</option><option value="Mauritania">Mauritania</option><option value="Mauritius">Mauritius</option><option value="Mayotte">Mayotte</option><option value="Mexico">Mexico</option><option value="Micronesia, Federated States of">Micronesia, Federated States of</option><option value="Moldova, Republic of">Moldova, Republic of</option><option value="Monaco">Monaco</option><option value="Mongolia">Mongolia</option><option value="Montserrat">Montserrat</option><option value="Morocco">Morocco</option><option value="Mozambique">Mozambique</option><option value="Myanmar">Myanmar</option><option value="Namibia">Namibia</option><option value="Nauru">Nauru</option><option value="Nepal">Nepal</option><option value="Netherlands">Netherlands</option><option value="Netherlands Antilles">Netherlands Antilles</option><option value="New Caledonia">New Caledonia</option><option value="New Zealand">New Zealand</option><option value="Nicaragua">Nicaragua</option><option value="Niger">Niger</option><option value="Nigeria">Nigeria</option><option value="Niue">Niue</option><option value="Norfolk Island">Norfolk Island</option><option value="Northern Mariana Islands">Northern Mariana Islands</option><option value="Norway">Norway</option><option value="Oman">Oman</option><option value="Pakistan">Pakistan</option><option value="Palau">Palau</option><option value="Panama">Panama</option><option value="Papua New Guinea">Papua New Guinea</option><option value="Paraguay">Paraguay</option><option value="Peru">Peru</option><option value="Philippines">Philippines</option><option value="Pitcairn">Pitcairn</option><option value="Poland">Poland</option><option value="Portugal">Portugal</option><option value="Puerto Rico">Puerto Rico</option><option value="Qatar">Qatar</option><option value="Reunion">Reunion</option><option value="Romania">Romania</option><option value="Russian Federation">Russian Federation</option><option value="Rwanda">Rwanda</option><option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option><option value="Saint LUCIA">Saint LUCIA</option><option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option><option value="Samoa">Samoa</option><option value="San Marino">San Marino</option><option value="Sao Tome and Principe">Sao Tome and Principe</option><option value="Saudi Arabia">Saudi Arabia</option><option value="Senegal">Senegal</option><option value="Seychelles">Seychelles</option><option value="Sierra Leone">Sierra Leone</option><option value="Singapore">Singapore</option><option value="Slovakia (Slovak Republic)">Slovakia (Slovak Republic)</option><option value="Slovenia">Slovenia</option><option value="Solomon Islands">Solomon Islands</option><option value="Somalia">Somalia</option><option value="South Africa">South Africa</option><option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option><option value="Spain">Spain</option><option value="Sri Lanka">Sri Lanka</option><option value="St. Helena">St. Helena</option><option value="St. Pierre and Miquelon">St. Pierre and Miquelon</option><option value="Sudan">Sudan</option><option value="Suriname">Suriname</option><option value="Svalbard and Jan Mayen Islands">Svalbard and Jan Mayen Islands</option><option value="Swaziland">Swaziland</option><option value="Sweden">Sweden</option><option value="Switzerland">Switzerland</option><option value="Syrian Arab Republic">Syrian Arab Republic</option><option value="Taiwan, Province of China">Taiwan, Province of China</option><option value="Tajikistan">Tajikistan</option><option value="Tanzania, United Republic of">Tanzania, United Republic of</option><option value="Thailand">Thailand</option><option value="Togo">Togo</option><option value="Tokelau">Tokelau</option><option value="Tonga">Tonga</option><option value="Trinidad and Tobago">Trinidad and Tobago</option><option value="Tunisia">Tunisia</option><option value="Turkey">Turkey</option><option value="Turkmenistan">Turkmenistan</option><option value="Turks and Caicos Islands">Turks and Caicos Islands</option><option value="Tuvalu">Tuvalu</option><option value="Uganda">Uganda</option><option value="Ukraine">Ukraine</option><option value="United Arab Emirates">United Arab Emirates</option><option value="United Kingdom">United Kingdom</option><option value="United States">United States</option><option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option><option value="Uruguay">Uruguay</option><option value="Uzbekistan">Uzbekistan</option><option value="Vanuatu">Vanuatu</option><option value="Venezuela">Venezuela</option><option value="Viet Nam">Viet Nam</option><option value="Virgin Islands (British)">Virgin Islands (British)</option><option value="Virgin Islands (U.S.)">Virgin Islands (U.S.)</option><option value="Wallis and Futuna Islands">Wallis and Futuna Islands</option><option value="Western Sahara">Western Sahara</option><option value="Yemen">Yemen</option><option value="Yugoslavia">Yugoslavia</option><option value="Zambia">Zambia</option><option value="Zimbabwe">Zimbabwe</option></select>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="ipt">
                                                <s className="ico-email"></s>
                                                <input type="text" name="email" placeholder="email"/>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="form-box-r">
                                <div className="dt">Content</div>
                                <div className="dd">
                                    <div className="textarea-box">
                                        <s className="ico-msg"></s>
                                        <textarea name="" id="" cols="30" rows="10"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="f-cb"></div>
                            <a className="btn-submit" onClick={this.handleClickSubmit}>Send Message</a>
                        </form>
                    </div>
                </div>
                {tip}
            </div>
        );
    }
});

var Tips = React.createClass({
    //handleOnClickClose: function () {
    //    var tips = this.refs.tip.getDOMNode();
    //    tips.remove();
    //},
    render: function(){
        return (
            <div ref="tip">
                <div className="mask"></div>
                <div className={this.props.tipType == "success" ? "tips success" : "tips errow"}>
                    <span className="close" onClick={this.props.clickCallback}></span>
                    <s></s>
                    <h3>{this.props.tipTitle}</h3>
                    <p>{this.props.tipCnt}
                    </p>
                    {this.props.tipType == "success" && <a href="http://baidu.com"  onClick={this.props.clickCallback} target="_blank" className="btn-facebook"></a>}
                </div>
            </div>

        );
    }
});

var Partner = React.createClass({
    getInitialState: function() {
        return {tipState: 'hide'}
    },
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






