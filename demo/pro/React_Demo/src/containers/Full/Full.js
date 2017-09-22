import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';
import Dashboard from '../../views/Dashboard/';
import Charts from '../../views/Charts/';
import Widgets from '../../views/Widgets/';

// Components
import Buttons from '../../views/Components/Buttons/';
import Cards from '../../views/Components/Cards/';
// import Forms from '../../views/Components/Forms/';
import Modals from '../../views/Components/Modals/';
import SocialButtons from '../../views/Components/SocialButtons/';
import Switches from '../../views/Components/Switches/';
import Tables from '../../views/Components/Tables/';
import Tabs from '../../views/Components/Tabs/';

// Icons
import FontAwesome from '../../views/Icons/FontAwesome/';
import SimpleLineIcons from '../../views/Icons/SimpleLineIcons/';

// Forms
import BasicForms from '../../views/Forms/BasicForms/';
import AdvancedForms from '../../views/Forms/AdvancedForms';
import TextEditors from '../../views/Forms/TextEditors';

// Plugins
import LoadingButtons from '../../views/Plugins/LoadingButtons/';
import Spinners from '../../views/Plugins/Spinners/';

// UI Kits
import Invoice from '../../views/UI-Kits/Invoicing/';
import Inbox from '../../views/UI-Kits/Email/Inbox/';
import Message from '../../views/UI-Kits/Email/Message/';
import Compose from '../../views/UI-Kits/Email/Compose/';

class Full extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Route path="/components/buttons" name="Buttons" component={Buttons}/>
                <Route path="/components/cards" name="Cards" component={Cards}/>
                <Route path="/components/modals" name="Modals" component={Modals}/>
                <Route path="/components/social-buttons" name="Social Buttons" component={SocialButtons}/>
                <Route path="/components/switches" name="Swithces" component={Switches}/>
                <Route path="/components/tables" name="Tables" component={Tables}/>
                <Route path="/components/tabs" name="Tabs" component={Tabs}/>
                <Route path="/forms/basic-forms" name="Basic Forms" component={BasicForms}/>
                <Route path="/forms/advanced-forms" name="Advanced Forms" component={AdvancedForms}/>
                <Route path="/forms/text-editors" name="Text Editors" component={TextEditors}/>
                <Route path="/icons/font-awesome" name="Font Awesome" component={FontAwesome}/>
                <Route path="/icons/simple-line-icons" name="Simple Line Icons" component={SimpleLineIcons}/>
                <Route path="/plugins/loading-buttons" name="Loading Buttons" component={LoadingButtons}/>
                <Route path="/plugins/spinners" name="Loading Buttons" component={Spinners}/>
                <Route path="/widgets" name="Widgets" component={Widgets}/>
                <Route path="/charts" name="Charts" component={Charts}/>
                <Route path="/ui-kits/invoicing/invoice" name="Invoice" component={Invoice}/>
                <Route path="/ui-kits/email/inbox" name="Invoice" component={Inbox}/>
                <Route path="/ui-kits/email/message" name="Message" component={Message}/>
                <Route path="/ui-kits/email/compose" name="Compose" component={Compose}/>
                <Redirect from="/" to="/dashboard"/>
              </Switch>
            </Container>
          </main>
          <Aside />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
