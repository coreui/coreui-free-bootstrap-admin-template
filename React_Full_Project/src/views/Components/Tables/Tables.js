import React, { Component } from 'react';

class Tables extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Simple Table
              </div>
              <div className="card-block">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Samppa Nori</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Estavan Lykos</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-danger">Banned</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Chetan Mohamed</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <span className="badge badge-default">Inactive</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Derick Maximinus</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Friderik Dávid</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Striped Table
              </div>
              <div className="card-block">
                <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Yiorgos Avraamu</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Avram Tarasios</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-danger">Banned</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Quintin Ed</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <span className="badge badge-default">Inactive</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Enéas Kwadwo</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Agapetus Tadeáš</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Condensed Table
              </div>
              <div className="card-block">
                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Carwyn Fachtna</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Nehemiah Tatius</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-danger">Banned</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Ebbe Gemariah</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <span className="badge badge-default">Inactive</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Eustorgios Amulius</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Leopold Gáspár</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Bordered Table
              </div>
              <div className="card-block">
                <table className="table table-bordered">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Pompeius René</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Paĉjo Jadon</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-danger">Banned</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Micheal Mercurius</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <span className="badge badge-default">Inactive</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Ganesha Dubhghall</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Hiroto Šimun</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <ul className="pagination">
                  <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                  <li className="page-item active">
                    <a className="page-link" href="#">1</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">2</a></li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item"><a className="page-link" href="#">4</a></li>
                  <li className="page-item"><a className="page-link" href="#">Next</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <i className="fa fa-align-justify"></i> Combined All Table
              </div>
              <div className="card-block">
                <table className="table table-bordered table-striped table-sm">
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Date registered</th>
                      <th>Role</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Vishnu Serghei</td>
                      <td>2012/01/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Zbyněk Phoibos</td>
                      <td>2012/02/01</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-danger">Banned</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Einar Randall</td>
                      <td>2012/02/01</td>
                      <td>Admin</td>
                      <td>
                        <span className="badge badge-default">Inactive</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Félix Troels</td>
                      <td>2012/03/01</td>
                      <td>Member</td>
                      <td>
                        <span className="badge badge-warning">Pending</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Aulus Agmundr</td>
                      <td>2012/01/21</td>
                      <td>Staff</td>
                      <td>
                        <span className="badge badge-success">Active</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav>
                  <ul className="pagination">
                    <li className="page-item"><a className="page-link" href="#">Prev</a></li>
                    <li className="page-item active">
                      <a className="page-link" href="#">1</a>
                    </li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">4</a></li>
                    <li className="page-item"><a className="page-link" href="#">Next</a></li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Tables;
