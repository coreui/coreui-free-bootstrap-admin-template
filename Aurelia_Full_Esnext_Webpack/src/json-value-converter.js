import {inject} from "aurelia-dependency-injection";
import {ValueConverter} from "aurelia-binding";
import {BindingSignaler, SignalBindingBehavior} from "aurelia-templating-resources";

export class JsonValueConverter {
  toView(value) {
    return JSON.stringify(value, null, "  ");
  }
}

@inject(BindingSignaler, SignalBindingBehavior)
export class JsonBindingBehavior {

  constructor(signaler, signalBindingBehavior) {
    this.signaler = signaler;
    this.signalBindingBehavior = signalBindingBehavior;
  }

  bind(binding, scope) {
    // bind the signal behavior (ie. listen on signal 'update-json')
    this.signalBindingBehavior.bind(binding, scope, 'update-json');

    // rewrite the expression to use the JsonValueConverter.
    // pass through any args to the binding behavior to the JsonValueConverter
    let sourceExpression = binding.sourceExpression;

    // do create the sourceExpression only once
    if (sourceExpression.rewritten) {
      return;
    }
    sourceExpression.rewritten = true;

    let expression = sourceExpression.expression;
    sourceExpression.expression = new ValueConverter(
      expression,
      'json',
      sourceExpression.args,
      [expression, ...sourceExpression.args]);

    // send signal to ourselves each 150ms to update the binding
    this.interval = window.setInterval(() => this.signaler.signal('update-json'), 150);
  }

  unbind(binding, scope) {
    window.clearInterval(this.interval);
    this.signalBindingBehavior.unbind(binding, scope);
  }
}
