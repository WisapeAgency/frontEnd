/**
 * Created by pomy on 15/11/4.
 */
require('../css/base.less');
require('../css/privacy.less');
var $ = require('jquery');
var React = require('react');
var Footer = require('./footer');

var tabsData = ['Terms of Service','Privacy Policy','Content Specification'];
var PrivacyMain = React.createClass({
    getInitialState: function() {
        var hrefParms = window.location.href.split("?")[1];
        var index = 0;
        if(hrefParms) {
            index = parseInt(hrefParms.split("&")[0].split("=")[1]);
            console.info(index);
        }

        return {selected: index};
    },

    componentDidMount: function(){
        var tabsCnt = this.refs.tabscnt.getDOMNode();
        $(tabsCnt).find(".item").eq(this.state.selected).show().siblings().hide();
    },

    handleOnClick: function (evt) {
        var tabsCnt = this.refs.tabscnt.getDOMNode();
        var index = parseInt(evt.target.getAttribute('data-order'));
        this.setState({'selected': index});
        $(tabsCnt).find(".item").eq(index).show().siblings().hide();
    },
    render: function(){
        var tabs = tabsData.map(function (item,v) {
            var selected = this.state.selected;
            return <a href="javascript:void(0)" data-order={v} className={(v === this.state.selected) ? 'selected' : ""} onClick={this.handleOnClick}>{item}</a>;
        }, this);

        return (
            <div className="privacy-main">

                <div className="w">
                    <div className="logo">
                    </div>
                    <div className="tabs-nav">
                        {tabs}
                    </div>
                    <div className="tabs-cnt" ref="tabscnt">
                        <div className="item" style={{"display":"block"}}>
                            <p>
                                Wisape makes information and products available on Wisape website and APPs, subject to the following terms and conditions. By accessing Wisape site, you agree to these terms and conditions. Wisape reserves the right to change these terms and conditions, and the products, services, prices, and programs mentioned in this site at any time, at its sole discretion, without notice. Wisape reserves the right to seek all remedies available by law and in equity for any violation of these terms and conditions. Any rights not expressly granted herein are reserved.
                            </p>
                            <br />
                            <br />
                            <h3>
                                Copyright
                            </h3>
                            <p>
                                The information on Wisape website and Wisape APPs are protected by copyright. Except as specifically permitted, no portion of Wisape website may be distributed or reproduced by any means, or in any form, without Wisape's prior written permission.
                            </p>

                            <h3>COPYRIGHT NOTICE</h3>
                            <p>Our applications are neither developed nor produced by Apple Computer, Inc.</p>
                            <br/>
                            <p>Apple®, iTunes® iPhone® iPod® iPod touch® and iPad® are trademarks or registered trademarks of Apple Computer Incorporated in the United States and/or other countries. All other trademarks referenced herein are the property of their respective owners. Wisape is not affiliated with Apple Computer Incorporated.</p>
                            <br />
                            <p>© 2013-2014 Wisape ALL RIGHTS RESERVED.</p>
                            <br/>
                            <h3>Use of Application</h3>
                            <p>The application and accompanying documentation available to download from this site are the copyrighted work of Wisape. Use of the application is governed by the terms of the end user license agreement, which accompanies such application. If no license accompanies the download, the terms of the license which accompanied the original product being updated will govern. You will not be able to use, download, or install any application unless you agree to the terms of such end user license agreement.</p>
                            <br/>
                            <h3>Use of Website Information</h3>
                            <p>Except as otherwise indicated on this site, you may view, print, copy, and distribute documents on this site subject to the following terms and conditions:</p>
                            <br/>
                            <p>The document may be used solely for informational, personal, non-commercial purposes; 2. Any copy of the document or portion thereof must include all copyright and proprietary notices in the same form and manner as on the original; 3. The document may not be modified in any way; and 4. Wisape reserves the right to revoke such authorization at any time, and any such use shall be discontinued immediately upon notice from Wisape. Documents specified above do not include the layout or design of Wisape website. Elements of this site are protected by trade dress or other laws and may not be imitated or reproduced in whole or in part.</p>
                            <br/>
                            <p>Documents specified above do not include logos, graphics, sounds or images on Wisape website, which may be reproduced or distributed only when expressly permitted by Wisape.</p>
                            <br/>
                            <h3>Warranties and Disclaimers; Liability Limitations</h3>
                            <p>
                                EXCEPT AS EXPRESSLY PROVIDED OTHERWISE IN AN AGREEMENT BETWEEN YOU AND Wisape, ALL INFORMATION AND APPLICATION ON WISAPE WEBSITE ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITIONS OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                                <br/>
                                WISAPE ASSUMES NO RESPONSIBILITY FOR ERRORS OR OMISSIONS IN THE INFORMATION OR APPLICATION OR OTHER DOCUMENTS WHICH ARE REFERENCED BY OR LINKED TO WISAPE WEBSITE.
                                <br/>
                                IN NO EVENT SHALL WISAPE BE LIABLE FOR ANY SPECIAL, INCIDENTAL, INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER (INCLUDING WITHOUT LIMITATION, THOSE RESULTING FROM: (1) RELIANCE ON THE MATERIALS PRESENTED, (2) COSTS OF REPLACEMENT GOODS, (3) LOSS OF USE, DATA OR PROFITS, (4) DELAYS OR BUSINESS INTERRUPTIONS, (5) AND ANY THEORY OF LIABILITY, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF INFORMATION) WHETHER OR NOT WISAPE HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                                <br/>
                                SOME STATES DO NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES SO THE ABOVE LIMITATIONS OR EXCLUSIONS MAY NOT APPLY TO YOU.
                                <br/>
                                THIS WEB SITE COULD INCLUDE TECHNICAL OR OTHER INACCURACIES. CHANGES ARE PERIODICALLY MADE TO THE INFORMATION HEREIN. HOWEVER, WISAPE MAKES NO COMMITMENT TO UPDATE MATERIALS ON THIS SITE.
                            </p>

                            <br/>
                            <h3>Products and Services Availability</h3>
                            <p>The Wisape website can be accessed from countries around the world and may contain references to Wisape services, programs, and products that have not been announced in your country. These references do not imply that Wisape intends to announce such services, programs, or products in your country.</p>
                            <br/>
                            <h3>Submissions</h3>
                        </div>

                        <div className="item">
                            2
                        </div>
                        <div className="item">3</div>
                    </div>
                </div>

            </div>
        );
    }
});

var Privacy = React.createClass({
    render: function(){
        return (
            <div className="privacy">
                <PrivacyMain />
                <Footer />
            </div>
        );
    }
});

React.render(<Privacy />, document.body);






