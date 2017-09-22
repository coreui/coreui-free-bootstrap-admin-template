import React, {Component} from 'react';
import ReactQuill from 'react-quill';
import {
  Card,
  CardHeader,
  CardBlock
} from "reactstrap";



class TextEditors extends Component {
  constructor(props) {
    super(props)
    this.state = { text: '' } // You can also pass a Quill Delta here
    this.handleChange = this.handleChange.bind(this)
    this.modules = {
      toolbar: [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean']                                         // remove formatting button
      ]
    }
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  render() {
    return (
      <Card>
        <CardHeader>
          Quill - modern rich text editor
          <div className="card-actions"><a href="https://zenoamaro.github.io/react-quill/" target="_blank">docs</a></div>
        </CardHeader>
        <CardBlock>
          <ReactQuill value={this.state.text}
                      modules={this.modules}
                      value={`<p><b>Bootstrap</b> is a <a href="/wiki/Free_and_open-source_software" title="Free and open-source software">free and open-source</a> front-end <a href="/wiki/Web_framework" title="Web framework">web framework</a> for designing <a href="/wiki/Website" title="Website">websites</a> and <a href="/wiki/Web_application" title="Web application">web applications</a>. It contains <a href="/wiki/HTML" title="HTML">HTML</a>- and <a href="/wiki/CSS" class="mw-redirect" title="CSS">CSS</a>-based design templates for <a href="/wiki/Typography" title="Typography">typography</a>, forms, buttons, navigation and other interface components, as well as optional <a href="/wiki/JavaScript" title="JavaScript">JavaScript</a> extensions. Unlike many web frameworks, it concerns itself with <a href="/wiki/Front-end_web_development" title="Front-end web development">front-end development</a> only.</p>
                      <p>Bootstrap is the second most-starred project on <a href="/wiki/GitHub" title="GitHub">GitHub</a>, with more than 111,600 stars and 51,500 forks.<sup id="cite_ref-most-starred_3-0" class="reference"><a href="#cite_note-most-starred-3">[3]</a></sup></p>
                      <p>Bootstrap, originally named Twitter Blueprint, was developed by Mark Otto and Jacob Thornton at <a href="/wiki/Twitter" title="Twitter">Twitter</a> as a framework to encourage consistency across internal tools. Before Bootstrap, various libraries were used for interface development, which led to inconsistencies and a high maintenance burden. According to <a href="/wiki/Twitter" title="Twitter">Twitter</a> developer Mark Otto:</p>
                      <blockquote class="templatequote">
                      <p>"A super small group of developers and I got together to design and build a new internal tool and saw an opportunity to do something more. Through that process, we saw ourselves build something much more substantial than another internal tool. Months later, we ended up with an early version of Bootstrap as a way to document and share common design patterns and assets within the company."<sup id="cite_ref-bootstrap_a_list_apart_4-0" class="reference"><a href="#cite_note-bootstrap_a_list_apart-4">[4]</a></sup></p>
                      </blockquote>
                      <p>After a few months of development by a small group, many developers at Twitter began to contribute to the project as a part of Hack Week, a <a href="/wiki/Hackathon" title="Hackathon">hackathon</a>-style week for the Twitter development team. It was renamed from Twitter Blueprint to Bootstrap, and released as an open source project on August 19, 2011.<sup id="cite_ref-v1-release_5-0" class="reference"><a href="#cite_note-v1-release-5">[5]</a></sup> It has continued to be maintained by Mark Otto, Jacob Thornton, and a small group of core developers, as well as a large community of contributors.<sup id="cite_ref-about_6-0" class="reference"><a href="#cite_note-about-6">[6]</a></sup></p>`} />
        </CardBlock>
      </Card>
    )
  }
}

export default TextEditors;
