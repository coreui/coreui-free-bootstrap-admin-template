# First

Checkout https://github.com/sterlp/wro4j and build it once with mvn clean install -DskipTests=true

# Core-UI AngularJS JEE

This simple application is based on:
- https://github.com/mrholek/CoreUI-Free-Bootstrap-Admin-Template/tree/master/Angular_Starter_GULP

## The follwoing is demonstrated

- Incldue JS resources using Wro4j in one combined file
- Lazy Loading of files CSS & JS with oclazyload
- Include common resources using webjars
- deploy everything in one WAR

## Open

- Some of the included JS files aren't really valid as so jsLint is offline
- Sass Build for Core-UI

## Sass Build

Due to some issues in Wro4j see pull request https://github.com/wro4j/wro4j/pull/1048 the follwing version of wro4j is needed right now:

https://github.com/sterlp/wro4j

Build this version locally, skip tests as currently one not related test is failing. Adjust then the follwing files:

- pom.xml to use the 1.8.1-SNAPSHOT version you build locally
- wro.xml to enable the build of core-ui.css
- wro.properties to add the new locator in the new version from wro4j
- index.html to use the generated core-ui.css instead of the style.css
- optional: bootstrap css could be removed now as it is build together with core-ui

Checkout the branches as I may commit a branch version with this adjustments. A local build of the wro4j version will still be required.