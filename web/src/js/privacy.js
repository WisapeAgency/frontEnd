/**
 * Created by pomy on 15/11/4.
 */
require('../css/base.less');
require('../css/privacy.less');
var $ = require('jquery');
var React = require('react');
var Footer = require('./footer');
var config = require('../../config');

var tabsData = ['Terms of Service','Privacy Policy','Content Specification'];
var PrivacyMain = React.createClass({
    getInitialState: function() {
        var hrefParms = window.location.href.split("?")[1];
        var index = 0;
        if(hrefParms) {
            index = parseInt(hrefParms.split("&")[0].split("=")[1]);
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
                    <a href={config.webroot} className="logo">
                    </a>
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
                            <p>
                                With the exception of credit card numbers for the purchase of products and services, Wisape does not want to receive confidential or proprietary information through its website.
                                <br/> <br/>
                                Any information sent to Wisape with the exception of credit card numbers, will be deemed NOT CONFIDENTIAL. You grant Wisape an unrestricted, irrevocable license to display, use, modify, perform, reproduce, transmit, and distribute any information you send Wisape, for any and all commercial and non-commercial purposes.
                                <br/> <br/>
                                You also agree that Wisape is free to use any ideas, concepts, or techniques that you send Wisape for any purpose, including, but not limited to, developing, manufacturing, and marketing products that incorporate such ideas, concepts, or techniques.
                                <br/> <br/>
                                Wisape may, but is not obligated to, review or monitor areas on its site where users may transmit or post communications, including bulletin boards, chat rooms, and user forums. Wisape is not responsible for the accuracy of any information, data, opinions, advice, or statements transmitted or posted on bulletin boards, chat rooms, and user forums.
                                <br/> <br/>
                                You are prohibited from posting or transmitting to or from Wisape website any libelous, obscene, defamatory, pornographic, or other materials that would violate any laws. However, if such communications do occur, Wisape will have no liability related to the content of any such communications.
                                <br/> <br/>
                                Please refer to Ask Wisape Terms and Conditions for further information on Wisape's policies regarding the use of public forums, and the submission of information through Wisape's web site.
                            </p>
                            <br/> <br/>
                            <h3>Linking to Wisape's Website</h3>
                            <p>
                                Wisape permits anyone to link to Wisape's website subject to the linker's compliance with the following terms and conditions:
                                <br/> <br/>
                                A site that links to Wisape's website:
                                <br/> <br/>
                                1、May link to, but not replicate, content contained in Wisape's site; <br/>
                                2、Must not create a border environment or browser around content contained in Wisape's site; <br/>
                                3、Must not present misleading or false information about Wisape's services or products; <br/>
                                4、Must not misrepresent Wisape's relationship with the linker; <br/>
                                5、Must not imply that Wisape is endorsing or sponsoring the linker or the linker's services or products; <br/>
                                6、Must not use Wisape's logos or trade dress without prior written permission from Wisape; <br/>
                                7、Must not contain content that could be construed as obscene, libelous, defamatory, pornographic, or inappropriate for all ages; <br/>
                                8、Must not contain materials that would violate any laws; <br/>
                                9、Must agree that the link may be removed at any time upon Wisape's request pursuant to Wisape's reserved rights to rescind its consent to allow the link. <br/>
                                <br/> <br/>
                                Third-party Websites
                                <br/> <br/>
                                Wisape's site provides links to third-party websites, which are not under the control of Wisape. Wisape makes no representations about third-party websites. When you access a non- Wisape website, you do so at your own risk. Wisape is not responsible for the reliability of any data, opinions, advice, or statements made on third-party sites. Wisape provides these links merely as a convenience. The inclusion of such links does not imply that Wisape endorses, recommends, or accepts any responsibility for the content of such sites.
                            </p>
                            <br/> <br/>
                            <h3>Third-party Products and Services</h3>
                            <p>
                                The Wisape website contains mention of third-party products and services for informational purposes. Wisape makes no recommendations or endorsements about third-party products and services. References to third-party services and products are provided by Wisape "as is", without warranty of any kind, either express or implied.
                            </p>
                            <br/> <br/>
                            <h3>Compliance with Laws</h3>
                            <p> Governing Law and Jurisdiction<br/>
                                Wisape makes no representation that information on Wisape website are appropriate or available for use in all countries, and prohibits accessing materials from territories where contents are illegal. Those who access this site do so on their own initiative and are responsible for compliance with all applicable laws.
                            </p>


                        </div>

                        <div className="item">
                            <p>
                                Wisape respects your privacy choices. If you give us personal information, we will treat it according to this policy. What is personal information? Generally, this may include your first and last name, address, e-mail address, and telephone number. If you make a purchase from our site, we will need to collect some information to be used only for the purpose of completing your purchase transaction.
                                <br/><br/>
                                This policy covers the Wisape websites. Some of our advertisers, affiliates, or programs have their own, possibly different policies.
                                <br/><br/>
                                Wisape encourages you to read this privacy policy and those of all websites you visit. Below is a summary of Wisape's online privacy policy.
                            </p>
                            <br/><br/>
                            <h3>Types and uses of information.</h3>
                            <br/>
                            <p>Your privacy is important to us.</p>
                            <br/><br/>
                            <p>
                                Wisape is committed to protecting your privacy. Because we collect two types of user information, General Statistical Information and Personal Identifying Information, we are providing you with this policy to inform you of how we use and, in limited circumstances, disclose such information.
                            </p>
                            <br/><br/>
                            <p>Collection, Use and Disclosure of General Statistical Information</p>
                            <br/><br/>
                            <p>When you visit our website we gather certain general information, such as frequency of downloads, number of hits on our website, and usage statistics with respect to our application products. This information is referred to throughout this policy as "General Statistical Information". We use and store this data only on a collective basis, in summary form, rather than on an individual basis. This data helps us to determine how and the extent to which certain parts of our website and applications are used. The stored General Statistical Information does not contain any Personal Identifying Information about you or any of our other users.
                            </p>
                            <br/><br/>
                            <p>
                                Collection and Use of Personal Identifying Information
                                <br/><br/>
                                In addition to collecting General Statistical Information, we may ask you to provide us with certain personal information, such as your name, street address and email address, to enable us to respond to your requests and needs. Information that can reasonably be used to identify you is referred to in this policy as "Personal Identifying Information".
                                For example, if you choose a service or transaction that requires payment, such as making a purchase online or through other means such as a purchase order, we will request Personal Identifying Information necessary for payment, invoicing, and/or shipping.
                                <br/><br/>
                                In addition, when you purchase a product, we will also ask for product registration information, which includes the name of the product acquired, as well as your name, street address, and e-mail address. This Personal Identifying Information is kept on file and updated from time to time to fulfill our continuing obligations to you, such as providing notices of new versions and giving support by e-mail.
                                <br/><br/>
                                When you provide us Personal Identifying Information in an e-mail, fax or by telephone such as when you request technical and other types of support, we use the information to locate your records and provide you with answers to your questions.
                                <br/><br/>
                                Also, when you submit information to us in the context of a technical support inquiry, including sending the product error report log file, Personal Identifying Information may be attached to the information submitted.
                                <br/><br/>
                                Please note that you should be aware that the transmitting of the error report log file or other attachments may include confidential information which should be removed prior to the transmittal as we do not accept responsibility for the inadvertent subsequent disclosure of such confidential information. When you ask to be placed on one of our mailing lists, we will use your e-mail address to send you messages relevant to that list.
                            </p>
                            <br/><br/>
                            <h3>Security measures:</h3>
                            <p>
                                We protect the personal information you share with us. For example, if you make an online purchase with Cleverbridge network, they encrypt your credit card number. Access to your personal information is limited to people who need it to do their job.
                                <br/><br/>
                                Authorized third parties may need access to some of your personal information. For example, if we need to ship something to you, we must share your name and address with a shipping company. We limit such third parties in their access and use of your personal information.
                                <br/><br/>
                                We do not otherwise share your personal information with third parties, unless you have granted us permission to do so.
                            </p>
                            <br/><br/>
                            <h3>Linked websites:</h3>
                            <p>We provide links to third party sites. Since we do not control these websites, we encourage you to review the privacy policies posted on these (and all) third party sites.
                            </p>
                            <br/><br/>
                            <h3>Cookies:
                            </h3>
                            <p>Wisape website use "cookies." Cookies help us provide a better user experience by measuring which web site areas are of greatest interest. Wisape can only read cookies from Wisape website. If you choose to disable cookies in your browser, you can still access most of our websites.
                                <br/><br/>
                                We may display advertisements from third parties. Third party ad-serving companies control which ads are shown. These ad-serving companies may use cookies to collect non-personal information from you. They use this information to tailor the advertisements.
                            </p>
                            <br/><br/>
                            <h3>Policy updates:</h3>
                            <p>All updates to this policy will be posted here. Last update: November.2014.</p>

                        </div>
                        <div className="item">
                            <h3>You have agreed to comply with Wisape regulations when you take wisape services.</h3>
                            <h3>Wisape content review rules</h3>
                            <h3>General principle</h3>
                            <br/>
                            <p>In order to safeguard the interests of users, maintaining common development between Wisape and customers.
                            </p>
                            <br/><br/>
                            <h3>Review standards</h3>
                            <h3>Summary</h3>
                            <br/>
                            <p>
                                Medicine\Plastic\False advertising (Plastic surgery category: all scenes involving plastic surgery, including products, technology, plastic items, instrumentation and physicians are violation, remember!)<br/>
                                Pornography, gambling and drugs.<br/><br/>
                                Cults, illegal gatherings, pyramid schemes.<br/><br/>
                                Rumors, social negative news, fraud.<br/><br/>
                                Violation of national policy and local laws.<br/><br/>
                                Content we believe that is inappropriate.<br/><br/>
                                At the same time, we accept the complaints from you. <br/>To report illegal content or something makes you feel unwell, please send the story link to support@wisape.com.
                            </p>
                            <br/><br/>
                            <h3>Details of review</h3>
                            <br/>
                            <p>
                                Violation of local laws and regulations<br/><br/>
                                It is prohibited to divide the country, anti-party anti-government, drug and guns trafficking, gangs and violence, pornography, illegal gambling, fraud and another name/title, the right of reputation infringement/goodwill right, right of privacy, intellectual property rights, etc. The content of the violation of laws and regulations.<br/><br/>
                                The content about military, pornography, text, audio and video which are banned by relevant departments, including some cut of the movie clips.<br/><br/>
                                Not only literally but audio, video, text description also within the review scope.<br/><br/>
                                Dissemination of pornography, gambling, one-night stands, wife-swapping, sexual abuse and harmful information.<br/><br/>
                                All content hit beyond the social morality are not be allowed in any way.<br/><br/>
                                Direct exposure, and describe sexual parts of the body content.<br/><br/>
                                Descriptions and pictures, involving the sex organs genitals exposed, nude or sexy half naked, may not be allowed at all.<br/><br/>
                                Expression or implied sexual acts, provocative, sexually suggestive or offensive content.<br/><br/>
                                Depiction of sexual conduct, whether direct or veiled were banned, provocative and insulting content will be dealt severely.<br/><br/>
                                Medical institutions, pharmaceuticals, medical devices, health ads related content.<br/><br/>
                                According to the relevant legal provisions, health-related advertising is the scope of review, contact lenses, condoms, varicose socks, blood pressure monitors, blood glucose meters, electronic pocket, blood pressure monitors, etc.<br/><br/>
                                Weight loss, breast enhancement, impotence, muscle, vaginal contraction type (including but not limited to, oral, topical, defaced, injection) products.<br/><br/>
                                Prohibition content with description or product with such functions like weight loss, slimming, slimming, rows of oils, cellulite, dissolves fat, fat burning, clearing fat, nonfat, breast enhancement, impotence, muscle, vaginal contraction, tense situations in private; weight loss, breast enhancement, impotence, muscle, reducing negative effect of natural powder.<br/><br/>
                                Adult products<br/><br/>
                                Prohibition of sex toys, sexy lingerie, underwear, flirting with sesame oil flavor, aphrodisiac supplies.<br/><br/>
                                Religion and superstition<br/><br/>
                                Banned content with charm, evil sword, rehabilitation products, religious superstition, evil cults; prohibition of religious, missionary, religious training information.<br/><br/>
                                Rumor<br/><br/>
                                Rumors about food safety, health preserving health.<br/><br/>
                                Rumors like absurd mystery believe.<br/><br/>
                                Other rumors: physical security categories, such as intentionally defamatory libel.<br/><br/>
                                The invasion of privacy exposed, candid and naked privacy<br/><br/>
                                Contents contain violence, malicious invectives, insult.<br/><br/>
                                Prohibition pictures detailed depiction of violence, malicious invectives and insults others.<br/><br/>
                                The products and services that be prohibited by other national laws and regulations.<br/><br/>
                                Other content that we think is illegal.<br/><br/>
                                The national flag, national emblem cannot serve as the contents of advertisements, etc.<br/><br/>
                                The pyramid selling, illegal distribution, multistage distribution (including the platform or institutions) involved rules:<br/><br/>
                                Commissions through distribution model based on offline sales. Prompt user to invite others by promising returns. Prohibition of hunting, shooting, shooting such scenes appear.<br/><br/>
                                If you have any violation of the local relevant national laws and regulations, no responsibility for the Wisape. If necessary, we will provide your account information to the administrative departments of relevant countries.
                            </p>

                            <br/><br/>
                            <h3>Irregularities treatment level</h3>
                            <p>
                                Level 1: close the story.<br/>
                                Level 2: cancel the senior account permissions, service provider permissions.<br/>
                                Level 3: close account.
                            </p>
                            <br/><br/>
                            <h3>The appeals process email requirements</h3>
                            <p>
                                Please send email to support@wisape.com according to the template.<br/>
                                The content of the mail:<br/>
                                User ID: (email account). Story link: XXXXX. Have you read Wisape story rules? Yes/no.
                            </p>
                            <br/>
                            <p>
                                The above rules, please understand! Power of the rules interpretation belongs to Wisape, if there is any doubt, feel free to contact us: support@wisape.com.
                                Believe us, we want to let our platform review system more reasonable and effective.
                            </p>
                        </div>
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






