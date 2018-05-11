#!/usr/bin/env node

/*
* Main function for build-aspnetcore script
*
* Creates a set of distribution files arranged as per the ASP.NET Core way
*
* - Scans all html files for references to node_module files to copy those to a "lib" folder,
*   keeping the original folder structure from node_modules, to avoid possible conflicts
*   between vendors
*
* - Scans the referenced node_modules css files for references to other assets,
*   to include them in the "lib" folder as well
*
* - Changes "img" folder to "images" folder
*
* - The final result are two sets of files:
*   * html files similar to the regular CoreUI files in dist, to verify everything is working
*   * cshtml files, just like the html, but with the tweaks mentioned above
*
* - Saves the html files as Razor views (with a .cshtml extension) and a few tweaks:
*   * Adds the line @{ Layout = ""; } to bypass the standard layout
*   * Adds "~/" to all references to static files
*   * Replaces @ for @@ under certain conditions (check aspnetcore-lib.js)
*   * Replaces all href to pages for asp-route="CoreUI" asp-route-view="{page-filename}"
*   * Page links get ready to work with this controller:
*
*     [Route("{CoreUI}")]
*     public class CoreUIController : Controller
*     {
*         [Route("{view=Index}")]
*         public IActionResult Index(string view)
*         {
*             ViewData["Title"] = "CoreUI - Open Source Bootstrap Admin Template";
*
*             return View(view);
*         }
*     }
*
*/

'use strict'

const fs = require('fs');
const path = require('path');
const lib = require('./aspnetcore-lib');

const src = 'src/';
const dest = 'dist/';

const main = () => {
  let siteFiles = lib.getFolderTreeFiles(src).filter(f => !f.startsWith('src/scss/'));
  lib.copySiteFiles(src, siteFiles, dest);
  lib.generateRazorViews(dest);
  lib.generateHtmlFiles(dest);

  let htmlFiles = lib.getFolderTreeFiles(src, '.html');
  let vendorFiles = lib.getAllVendorReferences(htmlFiles);
  lib.copyVendorFiles('', vendorFiles, dest);
};

main();

