import {customElement, bindable, inject} from "aurelia-framework";
import "bootstrap-datepicker";
import {ObserverLocator} from "aurelia-binding";

@customElement('bootstrap-datepicker')
@inject(Element, ObserverLocator)
export class AureliaBootstrapDatepicker {
  @bindable dateobj;
  @bindable dpOptions = {
    todayBtn: "linked", clearBtn: true,
    autoclose: true,
    language: "en", format: "dd.mm.yyyy"
  };

  inputFormat = 'YYYY-MM-DDTHH:mm:ss';

  constructor(element, observerLocator) {
    this.element = element;
    // subscribe to the "bar" property's changes:
    /*var subscription = observerLocator
     .getObserver(this, 'dateobj')
     .subscribe(this.onChange);*/
  }

  dateobjChanged(newValue, oldValue) {
    if (typeof newValue === 'string' && !oldValue) {
      console.log("Initialize date:", moment(newValue, self.inputFormat).toDate());
      $(this.element).datepicker('setDate', moment(newValue, self.inputFormat).toDate());
    }

  }

  attached() {
    console.log("attached")
    let self = this;
    $(this.element).datepicker(this.dpOptions)
      .on('changeDate', e => {
        console.log("Date changed from picker:", self.dateobj, e.date);
        self.dateobj = e.date;

        fireEvent(e.target, 'input')
      })


  }

  set dateobj(val) {
    let self = this;
    console.log("...................bind:", self)
    if (self.dateobj) {

    }

  }


  detached() {
    // $(this.element).datepicker('destroy')
    // .off('changeDate');
  }

  /*
   attached() {
   let self = this;
   $(this.datepicker).datepicker(this.dpOptions)
   .on('changeDate', function (event) {

   let changeEvent;
   let val = event.date;
   console.log('Date changed:', event);
   self.dateobj = val

   if (window.CustomEvent) {
   changeEvent = new CustomEvent('change', {
   detail: {
   value: val
   },
   bubbles: true
   });
   } else {
   changeEvent = document.createEvent('CustomEvent');
   changeEvent.initCustomEvent('change', true, true, {
   detail: {
   value: val
   }
   });
   }
   self.element.dispatchEvent(changeEvent);
   });
   }*/
}
function createEvent(name) {
  var event = document.createEvent('Event');
  event.initEvent(name, true, true);
  return event;
}

function fireEvent(element, name) {
  var event = createEvent(name);
  element.dispatchEvent(event);
}
