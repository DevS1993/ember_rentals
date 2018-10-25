import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  maps: service(),

  didInsertElement() {
    this._super(...arguments);
    let mapElement = this.maps.getMapElement(this.location);
    let mapContainerElement = this.element.querySelector('.map-container');
    mapContainerElement.appendChild(mapElement);
  }
});