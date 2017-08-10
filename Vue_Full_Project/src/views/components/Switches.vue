<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-md-12">
        <b-card header="3d Switch">
          <c-switch type="3d" variant="primary" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="3d" variant="secondary" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="3d" variant="success" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="3d" variant="warning" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="3d" variant="info" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="3d" variant="danger" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch default">
          <c-switch type="default" variant="primary" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="secondary" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="success" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="warning" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="info" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="danger" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch default - pills">
          <c-switch type="default" variant="primary" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="secondary" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="success" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="warning" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="info" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="danger" :pill="true" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch outline">
          <c-switch type="default" variant="primary-outline" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="secondary-outline" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="success-outline" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="warning-outline" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="info-outline" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="danger-outline" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch outline - pills">
          <c-switch type="default" variant="primary-outline" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="secondary-outline" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="success-outline" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="warning-outline" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="info-outline" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="danger-outline" :pill="true" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch outline alternative">
          <c-switch type="default" variant="primary-outline-alt" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="secondary-outline-alt" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="success-outline-alt" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="warning-outline-alt" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="info-outline-alt" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="danger-outline-alt" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch outline alternative - pills">
          <c-switch type="default" variant="primary-outline-alt" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="secondary-outline-alt" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="success-outline-alt" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="warning-outline-alt" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="info-outline-alt" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="default" variant="danger-outline-alt" :pill="true" :checked="true"/>
        </b-card>
      </div><!--/.col-->

      <div class="col-md-6">
        <b-card header="Switch with text">
          <c-switch type="text" variant="primary" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="secondary" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="success" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="warning" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="info" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="danger" on="On" off="Off" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch with text - pills">
          <c-switch type="text" variant="primary" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="secondary" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="success" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="warning" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="info" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="danger" on="On" off="Off" :pill="true" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch with text outline">
          <c-switch type="text" variant="primary-outline" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="secondary-outline" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="success-outline" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="warning-outline" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="info-outline" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="danger-outline" on="On" off="Off" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch with text outline - pills">
          <c-switch type="text" variant="primary-outline" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="secondary-outline" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="success-outline" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="warning-outline" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="info-outline" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="danger-outline" on="On" off="Off" :pill="true" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch with text outline alternative">
          <c-switch type="text" variant="primary-outline-alt" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="secondary-outline-alt" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="success-outline-alt" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="warning-outline-alt" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="info-outline-alt" on="On" off="Off" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="danger-outline-alt" on="On" off="Off" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch with text outline alternative - pills">
          <c-switch type="text" variant="primary-outline-alt" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="secondary-outline-alt" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="success-outline-alt" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="warning-outline-alt" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="info-outline-alt" on="On" off="Off" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="text" variant="danger-outline-alt" on="On" off="Off" :pill="true" :checked="true"/>
        </b-card>
      </div><!--/.col-->

      <div class="col-md-6">
        <b-card header="Switch with icon">
          <c-switch type="icon" variant="primary" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="secondary" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="success" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="warning" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="info" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="danger" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch with icon - pills">
          <c-switch type="icon" variant="primary" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="secondary" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="success" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="warning" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="info" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="danger" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch with icon outline">
          <c-switch type="icon" variant="primary-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="secondary-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="success-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="warning-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="info-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="danger-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch with icon outline - pills">
          <c-switch type="icon" variant="primary-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="secondary-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="success-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="warning-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="info-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="danger-outline" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch with icon outline alternative">
          <c-switch type="icon" variant="primary-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="secondary-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="success-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="warning-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="info-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="danger-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :checked="true"/>
        </b-card>
      </div><!--/.col-->
      <div class="col-md-6">
        <b-card header="Switch with icon outline alternative - pills">
          <c-switch type="icon" variant="primary-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="secondary-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="success-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="warning-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="info-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
          &nbsp;&nbsp;&nbsp;
          <c-switch type="icon" variant="danger-outline-alt" v-bind="{on: '\uf00c', off: '\uf00d'}" :pill="true" :checked="true"/>
        </b-card>
      </div><!--/.col-->

      <div class="col-md-12">
        <div class="card">
          <div class="card-header">
            Sizes
          </div>
          <div class="card-body p-0">
            <table class="table table-hover table-striped table-align-middle mb-0">
              <thead>
                <th>Size</th>
                <th>Example</th>
                <th>CSS Class</th>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Large
                  </td>
                  <td>
                    <c-switch type="3d" variant="primary" size="lg" :checked="true"/>
                  </td>
                  <td>
                    Add following code <code>size="lg"</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    Normal
                  </td>
                  <td>
                    <c-switch type="3d" variant="primary" :checked="true"/>
                  </td>
                  <td>
                    -
                  </td>
                </tr>
                <tr>
                  <td>
                    Small
                  </td>
                  <td>
                    <c-switch type="3d" variant="primary" size="sm" :checked="true"/>
                  </td>
                  <td>
                    Add following code <code>size="sm"</code>
                  </td>
                </tr>
                <tr>
                  <td>
                    Extra small
                  </td>
                  <td>
                    <c-switch type="3d" variant="primary" size="xs" :checked="true"/>
                  </td>
                  <td>
                    Add following code <code>size="xs"</code>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div><!--/.col-->
    </div><!--/.row-->
  </div>
</template>

<script>
import cSwitch from '../../components/Switch'
export default {
  name: 'switches',
  components: {
    cSwitch
  },
  computed: {
    icon (icon) {
      return icon
    }
  }
}
</script>
