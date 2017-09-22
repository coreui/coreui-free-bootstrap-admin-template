import React, {Component} from 'react';

class Message extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="email-app mb-4">
          <nav>
            <a href="#" className="btn btn-danger btn-block">New Email</a>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-inbox"></i> Inbox <span className="badge badge-danger">4</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-star"></i> Stared</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-rocket"></i> Sent</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-trash-o"></i> Trash</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-bookmark"></i> Important<span className="badge badge-info">5</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-inbox"></i> Inbox <span className="badge badge-danger">4</span></a>
              </li>
            </ul>
          </nav>
          <main className="message">
            <div className="toolbar">
              <div className="btn-group">
                <button type="button" className="btn btn-light"><span className="fa fa-star"></span></button>
                <button type="button" className="btn btn-light"><span className="fa fa-star-o"></span></button>
                <button type="button" className="btn btn-light"><span className="fa fa-bookmark-o"></span></button>
              </div>
              <div className="btn-group">
                <button type="button" className="btn btn-light"><span className="fa fa-mail-reply"></span></button>
                <button type="button" className="btn btn-light"><span className="fa fa-mail-reply-all"></span></button>
                <button type="button" className="btn btn-light"><span className="fa fa-mail-forward"></span></button>
              </div>
              <button type="button" className="btn btn-light"><span className="fa fa-trash-o"></span></button>
              <div className="btn-group">
                <button type="button" className="btn btn-light dropdown-toggle" data-toggle="dropdown"><span className="fa fa-tags"></span> <span className="caret"></span></button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="#">add label <span className="badge badge-danger"> Home</span></a>
                  <a className="dropdown-item" href="#">add label <span className="badge badge-info"> Job</span></a>
                  <a className="dropdown-item" href="#">add label <span className="badge badge-success"> Clients</span></a>
                  <a className="dropdown-item" href="#">add label <span className="badge badge-warning"> News</span></a>
                </div>
              </div>
            </div>
            <div className="details">
              <div className="title">Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.</div>
              <div className="header">
                <img className="avatar" src="img/avatars/7.jpg"/>
                <div className="from">
                  <span>Lukasz Holeczek</span>
                  lukasz@bootstrapmaster.com
                </div>
                <div className="date">Today, <b>3:47 PM</b></div>
              </div>
              <div className="content">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <blockquote>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </blockquote>
              </div>
              <div className="attachments">
                <div className="attachment">
                  <span className="badge badge-danger">zip</span> <b>bootstrap.zip</b> <i>(2,5MB)</i>
                  <span className="menu">
                    <a href="#" className="fa fa-search"></a>
                    <a href="#" className="fa fa-share"></a>
                    <a href="#" className="fa fa-cloud-download"></a>
                  </span>
                </div>
                <div className="attachment">
                  <span className="badge badge-info">txt</span> <b>readme.txt</b> <i>(7KB)</i>
                  <span className="menu">
                    <a href="#" className="fa fa-search"></a>
                    <a href="#" className="fa fa-share"></a>
                    <a href="#" className="fa fa-cloud-download"></a>
                  </span>
                </div>
                <div className="attachment">
                  <span className="badge badge-success">xls</span> <b>spreadsheet.xls</b> <i>(984KB)</i>
                  <span className="menu">
                    <a href="#" className="fa fa-search"></a>
                    <a href="#" className="fa fa-share"></a>
                    <a href="#" className="fa fa-cloud-download"></a>
                  </span>
                </div>
              </div>
              <form method="post" action="">
                <div className="form-group">
                  <textarea className="form-control" id="message" name="body" rows="12" placeholder="Click here to reply"></textarea>
                </div>
                <div className="form-group">
                  <button type="submit" className="btn btn-success">Send message</button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    )
  }
}

export default Message;
