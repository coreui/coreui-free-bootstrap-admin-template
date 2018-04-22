const originalDocument = `<!DOCTYPE html>
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

    <!-- TEST-CASES: for cshtml views all references should have the "~/" prefix -->

    <!-- TEST-CASE: paths to node_modules/... should change to lib/... -->
    <link href="node_modules/flag-icon-css/css/flag-icon.min.css" rel="stylesheet">

    <!-- TEST-CASE: single quotes should change to double quotes -->
    <link href='node_modules/font-awesome/css/font-awesome.min.css' rel="stylesheet">

    <link href='node_modules/simple-line-icons/css/simple-line-icons.css' rel="stylesheet">

    <!-- Main styles for this application-->

    <!-- TEST-CASE: css/... should not change -->
    <link href="css/style.css" rel="stylesheet">

  </head>
  <body class="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
    <div class="avatar float-right">

      <!-- TEST-CASE: img-avatar should not change and img/... should change to images/... -->
      <img class="img-avatar" src="img/avatars/7.jpg" alt="admin@bootstrapmaster.com">

    </div>
    <div class="avatar float-right">
      <img class="img-avatar" src="img/avatars/4.jpg" alt="admin@bootstrapmaster.com">
    </div>
    <!-- Bootstrap and necessary plugins-->
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="node_modules/pace-progress/pace.min.js"></script>
    <script src="node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js"></script>
    <script src="node_modules/@coreui/coreui/dist/js/coreui.min.js"></script>
    <!-- Plugins and scripts required by this view-->
    <script src="node_modules/chart.js/dist/Chart.min.js"></script>
    <script src="node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/js/custom-tooltips.min.js"></script>

    <!-- TEST-CASE: js/ should not change -->
    <script src="js/charts.js"></script>

  </body>
</html>`;

const vendorReferenceList = [
  'node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/js/custom-tooltips.min.js',
  'node_modules/@coreui/coreui/dist/js/coreui.min.js',
  'node_modules/bootstrap/dist/js/bootstrap.min.js',
  'node_modules/chart.js/dist/Chart.min.js',
  'node_modules/flag-icon-css/css/flag-icon.min.css',
  'node_modules/font-awesome/css/font-awesome.min.css',
  'node_modules/jquery/dist/jquery.min.js',
  'node_modules/pace-progress/pace.min.js',
  'node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js',
  'node_modules/popper.js/dist/umd/popper.min.js',
  'node_modules/simple-line-icons/css/simple-line-icons.css',
];

const vendorReferences = [
  'node_modules/font-awesome/css/font-awesome.min.css',
  'node_modules/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/js/custom-tooltips.min.js',
];

const vendorFiles = [
  'test-fs/dest/lib/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/js/custom-tooltips.min.js',
  'test-fs/dest/lib/font-awesome/css/font-awesome.min.css',
  'test-fs/dest/lib/font-awesome/fonts/fontawesome-webfont.eot',
  'test-fs/dest/lib/font-awesome/fonts/fontawesome-webfont.eot',
  'test-fs/dest/lib/font-awesome/fonts/fontawesome-webfont.svg',
  'test-fs/dest/lib/font-awesome/fonts/fontawesome-webfont.ttf',
  'test-fs/dest/lib/font-awesome/fonts/fontawesome-webfont.woff',
  'test-fs/dest/lib/font-awesome/fonts/fontawesome-webfont.woff2',
];

const htmlDocument = `<!DOCTYPE html>
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

    <!-- TEST-CASES: for cshtml views all references should have the "~/" prefix -->

    <!-- TEST-CASE: paths to node_modules/... should change to lib/... -->
    <link href="lib/flag-icon-css/css/flag-icon.min.css" rel="stylesheet">

    <!-- TEST-CASE: single quotes should change to double quotes -->
    <link href="lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">

    <link href="lib/simple-line-icons/css/simple-line-icons.css" rel="stylesheet">

    <!-- Main styles for this application-->

    <!-- TEST-CASE: css/... should not change -->
    <link href="css/style.css" rel="stylesheet">

  </head>
  <body class="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
    <div class="avatar float-right">

      <!-- TEST-CASE: img-avatar should not change and img/... should change to images/... -->
      <img class="img-avatar" src="images/avatars/7.jpg" alt="admin@bootstrapmaster.com">

    </div>
    <div class="avatar float-right">
      <img class="img-avatar" src="images/avatars/4.jpg" alt="admin@bootstrapmaster.com">
    </div>
    <!-- Bootstrap and necessary plugins-->
    <script src="lib/jquery/dist/jquery.min.js"></script>
    <script src="lib/popper.js/dist/umd/popper.min.js"></script>
    <script src="lib/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="lib/pace-progress/pace.min.js"></script>
    <script src="lib/perfect-scrollbar/dist/perfect-scrollbar.min.js"></script>
    <script src="lib/@coreui/coreui/dist/js/coreui.min.js"></script>
    <!-- Plugins and scripts required by this view-->
    <script src="lib/chart.js/dist/Chart.min.js"></script>
    <script src="lib/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/js/custom-tooltips.min.js"></script>

    <!-- TEST-CASE: js/ should not change -->
    <script src="js/charts.js"></script>

  </body>
</html>`;

const cshtmlDocument = `<!DOCTYPE html>
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

    <!-- TEST-CASES: for cshtml views all references should have the "~/" prefix -->

    <!-- TEST-CASE: paths to node_modules/... should change to lib/... -->
    <link href="~/lib/flag-icon-css/css/flag-icon.min.css" rel="stylesheet">

    <!-- TEST-CASE: single quotes should change to double quotes -->
    <link href="~/lib/font-awesome/css/font-awesome.min.css" rel="stylesheet">

    <link href="~/lib/simple-line-icons/css/simple-line-icons.css" rel="stylesheet">

    <!-- Main styles for this application-->

    <!-- TEST-CASE: css/... should not change -->
    <link href="~/css/style.css" rel="stylesheet">

  </head>
  <body class="app header-fixed sidebar-fixed aside-menu-fixed sidebar-lg-show">
    <div class="avatar float-right">

      <!-- TEST-CASE: img-avatar should not change and img/... should change to images/... -->
      <img class="img-avatar" src="~/images/avatars/7.jpg" alt="admin@bootstrapmaster.com">

    </div>
    <div class="avatar float-right">
      <img class="img-avatar" src="~/images/avatars/4.jpg" alt="admin@bootstrapmaster.com">
    </div>
    <!-- Bootstrap and necessary plugins-->
    <script src="~/lib/jquery/dist/jquery.min.js"></script>
    <script src="~/lib/popper.js/dist/umd/popper.min.js"></script>
    <script src="~/lib/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="~/lib/pace-progress/pace.min.js"></script>
    <script src="~/lib/perfect-scrollbar/dist/perfect-scrollbar.min.js"></script>
    <script src="~/lib/@coreui/coreui/dist/js/coreui.min.js"></script>
    <!-- Plugins and scripts required by this view-->
    <script src="~/lib/chart.js/dist/Chart.min.js"></script>
    <script src="~/lib/@coreui/coreui-plugin-chartjs-custom-tooltips/dist/js/custom-tooltips.min.js"></script>

    <!-- TEST-CASE: js/ should not change -->
    <script src="~/js/charts.js"></script>

  </body>
</html>`;

module.exports = {
  originalDocument,
  vendorReferenceList,
  htmlDocument,
  cshtmlDocument,
  vendorReferences,
  vendorFiles
};
