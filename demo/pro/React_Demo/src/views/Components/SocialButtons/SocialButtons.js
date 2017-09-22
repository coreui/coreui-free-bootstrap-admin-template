import React, {Component} from "react";
import {Row, Col, Card, CardHeader, CardBlock, Button} from "reactstrap";

class SocialButtons extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <strong>Social Media Button</strong>
                <small>Usage ex.</small>
                <code style={{textTransform: 'lowercase'}}>&lt;button className="btn-facebook"&gt;&lt;span&gt;
                  Facebook&lt;/span&gt;&lt;/Button&gt;</code>
              </CardHeader>
              <CardBlock className="card-body">
                <h6>Size Small
                  <small>Add this class <code>.btn-sm</code></small>
                </h6>
                <p>
                  <Button size="sm" className="btn-facebook"><span>Facebook</span></Button>
                  <Button size="sm" className="btn-twitter"><span>Twitter</span></Button>
                  <Button size="sm" className="btn-linkedin"><span>LinkedIn</span></Button>
                  <Button size="sm" className="btn-flickr"><span>Flickr</span></Button>
                  <Button size="sm" className="btn-tumblr"><span>Tumblr</span></Button>
                  <Button size="sm" className="btn-xing"><span>Xing</span></Button>
                  <Button size="sm" className="btn-github"><span>Github</span></Button>
                  <Button size="sm" className="btn-html5"><span>HTML5</span></Button>
                  <Button size="sm" className="btn-openid"><span>OpenID</span></Button>
                  <Button size="sm" className="btn-stack-overflow"><span>StackOverflow</span></Button>
                  <Button size="sm" className="btn-css3"><span>CSS3</span></Button>
                  <Button size="sm" className="btn-youtube"><span>YouTube</span></Button>
                  <Button size="sm" className="btn-dribbble"><span>Dribbble</span></Button>
                  <Button size="sm" className="btn-google-plus"><span>Google+</span></Button>
                  <Button size="sm" className="btn-instagram"><span>Instagram</span></Button>
                  <Button size="sm" className="btn-pinterest"><span>Pinterest</span></Button>
                  <Button size="sm" className="btn-vk"><span>VK</span></Button>
                  <Button size="sm" className="btn-yahoo"><span>Yahoo</span></Button>
                  <Button size="sm" className="btn-behance"><span>Behance</span></Button>
                  <Button size="sm" className="btn-dropbox"><span>Dropbox</span></Button>
                  <Button size="sm" className="btn-reddit"><span>Reddit</span></Button>
                  <Button size="sm" className="btn-spotify"><span>Spotify</span></Button>
                  <Button size="sm" className="btn-vine"><span>Vine</span></Button>
                  <Button size="sm" className="btn-foursquare"><span>Forsquare</span></Button>
                  <Button size="sm" className="btn-vimeo"><span>Vimeo</span></Button>
                </p>
                <h6>Size Normal</h6>
                <p>
                  <Button className="btn-facebook"><span>Facebook</span></Button>
                  <Button className="btn-twitter"><span>Twitter</span></Button>
                  <Button className="btn-linkedin"><span>LinkedIn</span></Button>
                  <Button className="btn-flickr"><span>Flickr</span></Button>
                  <Button className="btn-tumblr"><span>Tumblr</span></Button>
                  <Button className="btn-xing"><span>Xing</span></Button>
                  <Button className="btn-github"><span>Github</span></Button>
                  <Button className="btn-html5"><span>HTML5</span></Button>
                  <Button className="btn-openid"><span>OpenID</span></Button>
                  <Button className="btn-stack-overflow"><span>StackOverflow</span></Button>
                  <Button className="btn-css3"><span>CSS3</span></Button>
                  <Button className="btn-youtube"><span>YouTube</span></Button>
                  <Button className="btn-dribbble"><span>Dribbble</span></Button>
                  <Button className="btn-google-plus"><span>Google+</span></Button>
                  <Button className="btn-instagram"><span>Instagram</span></Button>
                  <Button className="btn-pinterest"><span>Pinterest</span></Button>
                  <Button className="btn-vk"><span>VK</span></Button>
                  <Button className="btn-yahoo"><span>Yahoo</span></Button>
                  <Button className="btn-behance"><span>Behance</span></Button>
                  <Button className="btn-dropbox"><span>Dropbox</span></Button>
                  <Button className="btn-reddit"><span>Reddit</span></Button>
                  <Button className="btn-spotify"><span>Spotify</span></Button>
                  <Button className="btn-vine"><span>Vine</span></Button>
                  <Button className="btn-foursquare"><span>Forsquare</span></Button>
                  <Button className="btn-vimeo"><span>Vimeo</span></Button>
                </p>
                <h6>Size Large
                  <small>Add this class <code>.btn-lg</code></small>
                </h6>
                <p>
                  <Button size="lg" className="btn-facebook"><span>Facebook</span></Button>
                  <Button size="lg" className="btn-twitter"><span>Twitter</span></Button>
                  <Button size="lg" className="btn-linkedin"><span>LinkedIn</span></Button>
                  <Button size="lg" className="btn-flickr"><span>Flickr</span></Button>
                  <Button size="lg" className="btn-tumblr"><span>Tumblr</span></Button>
                  <Button size="lg" className="btn-xing"><span>Xing</span></Button>
                  <Button size="lg" className="btn-github"><span>Github</span></Button>
                  <Button size="lg" className="btn-html5"><span>HTML5</span></Button>
                  <Button size="lg" className="btn-openid"><span>OpenID</span></Button>
                  <Button size="lg" className="btn-stack-overflow"><span>StackOverflow</span></Button>
                  <Button size="lg" className="btn-css3"><span>CSS3</span></Button>
                  <Button size="lg" className="btn-youtube"><span>YouTube</span></Button>
                  <Button size="lg" className="btn-dribbble"><span>Dribbble</span></Button>
                  <Button size="lg" className="btn-google-plus"><span>Google+</span></Button>
                  <Button size="lg" className="btn-instagram"><span>Instagram</span></Button>
                  <Button size="lg" className="btn-pinterest"><span>Pinterest</span></Button>
                  <Button size="lg" className="btn-vk"><span>VK</span></Button>
                  <Button size="lg" className="btn-yahoo"><span>Yahoo</span></Button>
                  <Button size="lg" className="btn-behance"><span>Behance</span></Button>
                  <Button size="lg" className="btn-dropbox"><span>Dropbox</span></Button>
                  <Button size="lg" className="btn-reddit"><span>Reddit</span></Button>
                  <Button size="lg" className="btn-spotify"><span>Spotify</span></Button>
                  <Button size="lg" className="btn-vine"><span>Vine</span></Button>
                  <Button size="lg" className="btn-foursquare"><span>Forsquare</span></Button>
                  <Button size="lg" className="btn-vimeo"><span>Vimeo</span></Button>
                </p>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12">
            <Card>
              <CardHeader>
                <strong>Social Media Button</strong>
                <small>Only icons. Usage ex.</small>
                <code style={{textTransform: 'lowercase'}}>&lt;button className="btn-facebook icon"&gt;&lt;span&gt;
                  Facebook&lt;/span&gt;&lt;/Button&gt;</code>
              </CardHeader>
              <CardBlock className="card-body">
                <h6>Size Small
                  <small>Add this class <code>.btn-sm</code></small>
                </h6>
                <p>
                  <Button size="sm" className="btn-facebook icon"><span>Facebook</span></Button>
                  <Button size="sm" className="btn-twitter icon"><span>Twitter</span></Button>
                  <Button size="sm" className="btn-linkedin icon"><span>LinkedIn</span></Button>
                  <Button size="sm" className="btn-flickr icon"><span>Flickr</span></Button>
                  <Button size="sm" className="btn-tumblr icon"><span>Tumblr</span></Button>
                  <Button size="sm" className="btn-xing icon"><span>Xing</span></Button>
                  <Button size="sm" className="btn-github icon"><span>Github</span></Button>
                  <Button size="sm" className="btn-html5 icon"><span>HTML5</span></Button>
                  <Button size="sm" className="btn-openid icon"><span>OpenID</span></Button>
                  <Button size="sm" className="btn-stack-overflow icon"><span>StackOverflow</span></Button>
                  <Button size="sm" className="btn-css3 icon"><span>CSS3</span></Button>
                  <Button size="sm" className="btn-youtube icon"><span>YouTube</span></Button>
                  <Button size="sm" className="btn-dribbble icon"><span>Dribbble</span></Button>
                  <Button size="sm" className="btn-google-plus icon"><span>Google+</span></Button>
                  <Button size="sm" className="btn-instagram icon"><span>Instagram</span></Button>
                  <Button size="sm" className="btn-pinterest icon"><span>Pinterest</span></Button>
                  <Button size="sm" className="btn-vk icon"><span>VK</span></Button>
                  <Button size="sm" className="btn-yahoo icon"><span>Yahoo</span></Button>
                  <Button size="sm" className="btn-behance icon"><span>Behance</span></Button>
                  <Button size="sm" className="btn-dropbox icon"><span>Dropbox</span></Button>
                  <Button size="sm" className="btn-reddit icon"><span>Reddit</span></Button>
                  <Button size="sm" className="btn-spotify icon"><span>Spotify</span></Button>
                  <Button size="sm" className="btn-vine icon"><span>Vine</span></Button>
                  <Button size="sm" className="btn-foursquare icon"><span>Forsquare</span></Button>
                  <Button size="sm" className="btn-vimeo icon"><span>Vimeo</span></Button>
                </p>
                <h6>Size Normal</h6>
                <p>
                  <Button className="btn-facebook icon"><span>Facebook</span></Button>
                  <Button className="btn-twitter icon"><span>Twitter</span></Button>
                  <Button className="btn-linkedin icon"><span>LinkedIn</span></Button>
                  <Button className="btn-flickr icon"><span>Flickr</span></Button>
                  <Button className="btn-tumblr icon"><span>Tumblr</span></Button>
                  <Button className="btn-xing icon"><span>Xing</span></Button>
                  <Button className="btn-github icon"><span>Github</span></Button>
                  <Button className="btn-html5 icon"><span>HTML5</span></Button>
                  <Button className="btn-openid icon"><span>OpenID</span></Button>
                  <Button className="btn-stack-overflow icon"><span>StackOverflow</span></Button>
                  <Button className="btn-css3 icon"><span>CSS3</span></Button>
                  <Button className="btn-youtube icon"><span>YouTube</span></Button>
                  <Button className="btn-dribbble icon"><span>Dribbble</span></Button>
                  <Button className="btn-google-plus icon"><span>Google+</span></Button>
                  <Button className="btn-instagram icon"><span>Instagram</span></Button>
                  <Button className="btn-pinterest icon"><span>Pinterest</span></Button>
                  <Button className="btn-vk icon"><span>VK</span></Button>
                  <Button className="btn-yahoo icon"><span>Yahoo</span></Button>
                  <Button className="btn-behance icon"><span>Behance</span></Button>
                  <Button className="btn-dropbox icon"><span>Dropbox</span></Button>
                  <Button className="btn-reddit icon"><span>Reddit</span></Button>
                  <Button className="btn-spotify icon"><span>Spotify</span></Button>
                  <Button className="btn-vine icon"><span>Vine</span></Button>
                  <Button className="btn-foursquare icon"><span>Forsquare</span></Button>
                  <Button className="btn-vimeo icon"><span>Vimeo</span></Button>
                </p>
                <h6>Size Large
                  <small>Add this class <code>.btn-lg</code></small>
                </h6>
                <p>
                  <Button size="lg" className="btn-facebook icon"><span>Facebook</span></Button>
                  <Button size="lg" className="btn-twitter icon"><span>Twitter</span></Button>
                  <Button size="lg" className="btn-linkedin icon"><span>LinkedIn</span></Button>
                  <Button size="lg" className="btn-flickr icon"><span>Flickr</span></Button>
                  <Button size="lg" className="btn-tumblr icon"><span>Tumblr</span></Button>
                  <Button size="lg" className="btn-xing icon"><span>Xing</span></Button>
                  <Button size="lg" className="btn-github icon"><span>Github</span></Button>
                  <Button size="lg" className="btn-html5 icon"><span>HTML5</span></Button>
                  <Button size="lg" className="btn-openid icon"><span>OpenID</span></Button>
                  <Button size="lg" className="btn-stack-overflow icon"><span>StackOverflow</span></Button>
                  <Button size="lg" className="btn-css3 icon"><span>CSS3</span></Button>
                  <Button size="lg" className="btn-youtube icon"><span>YouTube</span></Button>
                  <Button size="lg" className="btn-dribbble icon"><span>Dribbble</span></Button>
                  <Button size="lg" className="btn-google-plus icon"><span>Google+</span></Button>
                  <Button size="lg" className="btn-instagram icon"><span>Instagram</span></Button>
                  <Button size="lg" className="btn-pinterest icon"><span>Pinterest</span></Button>
                  <Button size="lg" className="btn-vk icon"><span>VK</span></Button>
                  <Button size="lg" className="btn-yahoo icon"><span>Yahoo</span></Button>
                  <Button size="lg" className="btn-behance icon"><span>Behance</span></Button>
                  <Button size="lg" className="btn-dropbox icon"><span>Dropbox</span></Button>
                  <Button size="lg" className="btn-reddit icon"><span>Reddit</span></Button>
                  <Button size="lg" className="btn-spotify icon"><span>Spotify</span></Button>
                  <Button size="lg" className="btn-vine icon"><span>Vine</span></Button>
                  <Button size="lg" className="btn-foursquare icon"><span>Forsquare</span></Button>
                  <Button size="lg" className="btn-vimeo icon"><span>Vimeo</span></Button>
                </p>
              </CardBlock>
            </Card>
          </Col>

          <Col xs="12">
            <Card>
              <CardHeader>
                <strong>Social Media Button</strong>
                <small>Only text. Usage ex.</small>
                <code style={{textTransform: 'lowercase'}}>&lt;button className="btn-facebook text"&gt;&lt;span&gt;
                  Facebook&lt;/span&gt;&lt;/Button&gt;</code>
              </CardHeader>
              <CardBlock className="card-body">
                <h6>Size Small
                  <small>Add this class <code>.btn-sm</code></small>
                </h6>
                <p>
                  <Button size="sm" className="btn-facebook text"><span>Facebook</span></Button>
                  <Button size="sm" className="btn-twitter text"><span>Twitter</span></Button>
                  <Button size="sm" className="btn-linkedin text"><span>LinkedIn</span></Button>
                  <Button size="sm" className="btn-flickr text"><span>Flickr</span></Button>
                  <Button size="sm" className="btn-tumblr text"><span>Tumblr</span></Button>
                  <Button size="sm" className="btn-xing text"><span>Xing</span></Button>
                  <Button size="sm" className="btn-github text"><span>Github</span></Button>
                  <Button size="sm" className="btn-html5 text"><span>HTML5</span></Button>
                  <Button size="sm" className="btn-openid text"><span>OpenID</span></Button>
                  <Button size="sm" className="btn-stack-overflow text"><span>StackOverflow</span></Button>
                  <Button size="sm" className="btn-css3 text"><span>CSS3</span></Button>
                  <Button size="sm" className="btn-youtube text"><span>YouTube</span></Button>
                  <Button size="sm" className="btn-dribbble text"><span>Dribbble</span></Button>
                  <Button size="sm" className="btn-google-plus text"><span>Google+</span></Button>
                  <Button size="sm" className="btn-instagram text"><span>Instagram</span></Button>
                  <Button size="sm" className="btn-pinterest text"><span>Pinterest</span></Button>
                  <Button size="sm" className="btn-vk text"><span>VK</span></Button>
                  <Button size="sm" className="btn-yahoo text"><span>Yahoo</span></Button>
                  <Button size="sm" className="btn-behance text"><span>Behance</span></Button>
                  <Button size="sm" className="btn-dropbox text"><span>Dropbox</span></Button>
                  <Button size="sm" className="btn-reddit text"><span>Reddit</span></Button>
                  <Button size="sm" className="btn-spotify text"><span>Spotify</span></Button>
                  <Button size="sm" className="btn-vine text"><span>Vine</span></Button>
                  <Button size="sm" className="btn-foursquare text"><span>Forsquare</span></Button>
                  <Button size="sm" className="btn-vimeo text"><span>Vimeo</span></Button>
                </p>
                <h6>Size Normal</h6>
                <p>
                  <Button className="btn-facebook text"><span>Facebook</span></Button>
                  <Button className="btn-twitter text"><span>Twitter</span></Button>
                  <Button className="btn-linkedin text"><span>LinkedIn</span></Button>
                  <Button className="btn-flickr text"><span>Flickr</span></Button>
                  <Button className="btn-tumblr text"><span>Tumblr</span></Button>
                  <Button className="btn-xing text"><span>Xing</span></Button>
                  <Button className="btn-github text"><span>Github</span></Button>
                  <Button className="btn-html5 text"><span>HTML5</span></Button>
                  <Button className="btn-openid text"><span>OpenID</span></Button>
                  <Button className="btn-stack-overflow text"><span>StackOverflow</span></Button>
                  <Button className="btn-css3 text"><span>CSS3</span></Button>
                  <Button className="btn-youtube text"><span>YouTube</span></Button>
                  <Button className="btn-dribbble text"><span>Dribbble</span></Button>
                  <Button className="btn-google-plus text"><span>Google+</span></Button>
                  <Button className="btn-instagram text"><span>Instagram</span></Button>
                  <Button className="btn-pinterest text"><span>Pinterest</span></Button>
                  <Button className="btn-vk text"><span>VK</span></Button>
                  <Button className="btn-yahoo text"><span>Yahoo</span></Button>
                  <Button className="btn-behance text"><span>Behance</span></Button>
                  <Button className="btn-dropbox text"><span>Dropbox</span></Button>
                  <Button className="btn-reddit text"><span>Reddit</span></Button>
                  <Button className="btn-spotify text"><span>Spotify</span></Button>
                  <Button className="btn-vine text"><span>Vine</span></Button>
                  <Button className="btn-foursquare text"><span>Forsquare</span></Button>
                  <Button className="btn-vimeo text"><span>Vimeo</span></Button>
                </p>
                <h6>Size Large
                  <small>Add this class <code>.btn-lg</code></small>
                </h6>
                <p>
                  <Button size="lg" className="btn-facebook text"><span>Facebook</span></Button>
                  <Button size="lg" className="btn-twitter text"><span>Twitter</span></Button>
                  <Button size="lg" className="btn-linkedin text"><span>LinkedIn</span></Button>
                  <Button size="lg" className="btn-flickr text"><span>Flickr</span></Button>
                  <Button size="lg" className="btn-tumblr text"><span>Tumblr</span></Button>
                  <Button size="lg" className="btn-xing text"><span>Xing</span></Button>
                  <Button size="lg" className="btn-github text"><span>Github</span></Button>
                  <Button size="lg" className="btn-html5 text"><span>HTML5</span></Button>
                  <Button size="lg" className="btn-openid text"><span>OpenID</span></Button>
                  <Button size="lg" className="btn-stack-overflow text"><span>StackOverflow</span></Button>
                  <Button size="lg" className="btn-css3 text"><span>CSS3</span></Button>
                  <Button size="lg" className="btn-youtube text"><span>YouTube</span></Button>
                  <Button size="lg" className="btn-dribbble text"><span>Dribbble</span></Button>
                  <Button size="lg" className="btn-google-plus text"><span>Google+</span></Button>
                  <Button size="lg" className="btn-instagram text"><span>Instagram</span></Button>
                  <Button size="lg" className="btn-pinterest text"><span>Pinterest</span></Button>
                  <Button size="lg" className="btn-vk text"><span>VK</span></Button>
                  <Button size="lg" className="btn-yahoo text"><span>Yahoo</span></Button>
                  <Button size="lg" className="btn-behance text"><span>Behance</span></Button>
                  <Button size="lg" className="btn-dropbox text"><span>Dropbox</span></Button>
                  <Button size="lg" className="btn-reddit text"><span>Reddit</span></Button>
                  <Button size="lg" className="btn-spotify text"><span>Spotify</span></Button>
                  <Button size="lg" className="btn-vine text"><span>Vine</span></Button>
                  <Button size="lg" className="btn-foursquare text"><span>Forsquare</span></Button>
                  <Button size="lg" className="btn-vimeo text"><span>Vimeo</span></Button>
                </p>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

export default SocialButtons;
