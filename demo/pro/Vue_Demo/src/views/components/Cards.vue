<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <b-card header="Card title">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card show-footer>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
          <div slot="footer">Card footer</div>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card header="<i class='fa fa-check'></i> Card with icon">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card>
          <div slot="header">
            Card with switch
            <label class="switch switch-sm switch-text switch-info float-right mb-0">
              <input type="checkbox" class="switch-input">
              <span class="switch-label" data-on="On" data-off="Off"></span>
              <span class="switch-handle"></span>
            </label>
          </div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card>
          <div slot="header">
            Card with label
            <span class="badge badge-success float-right">Success</span>
          </div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card>
          <div slot="header">
            Card with label
            <span class="badge badge-pill badge-danger float-right">42</span>
          </div>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <b-card header="Card outline" class="border-primary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card header="Card outline" class="border-secondary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card header="Card outline" class="border-success">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card header="Card outline" class="border-info">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card header="Card outline" class="border-warning">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card header="Card outline" class="border-danger">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->

    <div class="row">
      <div class="col-sm-6 col-md-4">
        <b-card variant="accent-primary" header="Card with accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card variant="accent-secondary" header="Card with accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card variant="accent-success" header="Card with accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card variant="accent-info" header="Card with accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card variant="accent-warning" header="Card with accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card variant="accent-danger" header="Card with accent">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <b-card class="bg-primary text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card class="bg-success text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card class="bg-info text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card class="bg-warning text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card class="bg-danger text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card class="bg-secondary text-center">
          <blockquote class="card-blockquote">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
            <footer>Someone famous in
              <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->
    <div class="row">
      <div class="col-sm-6 col-md-4">
        <b-card header="Card title" class="bg-primary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card header="Card title" class="bg-success">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card header="Card title" class="bg-info">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card header="Card title" class="bg-warning">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card header="Card title" class="bg-danger">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
      <div class="col-sm-6 col-md-4">
        <b-card header="Card title" class="bg-secondary">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
        </b-card>
      </div><!--/.col-->
    </div><!--/.row-->
  </div>
</template>

<script>
export default {
  name: 'cards'
}
</script>
