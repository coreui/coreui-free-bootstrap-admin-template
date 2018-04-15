const should = require('should');
const vendors = require('../../build/vendors-aspnetcore');

const vendorReferenceData = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    <meta name="description" content="CoreUI - Open Source Bootstrap Admin Template">
    <meta name="author" content="Łukasz Holeczek">
    <meta name="keyword" content="Bootstrap,Admin,Template,Open,Source,jQuery,CSS,HTML,RWD,Dashboard">
    <title>CoreUI Free Bootstrap Admin Template</title>
    <!-- Icons-->
    <link href="node_modules/flag-icon-css/css/flag-icon.min.css" rel="stylesheet">
    <link href='node_modules/font-awesome/css/font-awesome.min.css' rel="stylesheet">
    <link href='NODE_MODULES/simple-line-icons/css/simple-line-icons.css' rel="stylesheet">
    <!-- Main styles for this application-->
    <link href="css/style.css" rel="stylesheet">
  </head>
  <body class="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
    <!-- Bootstrap and necessary plugins-->
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="node_modules/pace-progress/pace.min.js"></script>
    <script src="node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js"></script>
    <script src="node_modules/@coreui/coreui/dist/js/coreui.min.js"></script>
  </body>
</html>`;

const vendorReferenceList = [
  'node_modules/flag-icon-css/css/flag-icon.min.css',
  'node_modules/font-awesome/css/font-awesome.min.css',
  'NODE_MODULES/simple-line-icons/css/simple-line-icons.css',
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/popper.js/dist/umd/popper.min.js',
  'node_modules/bootstrap/dist/js/bootstrap.min.js',
  'node_modules/pace-progress/pace.min.js',
  'node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js',
  'node_modules/@coreui/coreui/dist/js/coreui.min.js'];

describe('getVendorReferences', () => {
  it('should return vendor reference list', () => {
    vendors.getVendorReferences(vendorReferenceData).should.be.eql(vendorReferenceList);
    })
});
